angular.module('video-player')
.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function (youTube) {


    this.searchResults = function (query) {
      var options = {};
      options.key = window.YOUTUBE_API_KEY;
      options.query = query;
      options.max = 5;
      youTube.search(options, (function(videos){
        this.videos = videos;
        this.currentVideo = videos[0];
      }).bind(this));
      this.selectVideo = (function (video) {
        this.currentVideo = video;
      }).bind(this);
    }.bind(this);

    this.searchResults('cat');

  }
});