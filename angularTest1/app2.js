/**
 * Created by Arthur on 2016-06-18.
 */
var app2 = angular.module('app2', []);

app2.controller('listCtrl', function ($scope) {
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
    
});