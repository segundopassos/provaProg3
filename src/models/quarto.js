const {Model, DataTypes} = require('sequelize')

class Quarto extends Model{
    static init(sequelize){
        super.init({
            quantidade_cama: DataTypes.INTEGER
        },{
            sequelize: connection

        })
    }
    static associate(models){
        this.hasMany(models.Reserva, {
            foreignKey: 'quantidade_cama',
            as: "reserva"
        })
       
    }
}

module.exports = Quarto;

