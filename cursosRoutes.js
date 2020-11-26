const express = require("express");
const app = express.Router();
const cursosController = require('./cursosController');

// Trae todos los cursos  -> GET
app.get("/curos", cursosController.getAllCursos);

module.exports = app;