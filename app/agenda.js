angular
.module("agenda", ["ngRoute"])
.config(function($routeProvider) {
  $routeProvider.
     when('/', {
       templateUrl: 'templates/home.html',
       controller: 'home'
     })
});
