const Sequelize = require('sequelize');
const dbConfig = require("../config/database")


const Hospede = require("../models/hospedes")
const Reserva= require("../models/reserva")
const Recepcionista= require("../models/recepcionistas")


const connection = new Sequelize(dbConfig);

module.exports = connection;