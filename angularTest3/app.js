/**
 * Created by Arthur on 2016-06-19.
 */
var app = angular.module("app", ['weatherFilters']);

app.controller("mainCtrl", function () {
    this.name = "Animal";
    this.sound = "Rawr!";

    this.animalClick = function () {
        var message = this.name + " says:" + this.sound;
        alert(message);
    }
});

app.controller("dogCtrl", function ($controller) {
    var childCtrl = this;
    childCtrl.child = $controller('mainCtrl', {});

    childCtrl.child.name = "Dog";
    childCtrl.child.bark = "Woof";
    childCtrl.child.getDogData = function () {
        var message = this.name + " says:" + this.sound + " and " + this.bark;
        alert(message);
    }
});



app.controller("filterCtrl", function ($scope) {
    $scope.name = "ANDRZEJ golota";
    $scope.money = 55;

    $scope.students = [
        {name: "George Thomas", gpa: 3.5},
        {name: "Susy Smith", gpa: 3.6},
        {name: "Paul Marks", gpa: 3.2},
        {name: "Sue Edgar", gpa: 3.8}
    ];

    $scope.student = {
        gpas:[
            {name: "George Thomas", gpa: 3.5},
            {name: "Susy Smith", gpa: 3.6},
            {name: "Paul Marks", gpa: 3.2},
            {name: "Sue Edgar", gpa: 3.8}
        ]
    };

    $scope.currDate = new Date();

    $scope.randomStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "

    $scope.randArray = [
        "Tomato",
        "Potato",
        "Bread",
        "Pickles",
        "Raisins"
    ];

    $scope.weather = [
        {day: "Monday", rain: false},
        {day: "Tuesday", rain: true}
    ];



});

// app.filter('raining', function(){
//     return function(input){
//         return input ? '\u2602' : '\u2600';
//     };
// });