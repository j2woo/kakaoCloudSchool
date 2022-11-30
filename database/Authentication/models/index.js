
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];


const sequelize=new Sequelize(config.database, config.username, config.password, config);

const db={};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 모델들 가져오기
const User=require('./user');
const Post=require('./post');
const HashTag=require('./hashtag');

db.User=User;
db.Post=Post;
db.HashTag=HashTag;

// 초기화 작업
User.init(sequelize);
Post.init(sequelize);
HashTag.init(sequelize);

// 관계 설정
User.associate(db);
Post.associate(db);
HashTag.associate(db);

module.exports = db;
