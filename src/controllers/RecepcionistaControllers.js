const Recepcionista = require('../models/recepcionistas')
const Reservas = require('../models/reserva')

module.exports = {
    async adicionarRecepcionista(req, res){
        const {id} = req.params;
        const {nome} = req.body;

        const recepcionista = await Recepcionista.findByPk(id);
        if(!recepcionista){
            return res.status(400).json({
                erro:"recepcionista não existe"})
        }

        const [created] = await Recepcionista.findOrCreate({
            where : {nome}
        }) 

        await recepcionista.addRecepcionista(reserva)

        return res.json(reserva)
    },
    async rece1(req,res){
        
    }

    
}