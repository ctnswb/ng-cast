angular.module('video-player')
.service('youTube', function($http){
  this.search = function(options, callback) {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        q: options.query,
        maxResults: options.max,
        key: options.key,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: true
      }
    })
    .then(function successCallback(response) {
      console.log('success 👍', response)
      callback(response.data.items);
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      console.log('failed 😭', response)
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  }
});