var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var mongoDB = require("./DataBase");


function inserirContato(router)
{
    router.route("/contato").post(function(req,res){
        var response = {};
        var db = new mongoDB.contato();

        db.nome = req.body.nome;
        db.telefone = req.body.telefone;

        db.save(function(err){
        if(err) {
                response = {"erro" : true,"mensagem" : "Erro ao adicionar dados"};
            } else {
                response = {"erro" : false,"message" : "Dados adicionados", "data":db};
            }
      res.json(response);

        });
    });
}

function pesquisarContato(router)
{

router.route("/contato").get(function(req,res){
  var response = {};

  var db = new mongoDB.contato();

    mongoDB.contato.find({},function(err,data){
      if (err)
      {
              response = {"erro" : true,"mensagem" : "Erro ao adicionar dados"};
      }
      else {
          response = {"erro" : false,"message" : "consulta efetuada", "data":data};
      }

      res.json(response);
    });

    });
}


module.exports = {
    registerAll : function(router){
        inserirContato(router);
        pesquisarContato(router);
    }
}
