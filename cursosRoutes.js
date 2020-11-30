const express = require("express");
const app = express.Router();
const cursosController = require('./cursosController');

// Trae todos los cursos  -> GET
app.get("/cursos", cursosController.getAllCursos);

// Crea un curso  -> POST
app.post("/cursos/nuevo", cursosController.createCurso);

// Lista un curso -> GET
app.get("/cursos/:id", cursosController.getOneCurso);

// Edita un curso -> PUT
app.put("/cursos/modificar/:id", cursosController.updateCursos);

// Borrar un curso -> DELETE
app.delete("/cursos/eliminar/:id", cursosController.deleteCurso);

module.exports = app;