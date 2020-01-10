const Hospede = require('../models/hospedes');

module.exports = {
    async InserirHospede(req, res){
        const {nome, email} = req.body;
        console.log({nome, email})
        const hospede = await Hospede.create({nome, email});

        return res.json(hospede);
    },
    
    async ListarHospedes(req, res){
        const listaHospedes = await Hospede.findAll();
        return res.json(listaHospedes)
    },
    

    async GetHospedeId(req,res){
        const {id} = req.params;
        const hospede = await hospede.findByPk(id);
       if(!hospede){
           return res.status(400).json({erro: "Usuario não encontrado!"});
       }
        return res.json(hospede)
    }
    

}