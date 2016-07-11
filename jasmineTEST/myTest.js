/**
 * Created by Arthur on 2016-07-02.
 */

describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
});

describe("sortingCtrl",function(){
    var $rootScope,
        $scope,
        controller;

    beforeEach(function(){
        module('sortingApp');

        inject(function($injector){
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')("sortingCtrl",{$scope:$scope});
        });

    });

    console.log("---------------------------------");
    describe("sortingApp.sortingCtrl", function () {

        var correctValues1 = [2,2,2,2,2];
        var correctValues2 = [5,4,3,2,1];
        var correctValues3 = [-3, -1, 0, 2, 5, 7];
        var correctValues4 = [-3,-2,-1,0,0,0];
        var correctValues5 = [1];

        var correctValues6 = [1,1,1,0,-1,-2];
        var correctValues7 = [1,1,1,2,3,4];

        var falseValues1 = [2,3,4,1,5];
        var falseValues2 = [3,1,3,5,7,9];
        
        var falseValues3 = [0,-1,-2,1,1,1];
        var falseValues4 = [2,3,4,1,1,1];
        
        
        var noValues = []; //bym musial zapytac co ma robic z pusta i wtedy rpzetestowal odpowiednio

        it("true - no repeats - all 5", function () {
            expect($scope.isSorted(correctValues1)).toBe(true);
            expect($scope.isSorted(correctValues2)).toBe(true);
            expect($scope.isSorted(correctValues3)).toBe(true);
            expect($scope.isSorted(correctValues4)).toBe(true);
            expect($scope.isSorted(correctValues5)).toBe(true);
        });

        it("true - with repeats - 1", function () {
            expect($scope.isSorted(correctValues6)).toBe(true);
        });

        it("true - with repeats - 2", function () {
            expect($scope.isSorted(correctValues7)).toBe(true);
        });

        it("false - no repeats - 1", function () {
            expect($scope.isSorted(falseValues1)).toBe(false);
        });

        it("false - no repeats - 2", function () {
            expect($scope.isSorted(falseValues2)).toBe(false);
        });

        it("false- with repeats - 1", function () {
            expect($scope.isSorted(falseValues3)).toBe(false);
        });

        it("false- with repeats - 2", function () {
            expect($scope.isSorted(falseValues4)).toBe(false);
        });

        it("true if array is empty", function () {
            expect($scope.isSorted(noValues)).toBe(true);
        });

    });

});



//npm init
//npm install karma --save-dev
//npm install karma-jasmine --save-dev
//npm install karma-chrome-launcher --save-dev
//karma init


//*--save-dev  //daje do package.json zeby pozniej moc reinstallowac all na raz co tam jest?
//*karma-jasmine  //framework do etstowania