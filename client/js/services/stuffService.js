function stuffService($http) {
  this.getAll = () =>
  $http({
    method: 'GET',
    url: '/api/stuffs',
  })
  .then(res =>
    res.data || null
  )
  .catch(err => {
    console.log('err: ', err);
  });

  this.addOne = (stuff, user) =>
  $http({
    method: 'POST',
    url: '/api/stuffs',
    data: { stuff, user },
  })
  .then(res =>
    res.data || null
  )
  .catch(err => { console.log('err: ', err); });

  this.removeOne = (stuff) => {
    $http({
      method: 'DELETE',
      url: `/api/stuffs/${stuff._id}`,
    });
  };

  this.editOne = (stuff) =>
  $http({
    method: 'PUT',
    url: `/api/stuffs/${stuff._id}`,
    data: stuff,
  })
  .then(res =>
    res.data || null
  )
  .catch(err => { console.log('err: ', err); });
}

angular.module('crud-template')
.service('stuffService', stuffService);
