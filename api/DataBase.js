var mongoose = require("mongoose");
mongoose.connect('mongodb://192.168.0.4:27017/AgendaContato');
var Schema = mongoose.Schema;

var contatoSchema = new Schema ({
	"nome" : String,
  "telefone" : String,
	"created_at" : { type: Date, default: Date.now }
});


module.exports = {
	contato : mongoose.model('Contato',contatoSchema)
};
