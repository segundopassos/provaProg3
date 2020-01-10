const Quarto = require('../models/quarto');

module.exports = {
    async InserirQuarto(req, res){
        const {quantidade_cama} = req.body;
        console.log({quantidade_cama})
        const quarto = await Quarto.create({quantidade_cama});

        return res.json(quarto);
    },
    
    async ListarQuarto(req, res){
        const ListarQuartos = await Quarto.findAll();
        return res.json(ListarQuartos)
    },
    

    async GetHospedeId(req,res){
        const {id} = req.params;
        const quarto = await Quarto.findByPk(id);
       if(!quarto){
           return res.status(400).json({erro: "Quarto não encontrado!"});
       }
        return res.json(quarto)
    }
    

}