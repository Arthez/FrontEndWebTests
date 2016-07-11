/**
 * Created by Arthur on 2016-06-20.
 */
var app = angular.module("sortingApp", ['ngMaterial']);

app.controller('sortingCtrl', function ($scope) {

    $scope.hasInk = true;
    $scope.isDisabled = true;
    $scope.isActive = true;

    $scope.onSwitchChange = function () {
        console.log("Switch1 is " + $scope.isActive);
    };


    const PI = 3.14;
    console.log("PI = " + PI);


    $scope.allValues1 = [2, 3, 4, 1, 5];
    // $scope.allValues1 = [];
    // $scope.allValues1 = [-3,-2,-1,0,0,0];
    $scope.allValues2 = [2, 2, 2, 2, 2];
    $scope.allValues3 = [3, 1, 3, 5, 7, 9];
    $scope.allValues4 = [5, 4, 3, 2, 1];
    $scope.allValues5 = [-1, 0, 2, 5, 7];

    $scope.identity = angular.identity;

    $scope.sorted1 = false;
    $scope.sorted2 = false;
    $scope.sorted3 = false;
    $scope.sorted4 = false;
    $scope.sorted5 = false;

    var isSorted0 = function (arrayForCheck) {

        var len = arrayForCheck.length - 1;
        for (var i = 0; i < len; ++i) {
            if (arrayForCheck[i] > arrayForCheck[i + 1]) {
                return false;
            }
        }
        return true;
    };

    $scope.isSorted2 = function (arrayForCheck) {
        // console.log("is an array: " +angular.isArray(arrayForCheck));

        var length = arrayForCheck.length - 1;
        var direction = (arrayForCheck[0] > arrayForCheck[1]);

        for (var index = 1; index < length; ++index) {
            if (direction) {
                if (arrayForCheck[index] < arrayForCheck[index + 1]) {
                    return false;
                }
            } else {
                if (arrayForCheck[index] > arrayForCheck[index + 1]) {
                    return false;
                }
            }
        }
        return true;
    };

    $scope.isSorted = function (arrayToCheck) {
        // console.log("is an array: " +angular.isArray(arrayToCheck));
        // console.log("---------------------------------");
        var loopLength = arrayToCheck.length - 1;
        if (loopLength < 2) {
            return true;
        }

        var directionValue = arrayToCheck[0] - arrayToCheck[loopLength];
        var subtractValue = 0;
        //var correctValues6 = [1,1,1,0,-1,-2];

        for (var index = 0; index < loopLength; ++index) {
            subtractValue = arrayToCheck[index] - arrayToCheck[index + 1];
            // console.log("dir: " + directionValue + "; sub: " + subtractValue);
            if (directionValue == 0 && subtractValue != 0) {
                return false;
            } else if (directionValue < 0 && subtractValue > 0) {
                return false
            } else if (directionValue > 0 && subtractValue < 0) {
                return false;
            }
        }
        return true;
    };


    var sortingFun = function (array) {
        return $scope.isSorted(array);
    };
    $scope.sorted1 = sortingFun($scope.allValues1);
    $scope.sorted2 = sortingFun($scope.allValues2);
    $scope.sorted3 = sortingFun($scope.allValues3);
    $scope.sorted4 = sortingFun($scope.allValues4);
    $scope.sorted5 = sortingFun($scope.allValues5);

});