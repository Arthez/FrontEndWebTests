/**
 * Created by Arthur on 2016-06-17.
 */
var app = angular.module('app', []);

app.controller('ctrl', function ($scope) {
    
    $scope.people = [
        {name: "Arthur", age: 16},
        {name: "Jack", age: 22},
        {name: "Granpa", age: 88}];
    
    $scope.number1 = 0;
    $scope.number2 = 0;

    $scope.calculateNumbers = function () {
        $scope.result = $scope.number1 + ' + ' + $scope.number2 + ' = ' + (+$scope.number1 + +$scope.number2);
    };

    $scope.changeResultColor = function () {
        // $('#result_text').addClass('.resultText');
        angular.element($('#result_text')).addClass('resultText');
    };
});

app.controller('listCtrl', function ($scope) {
    $scope.shopList = [
        {item: 'pasta', purchased: false},
        {item: 'oil', purchased: false},
        {item: 'bread', purchased: true},
        {item: 'potatoes', purchased: false},
        {item: 'fish', purchased: false},
        {item: 'chicken', purchased: false},
        {item: 'ham', purchased: true},
        {item: 'cheese', purchased: true}
    ];
    
    $scope.getProperList = function () {
        return $scope.showOrder ? "orderedList.html" : "unorderedList.html";
    }

});

