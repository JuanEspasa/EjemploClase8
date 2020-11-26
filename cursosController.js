let data = require("./cursosModel");

function getAllCursos(req, res){
    res.status(200).json(data);
}

module.exports = {
    getAllCursos
};