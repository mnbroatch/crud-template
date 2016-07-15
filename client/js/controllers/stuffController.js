function stuffController($scope, $http, stuffService, $rootScope) {
  $scope.stuffArray = [];

  $scope.addOneStuff = function (stuff) {
    stuffService.addOne(stuff, $rootScope.currentUser)
    .then(newStuff => {
      if (newStuff) $scope.stuffArray.push(newStuff);
    })
    .catch(err => {
      console.log(err);
    });
  };

  $scope.removeOneStuff = function (stuff) {
    const index = $scope.stuffArray.indexOf(stuff);
    stuffService.removeOne(stuff)
    .then(() => {
      $scope.stuffArray.splice(index, 1);
    })
    .catch(err => {
      console.log(err);
    });
  };

  $scope.editOneStuff = function (editedStuff) {
    console.log(editedStuff);
    stuffService.editOne(editedStuff)
    .then(updatedStuff => {
      console.log(updatedStuff);
    })
    .catch(err => {
      console.log(err);
    });
  };
}

angular.module('crud-template')
.controller('stuffController', stuffController);
