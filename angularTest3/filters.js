/**
 * Created by Arthur on 2016-06-19.
 */

angular.module('weatherFilters', []).filter('raining', function(){
    return function(input){
        return input ? '\u2602' : '\u2600';
    };
});