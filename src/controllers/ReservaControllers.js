
const Hospede = require('../models/hospedes')
const Reserva = require('../models/reserva')


module.exports = {
    async adicionarReserva(req, res){
       
       
        
        const {id, data_entrada,data_saida, valor} = req.body;
        const {hospede_id} = req.params;
        console.log(hospede_id)
        const hospede = await User.findByPk(hospede_id);
        if(!hospede){
            return res.status(400).json({
                erro:"Usuario não existe"})
        }
        const reserva = await Reserva.create({
            id,
            data_entrada,
            data_saida,
            valor
            

        })
        return res.json(reserva)
        
    },
    
    async buscarReserva(req, res){
        const {hospede_id} = req.params;
        const hospede = await Hospede.findByPk(hospede_id, {
            include: {association: 'reservas'}
        });
        return res.json(hospede)
        

        //const endereco = await Endereco.findAll({where: {user_id}});

        
    },
    
    async ListarReservasHosp1(req, res){

    }
    
}
