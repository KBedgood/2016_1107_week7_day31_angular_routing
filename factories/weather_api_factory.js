/*----------------------------------------------------------------------------------------------------------------------------------------------------
AngularJS 1.X
A module contains the different components of an AngularJS app
A controller manages the app's data
An expression displays values on the page
A filter formats the value of an expression
------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------------------------------------------
The FACTORY manipulates data (adding / deleting to array, marking as complete...)
------------------------------------------------------------------------------------------------------------------------------------------------------*/

(function() {
     'use strict';

     angular
          .module('holdPlease')
          .factory('getCityWeather', function($http) {
               const weather = function(city) {
                    var promise = $http({
                         method: 'GET',
                         url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7cf16558d759d14815306832bd7341e2&units=imperial`
                    });
                    return promise;
               }

               return {
                    weather
               }
          });

})();
