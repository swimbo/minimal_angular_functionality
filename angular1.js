// console.log('hi bo')


//First we need to creat a Module
angular.module('DinosaurApp', [] )  // known as a "setter" function

// Next, make a controller
angular.module('DinosaurApp') // known as a "getter" function
  .controller('treeStar',['$scope', function($scope){
    console.log('Get dem treestars!')

    //$scope is the object in our controllers
    //that exposes information/data to our view
    //ONLY information/data attached to $scpe is available to us in the view

    $scope.greeting = 'Hello there young dinosaur.  Do you eat treestars?'
    $scope.name = 'Bo'
    $scope.getName = function(){
      return $scope.name
    }

  }])
