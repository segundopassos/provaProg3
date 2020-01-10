const {Model, DataTypes} = require('sequelize')

class Recepcionista extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
        },{
            sequelize,
            tableName: "recepcionistas"
        })
    }
    static associate(models){
        this.belongsToMany(models.Hospede, {
            foreignKey: 'recep_id',
            through: "quartos",
            as: "hospedes"})
    }
}

module.exports = Recepcionista;