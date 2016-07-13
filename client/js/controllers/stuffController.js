"use strict;"

angular.module('gulptest')
.controller('stuffController', function($scope,$http,stuffService) {

	$scope.stuffArray =[];

	stuffService.getAll()
	.then( function(stuffs){
		if(stuffs) $scope.stuffArray.push(...stuffs);
	})
	.catch( err => {
		console.log(err);
	});



	$scope.addOneStuff = function(stuff){
		stuffService.addOne(stuff)
		.then( function(newStuff){
			if(newStuff) $scope.stuffArray.push(newStuff);
		})
		.catch( err => {
			console.log(err);
		});
	}

	$scope.removeOneStuff = function(stuff){
		let index = $scope.stuffArray.indexOf(stuff);
		stuffService.removeOne(stuff)
		.then( function(){
			$scope.stuffArray.splice(index,1);
		})
		.catch( err => {
			console.log(err);
		});
	}

	//  assumes uuid that doesn't change on edit
	$scope.editOneStuff = function(editedStuff){
	console.log(editedStuff);
		stuffService.editOne(editedStuff)
		.then( function(updatedStuff){
			console.log('edited');
		})
		.catch( err => {
			console.log(err);
		});
	}


});



