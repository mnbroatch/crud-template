"use strict;"

var app = angular.module('gulptest', ['ui.bootstrap','ui.router','xeditable']); 
app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('stuff', {url: '/', templateUrl: 'html/stuff.html', controller: 'stuffController'})
      .state('thing', {url: '/', templateUrl: 'html/thing.html', controller: 'thingController'})

    $urlRouterProvider.otherwise('/');

});

