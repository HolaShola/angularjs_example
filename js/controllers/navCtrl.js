myApp.controller('navCtrl', function ($scope, $location, $route, $window, config, authorization) {
    
      $scope.auth = authorization;
    
      $scope.navigate = function (e) {
        var url = (e.currentTarget.hash || '').substring(1);
        console.log("url = " + url + ", $location.path = " + $location.path());
    
        if (url.indexOf('/') === 0) {
          e.preventDefault();
    
          if ($location.path() === url) {
            $route.reload();
          } else {
            $location.url(url);
          }
        }
      };
    
      $scope.isSelected = function (val) {
        return $location.path() == val;
      };
    
    
      $scope.isTopNavigationHidden = config.hideTopNavigation || $window.self !== $window.top;
    });
    