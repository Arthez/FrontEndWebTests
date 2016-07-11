/**
 * Created by Arthur on 2016-06-19.
 */
var app = angular.module("app", []);

app.controller("mainCtrl", function ($scope) {
    $scope.unBold = function () {
        angular.element(document.querySelector("#barry")).toggleClass("thick");
    };

    $scope.bbPlayers = [
        {name: "Barry Bonds", avg: 0.298, hr: 762, obp: 0.444},
        {name: "Hank Aaron", avg: 0.305, hr: 755, obp: 0.374},
        {name: "Babe Ruth", avg: 0.342, hr: 714, obp: 0.474},
        {name: "Ted Williams", avg: 0.344, hr: 521, obp: 0.482}
    ];

    $scope.barryBonds = {name: "Barry Bonds", avg: 0.298, hr: 762, obp: 0.444};
    $scope.hankAaron =  {name: "Hank Aaron", avg: 0.305, hr: 755, obp: 0.374};
    $scope.babeRuth = {name: "Babe Ruth", avg: 0.342, hr: 714, obp: 0.474};
    $scope.tedWilliams ={name: "Ted Williams", avg: 0.344, hr: 521, obp: 0.482};

    $scope.moreLorem = "The Amazing Lorem Story";
});

app.directive("jqlDirective", function () {
    return function (scope, element, attrs) {
        var players = element.children();

        var listOfPlayers = "";
        for(var i  = 0; i < players.length; i++) {
            if (players.eq(i).text() == "Barry Bonds") {
                players.eq(i).css("color", "blue");
                players.eq(i).attr("myNumber" , "25");
            }
            if (players.eq(i).text() == "Hank Aaron") {
                players.eq(i).css("color", "red");
                players.eq(i).attr("myNumber" , "15");
            }
            if (players.eq(i).text() == "Babe Ruth") {
                players.eq(i).addClass("thick");
                players.eq(i).attr("myNumber" , "5");
            }

            listOfPlayers += players.eq(i).text() + ", ";

            angular.element(document.querySelector("#childrenList")).text(listOfPlayers);

            var barrysNum = angular.element(document.querySelector("#barry")).attr("myNumber");
            angular.element(document.querySelector("#barrysNum")).text(barrysNum);

            var hankBold = angular.element(document.querySelector("#hank")).hasClass("thick");
            angular.element(document.querySelector("#hankBold")).text(hankBold);

            var barryID = angular.element(document.querySelector("#barry")).prop("id");
            angular.element(document.querySelector("#barryID")).text(barryID);
        }

    }
});

app.directive("bbPlayerList", function() {

    return function(scope, element, attrs) {

        // Get the data by passing the value associated with
        // bbPlayerList to the scope object
        var data = scope[attrs["bbPlayerList"]];

        // Verify that I have an array of data
        if (angular.isArray(data)) {

            // Get the item to display from the array-item attribute
            var arrayItem = attrs["arrayItem"];

            // angular.element wraps the DOM element as a JQuery
            // element
            var listElem = angular.element("<ul>");

            // The ul element is the container in which the li
            // elements will be assigned
            element.append(listElem);
            for (var i = 0; i < data.length; i++){

                // Get the matching data stored in the defined key requested
                // $eval eliminates the filter and leaves just the attribute
                // name to pull from the array
                listElem.append(angular.element('<li>').text(scope.$eval(arrayItem, data[i])));
            }

            // Add a span after the list
            listElem.after(angular.element("<span id='mays'>").text("Willy Mays"));

            // Add a span before the list
            listElem.prepend(angular.element("<span id='cobb'>").text("Ty Cobb"));

            // Remove an element
            angular.element(document.querySelector('#mays')).remove();

            // Replace an element
            var gehrigHTML = "<span id='gehrig'>Lou Gehrig</span>";
            var replacement = angular.element(gehrigHTML);
            angular.element(document.querySelector('#cobb'))
                .replaceWith(replacement);


        }
    }
});

app.directive("player", function () {

    var directive = {};
    directive.restrict = "E";
    directive.template = "{{player.name}} had a {{player.avg}} AVG with {{player.hr}} homeruns";
    // Scope defines what is unique about each element
    directive.scope = { player: "=name" };

    // compile is called during the initialization phase
    directive.compile = function(element, attributes){

        // The link function receives the scope, the element The
        // directive is associated with and that elements
        // attributes. Here we can handle events on that element
        var linkFunc = function($scope, element, attributes){
            element.bind('click', function() {
                element.html('Barry disappeared');
            });
        };
        return linkFunc;
    };
    return directive;
});

app.directive("exDir", function() {
    return {
        transclude: true,

        // ng-transclude defines where the data in the element
        // shows up in the template
        template: "<div><h4>{{moreLorem}}</h4></div><div ng-transclude></div>"
    }

});

app.directive("przerwa", function () {
    var directive = {};
    directive.restrict = "E";
    directive.template = "<br><hr><br>";
    return directive;
});