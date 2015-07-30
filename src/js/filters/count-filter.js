/**
 * Created by kocsenc on 7/29/15.
 * FILTER designed to return an empty array.
 * Useful for using ng-repeat for n number of times, rather than iterating
 * through an array. (creates empty array
 *
 * SEE: http://stackoverflow.com/questions/20506360/angular-repeat-span-n-times
 */

angular.module('mission-control')
  .filter('range', function () {
    return function (val, range) {
      range = parseInt(range);
      for (var i = 0; i < range; i++)
        val.push(i);
      return val;
    };
  });
