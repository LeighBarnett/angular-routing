var app = angular.module('scotcha', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

 $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'partial-home.html'
  })


 $stateProvider.state('contact', {
    url: '/contact',
    templateUrl: 'partial-contact.html'
  })
}); 
 
