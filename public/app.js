var app = angular.module('scotcha', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })
        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: 'HomeListCtrl'
        })
.state('home.about', {
            url: '/about',
            templateUrl: 'partial-home-about.html',
            controller: 'HomeListCtrl'
        })

    $stateProvider.state('contact', {
        url: '/contact',
        templateUrl: 'partial-contact.html'
    })

    $stateProvider.state('scotch', {
    url: '/scotch/:type?temp',
    templateUrl: 'partial-scotch.html',
    controller: function($scope, $stateParams) {
      $scope.myScotch = $stateParams;
    }
  })
});

app.controller('HomeListCtrl', function($scope){
	$scope.scotches=['Balvenie', 'The Balmore', 'Highland Park'];
})
