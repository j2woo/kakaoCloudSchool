const Sequelize=require('sequelize');
module.exports=class HashTag extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            //칼럼에 대한 설정
            title:{
                type:Sequelize.STRING(15),
                allowNull:false,
                unique:true
            }
           
        },{
            // 테이블에 대한 설정
            sequelize,
            timestamps:true,
            underscored:false,
            modelName:'HashTag',
            tableName:'hashtags',
            paranoid:false,
            charset:'utf8mb4',
            collate:'utf8mb4_general_ci'
        });
    }

    // 관계에 대한 설정
    static associate(db){
      db.HashTag.belongsToMany(db.Post, {through:'PostHashTag'})
    }
}