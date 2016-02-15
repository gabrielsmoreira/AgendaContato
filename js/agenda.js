angular
.module("agenda", ["ngRoute"])
.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: function(){
          return "templates/home.html";

        }
      },
      controller: "home"
    })
});
