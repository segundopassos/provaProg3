const express = require('express')
const routes = express.Router();



const HospedeController = require("./controllers/HospedeControlers")
const RecepcionistaController = require("./controllers/RecepcionistaControllers")

/*
const ReservaController = require("./controllers/ReservaControlers")
const RecepcionistaController = require("./controllers/RecepcionistaControllers")
*/

routes.get('/',(req, res) =>{
    res.send("Olá Turma");
})

//ROTAS RECEPSIONISTA
routes.post('/recepcionistas', RecepcionistaController.adicionar)

routes.get('/recepcionistas/', RecepcionistaController.Listar)

routes.get('/reservas/hospede_id', Reservaontroller.buscarReserva)

//ROTAS HOSPEDE

routes.post('/hospede', HospedeController.InserirHospede);

routes.get('/hospede/', HospedeController.ListarHospedes);

routes.get('/hospede/:id', HospedeController.GetHospedeId);

//ROTAS QUARTOS

routes.post('/quartos', QuartoController.InserirQuarto);
routes.get('/quartos/', QuartoController.ListarQuarto);
routes.get('/quartos/:id', QuartoController.GetQuartoId);


routes.post('/recepcionistas/1/hospede/1/quarto/1', RecepcionistaController.rece1);
routes.get('/hospede/1/reserva', ReservaController.ListarReservasHosp1);

module.exports = routes;