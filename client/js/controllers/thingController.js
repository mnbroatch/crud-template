function thingController($scope, $http, thingService, $rootScope) {
  $scope.thingArray = [];

  $scope.addOneThing = function (thing) {
    thingService.addOne(thing, $rootScope.currentUser)
    .then(newThing => {
      if (newThing) $scope.thingArray.push(newThing);
    })
    .catch(err => {
      console.log(err);
    });
  };

  $scope.removeOneThing = function (thing) {
    const index = $scope.thingArray.indexOf(thing);
    thingService.removeOne(thing)
    .then(() => {
      $scope.thingArray.splice(index, 1);
    })
    .catch(err => {
      console.log(err);
    });
  };

  $scope.editOneThing = function (editedThing) {
    console.log(editedThing);
    thingService.editOne(editedThing)
    .then(updatedThing => {
      console.log(updatedThing);
    })
    .catch(err => {
      console.log(err);
    });
  };
}

angular.module('crud-template')
.controller('thingController', thingController);
