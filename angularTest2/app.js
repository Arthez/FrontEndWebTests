/**
 * Created by Arthur on 2016-06-18.
 */
var app = angular.module('app', []);

app.controller('listCtrl', function ($scope) {

    $scope.itemList = [
        {item: 'pasta', purchased: false},
        {item: 'oil', purchased: false},
        {item: 'bread', purchased: true},
        {item: 'potatoes', purchased: false},
        {item: 'fish', purchased: false},
        {item: 'chicken', purchased: false},
        {item: 'ham', purchased: true},
        {item: 'cheese', purchased: true}
    ];

    $scope.addItem = function (newItem) {
        if (!(newItem === undefined || newItem === "")) {
            var item = {item: newItem, purchased: false};
            $scope.itemList.splice(0, 0, item);
            // $scope.itemList.push(item);
            $scope.missingNewItemError = "";
        } else {
            $scope.missingNewItemError = "Please Enter an Item";
        }

    };


});


app.controller('userCtrl', function ($scope) {

    $scope.user = [
        // {inName: "Arthur",
        // inStreet: "Strachoc",
        // agreed: true}
    ];

    $scope.saveUser = function (userInfo) {
        if ($scope.userForm.$valid) {
            $scope.user.push({
                inName: userInfo.inName,
                inStreet: userInfo.inStreet,
                agreed: userInfo.agreed
            });
            console.log("User Saved")
        } else {
            console.log("Couldnt save the user")
        }
    }

});

app.controller('heroCtrl', function ($scope, $rootScope) {

    $scope.heroList = [
        {realName: "Arthur", heroName: "The king"},
        {realName: "Bruce", heroName: "Batman"},
        {realName: "Clark", heroName: "Superman"},
        {realName: "Peter", heroName: "Spiderman"},
        {realName: "Nikola", heroName: "Tesla"}
    ];

    $scope.getHeroData = function () {
        heroSearch($scope.heroName);
    };

    function heroSearch(name) {
        $scope.heroData = "Not Found";
        for (var i = 0; i < $scope.heroList.length; i++) {
            if ($scope.heroList[i].heroName.toUpperCase() === name.toUpperCase()) {
                $scope.heroData = $scope.heroList[i].realName + " is " + $scope.heroList[i].heroName;
            }
            console.log($scope.heroData);
            $rootScope.$broadcast("heroFound", {data: $scope.heroData});
        }
    }

    $scope.onKeyPress = function (event) {
        if (event.which == 13) {
            $scope.getHeroData();
        }
    };

    $scope.$on("heroFound", function (event, args) {
        $scope.heroData = args.data;
    });


    $scope.addHeroData = function (realmName, heroName) {
        $rootScope.$broadcast("heroUpdate",
            {realName: realmName, heroName: heroName}
        );
    };

    $scope.$on("heroUpdate", function (event, args) {
        $scope.heroList.push({
            realName: args.realName, heroName: args.heroName
        });
    });

});