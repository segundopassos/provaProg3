const {Model, DataTypes} = require('sequelize')

class Hospede extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING
        },{
            sequelize: connection

        })
    }
    static associate(models){
        this.hasMany(models.Reserva, {
            foreignKey: 'hospede_id',
            as: "reservas"})
        this.belongsToMany(models.Recepcionista, {
            foreignKey:"hospede_id",
            through: "quartos",
            as: "recepcionistas"
        })
    }
}

module.exports = Hospede;