/**
 * Created by Arthur on 2016-06-19.
 */
var app = angular.module("app", []);

app.controller("mainCtrl", function ($scope, HelloService, HelloFactory, $interval) {
    HelloFactory.helloFactory();
    HelloService.globalHelloService();

    // time being every 2 seconds in this situation
    $interval(function() {
        var hour = new Date().getHours();

        // Add a starting 0 and then slice the last
        // to numbers off the string
        var minutes = ('0' + new Date().getMinutes()).slice(-2);
        var seconds = ('0' + new Date().getSeconds()).slice(-2);
        $scope.time = hour + ":" + minutes + ":" + seconds;
    }, 1000);

    $scope.players = [{name: "Barry Bonds", avg: 0.298, hr: 762, obp: 0.444},
        {name: "Hank Aaron", avg: 0.305, hr: 755, obp: 0.374},
        {name: "Babe Ruth", avg: 0.342, hr: 714, obp: 0.474},
        {name: "Ted Williams", avg: 0.344, hr: 521, obp: 0.482}];
});

app.service('HelloService', function () {
    this.globalHelloService = function () {
        console.log("HELLO SERVICE");
    }
});

app.factory("HelloFactory", function () {
    var factory = {};
    factory.helloFactory = function () {
        console.log("HELLO FACTORY");
    };

    return factory;
});

app.directive("getPlayerInfo", function ($compile) {
    return function (scope, element, attrs) {
        // The template
        var playerList = "<ul><li ng-repeat='player in players'>{{player.name}}</li></ul>";

        // Wrap it in a jqLite object
        var listElem = angular.element(playerList);

        // Create the compile function which
        // generates are HTML
        var compileFunc = $compile(listElem);

        // Process our content
        compileFunc(scope);

        // Update our jqLite object and add it to the
        // document
        element.append(listElem);
    }
});

app.directive("przerwa", function ($compile) {
    return function (scope, element, attrs) {
        // The template
        var template = "<hr><br><hr>";

        // Wrap it in a jqLite object
        var elem = angular.element(template);

        // Create the compile function which
        // generates are HTML
        var compileFunc = $compile(elem);

        // Process our content
        compileFunc(scope);

        // Update our jqLite object and add it 
        element.append(elem);
    }
});