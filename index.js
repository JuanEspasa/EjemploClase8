
let express = require("express");

let app = express();

let bodyParser = require ("body-parser");
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({ limit:"50mb", extended: true}));


app.listen(3000, function () {
    console.log("Aplicacion funcionando")
});