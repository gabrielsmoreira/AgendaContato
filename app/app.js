
$(".circle-add").click(function(){
  $("#modalContato").modal("show");
});

$("#btnGravar").click(function(){

$.ajax(
  {
    method:"POST",
    url: "http://192.168.0.4/api/contato",
    data:  {
      nome: "Gabriel",
      telefone:"11986133429"
    }
}
).done (function (data) {
            alert(data);
            console.log(data);
          });
});
