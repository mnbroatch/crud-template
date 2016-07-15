const app = angular.module('crud-template', ['ui.bootstrap', 'ui.router', 'xeditable']);

function module($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('stuff', { url: '/', templateUrl: 'html/stuff.html', controller: 'stuffController' })
  .state('thing', { url: '/', templateUrl: 'html/thing.html', controller: 'thingController' });

  $urlRouterProvider.otherwise('/');
}

app.config(module);
