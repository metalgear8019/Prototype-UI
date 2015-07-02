var app = angular.module('StarterApp', ['ngMaterial', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/index.html',
      controller: 'AppCtrl'
    })
    .when('/test', {
      templateUrl: 'partials/test.html',
      controller: 'AppCtrl2'
    })
    .when('/add', {
      templateUrl: 'partials/add.html',
      controller: 'addMealController'
    });
}]);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
  $scope.meals = [
    {
      'name': 'Hamburger with cake on top',
      'calories': '456 cal',
      'unit': 'serving(s)',
      'quantity': '2',
      'image': 'img/angular-logo.svg'
    },
    {
      'name': 'Fries with french sticks',
      'calories': '456 cal',
      'unit': 'serving(s)',
      'quantity': '3',
      'image': 'img/angular-logo.svg'
    },
    {
      'name': 'Porkchop with Monggos',
      'calories': '456 cal',
      'unit': 'serving(s)',
      'quantity': '1',
      'image': 'img/angular-logo.svg'
    }
  ];
}])

.controller('AppCtrl2', function($scope) {
    $scope.items = [1,2,3,4,5];
      $scope.selected = [];
      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
      };
      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };
})

.controller('addMealController', ['$scope', function($scope) {
  
}]);