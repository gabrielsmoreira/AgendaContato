angular
.module("agenda")
.controller("home", function($scope, $route, $routeParams,$http, $location) {

$("html").delegate(".circle-add", "click", function(){
    $("#modalContato").modal("show");
  });

  $http.get("/api/contato").then(function(response){
    $scope.contatos = response.data.data;
  });
});
