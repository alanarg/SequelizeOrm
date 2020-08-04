const {Model, DataTypes}= require('sequelize')

class Tech extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
         
        },{
            sequelize
        })
    }
    static associate(models){
        //Relação de muitos para muitos
        this.belongsToMany(models.User, {foreignKey:'tech_id', through:'user_techs', as:'users'});
    }
}

module.exports = Tech;