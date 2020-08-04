const {Model, DataTypes}= require('sequelize')

class Address extends Model{
    static init(sequelize){
        super.init({
            cep: DataTypes.STRING,
            rua: DataTypes.STRING,
            numero: DataTypes.INTEGER
        },{
            sequelize
        })
    }
    //É PRECISO ESTABELECERO RELACIONAMENTO NO MODEL DA SEGUINTE FORMA
    static associate(models){
        //é possível se relacionar mais de uma vez, por isso utilizar esse parâmetros identificadores
        this.belongsTo(models.User, {foreignKey:'user_id', as:'user'});
    }
}

module.exports = Address;