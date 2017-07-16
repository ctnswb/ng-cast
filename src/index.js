angular.module('video-player', [])
.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
})
.controller('MainCtrl',
  function MainCtrl(){
    this.videos = window.exampleVideoData;
    this.video = window.exampleVideoData[0];
  }
)