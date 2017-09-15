angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function (youTube) {
      this.searchResults = query => {
        var options = {};
        options.key = window.YOUTUBE_API_KEY;
        options.query = query;
        options.max = 5;

        youTube.search(options,
          videos => {
            this.videos = videos;
            this.currentVideo = videos[0];
          }
        );
        this.selectVideo = video => this.currentVideo = video;
      };
      this.searchResults('pizza dough');
    }
  });