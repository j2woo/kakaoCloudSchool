const express = require('express');
const morgan = require('morgan');
const path = require('path');
const multer = require('multer');
const fs = require('fs')
const app = express();
app.set('port', process.env.PORT || 9000);
// 로그를 화면에 출력
app.use(morgan('dev'));
// form이 아닌 형태의 POST 방식의 파라미터를 읽기 위한 설정ㅎ
let bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

//파일 다운로드
let util = require('util')
let mime = require('mime')
try {
    fs.readdirSync('img');
} catch (error) {
    console.error('img 폴더가 없어 img 폴더를 생성합니다.');
    fs.mkdirSync('img');
}

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'img/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 10 * 1024 * 1024 },
});
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

let MongoClient = require('mongodb').MongoClient;
let databaseUrl = 'mongodb://127.0.0.1:27017/';
// node 데이터베이스의 item 컬렉션에 존재하는 모든 데이터를 리턴
app.get('/item/all', (req, res) => {
    MongoClient.connect(databaseUrl, { useNewUrlParser: true }, (error, database) => {
        if (error) {
            console.log(error);
            res.json({ 'result': false });
        } else {
            let db = database.db('node');
            db.collection("item").find().sort({ itemid: -1 }).toArray((err, items) => {
                if (err) throw err;
                res.json({ 'count': items.length, 'list': items, 'result': true });

            });
        }
    });
});

app.get('/item/paging', (req, res) => {
    let pageno = req.query.pageno;
    let count = req.query.count;
    // 건너뛸 개수 계산
    if (pageno == undefined) {
        pageno = 1;
    }
    if (count == undefined) {
        count = 2;
    }
    let start = (parseInt(pageno) - 1) * parseInt(count);

    MongoClient.connect(databaseUrl, { useNewUrlParser: true }, (error, database) => {
        if (error) {
            console.log(error);
            res.json({ 'result': false });
        } else {
            let db = database.db('node');
            db.collection("item").find().sort({ itemid: -1 }).skip(start).limit(parseInt(count)).toArray((err, items) => {
                if (err) throw err;
                res.json({ 'count': items.length, 'list': items, 'result': true });

            });
        }
    });
});
//상세보기
//기본키 하나의 데이터를 필요로 하는 경우가 많고
//결과는 하나의 데이터를 리턴하는 경우가 많고
//그 이외에 주위의 3 - 10 여 개의 같이 리턴하는 경우도 많음
app.get('/item/:itemid', (req, res) => {
    //클라이언트의 데이터 받아오기
    //url에 포함된 데이터 받기
    let itemid = req.params.itemid;

    //데이터베이스 연결
    MongoClient.connect(databaseUrl, { useNewUrlParser: true },
        (error, database) => {
            if (error) {
                console.log(error);
                res.json({ "result": false, "message": "이유" });
            } else {
                //데이터베이스 가져오기
                let db = database.db('node');
                //item 컬렉션의 모든 데이터 가져오기
                db.collection('item')
                    .findOne({ "itemid": Number(itemid) }, (error, item) => {
                        if (error) {
                            console.log(error);
                            res.json({ "result": false, "message": "이유" });
                        } else {
                            res.json({ "result": true, "item": item })
                        }
                    });
            }
        });
});



//데이터 삽입 구현
//itemname, description, price, pictureurl(파일) 받기
app.post('/item', upload.single('pictureurl'), (req, res) => {
    //파라미터 읽어오기
    const itemname = req.body.itemname;
    const description = req.body.description;
    const price = req.body.price;
    let pictureurl;
    //업로드한 파일이 있으면 파일의 이름을 설정하고
    //없으면 디폴트 값 설정
    if(req.file){
        pictureurl = req.file.filename;
    }else{
        pictureurl = 'default.jpg';
    }

    MongoClient.connect(databaseUrl, {useNewUrlParser:true},
        (error, database) => {
            if(error){
                console.log(error);
                res.json({"result":false});
            }else{
                let db = database.db('node');
                //가장 큰 itemid를 찾아오기
                db.collection("item").find({},
                    {projection:{_id:0, itemid:1}})
                    .sort({itemid:-1}).limit(1)
                    .toArray((error, result) => {
                        let itemid = 1;
                        if(result[0] != null){
                            itemid = result[0].itemid + 1;
                        }
                        db.collection('item').insertOne({
                            "itemid":itemid,
                            "itemname":itemname,
                            "descritpion":description,
                            "price":price,
                            "pictureurl":pictureurl
                        }, (error, result) => {
                            if(error){res.json({"result":false})}
                            else{res.json({"result":true})}
                        })
                })
            }
    })
});
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message)
})
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});