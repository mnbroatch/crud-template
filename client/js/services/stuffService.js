"use strict;"

angular.module('gulptest')
.service('stuffService', function($http){


	this.getAll = () => {
		return $http({
			method:'GET',
			url: '/api/stuffs'
		})
		.then( res => {
			if (res.data.length)
				return res.data;
		})
		.catch(err => {
			console.log('err: ', err);
		});
	}

	this.addOne = (stuff) => {
		return $http({
			method:'POST',
			url: '/api/stuffs',
			data: stuff
		})
		.then( res => {
			if (res.data){
				return res.data;
			}
		})
		.catch(err => {console.log('err: ', err)});
	}

	this.removeOne = (stuff) => {
		return $http({
			method:'DELETE',
			url: '/api/stuffs/' + stuff._id
		});
	}

	this.editOne = (stuff) => {
		return $http({
			method:'PUT',
			url: '/api/stuffs/' + stuff._id,
			data: stuff
		})
		.then( res => {
			if (res.data){
				return res.data;
			}
		})
		.catch(err => {console.log('err: ', err)});
	}


});

