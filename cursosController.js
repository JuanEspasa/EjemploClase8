let data = require("./cursosModel");

function getAllCursos(req, res){
    res.status(200).json(data);
}

function createCurso(req, res){
    let itemIds = data.map((item) => item.id);
    let nuevoId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
    let nuevoCurso ={
        id: nuevoId,
        nombre:req.body.nombre,
        duracion:req.body.duracion,
    };
    data.push(nuevoCurso);
    res.status(201).json(nuevoCurso);
}

function getOneCurso(req, res) {
    let curso = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (curso) {
        res.status(200).json(curso);
    } else {
        res.status(404).json("No se encontró ");
    }
}

function updateCursos(req, res) {
    let curso = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (curso) {
        let modificarCurso = {
            id: req.body.id,
            nombre: req.body.nombre,
            duracion: req.body.duracion,
        };
        let encontrado = data.indexOf(curso);
        data.splice(encontrado, 1, modificarCurso);
        res.status(200).json("Curso Modificado");
    } else {
        res.status(404).json("No existe Curso.");
    }
}

function deleteCurso(req, res) {
    let curso = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (curso) {
        let encontrado = data.indexOf(curso);
        data.splice(encontrado, 1);
        res.status(200).json("Curso Eliminado.");
    } else {
        res.status(404).json("No existe Curso.");
    }
}

module.exports = {
    getAllCursos,
    createCurso,
    getOneCurso,
    updateCursos,
    deleteCurso
};