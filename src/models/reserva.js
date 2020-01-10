const {Model, DataTypes} = require('sequelize')

class Reserva extends Model{
    static init(connection){
        super.init({
        

          valor: DataTypes.FLOAT  
        }, {
            sequelize: connection
            
        })

    }
    static associate(models){
        this.belongsTo(models.Hospede, {
            foreignKey : 'hospede_id', 
            as :'possuiUsuario'
        })
    }
}

module.exports = Reserva;