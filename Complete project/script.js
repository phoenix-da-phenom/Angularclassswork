var app = angular.module("myApp",[]);
app.controller("myCtrl", function($scope , $http){
$scope.meals=[]
$http.get("https://www.themealdb.com/api/json/v1/1/search.php?f=a").then(function(data){
    $scope.meals=data.data.meals
    
})


})

