var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var router = express.Router();
var contatoRepositorie = require("./Repositorie");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

contatoRepositorie.registerAll(router);

router.get("/", function (req, res) {
	res.json({ "erro": false, "mensagem": "Hoje e dia de alegria" });
});

app.use('/', router);
app.listen(8080);
console.log("Listening to port 8080 at 127.0.0.1");
