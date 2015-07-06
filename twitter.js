angular.module('twitterClone', [])
  .controller('twitterController', function($scope, $http) {
    $scope.tweets = [];
    this.URLs = []
    $scope.errorMessage = '';


    this.addURL = function() {

      var url = 'http://' + this.URLtext + '/apps/twitter';
      //var url = "http://api.danielfang.org"

      var self = this;
      $http.get(url).

        success(function(data, status, headers, config) {
          console.log(data)
          self.URLs.push(self.URLtext);
          self.URLtext = '';
          if(data.constructor != Array){
            $scope.errorMessage = url + ': Invalid format for data'
            return;
          }
          for(var i = 0; i < data.length; ++i){
            if(data[i].text && data[i].time)
            $scope.tweets.push(data[i]);

          }
          $scope.tweets = _.sortBy($scope.tweets, 'time');
        }).
        error(function(data, status, headers, config) {
          $scope.errorMessage = url + ': network error';
        });

    }

    //Only for testing, remove me
    this.URLtext = "localhost:3000";
    this.addURL();

  });
