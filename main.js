(() => {
          'use strict';
          /*----------------------------------------------------------------------------------------------------------------------------------------------------
          Include this – ui.router – dependency at the top level...
          ------------------------------------------------------------------------------------------------------------------------------------------------------*/

          angular
               .module('holdPlease', ['ui.router'])

          //Can also live in a separate file...
          .directive('myWeather', function(getCityWeather) {
               return {
                    restrict: 'E',
                    templateUrl: "partials/weather.html",
                    link: function(vm, element, attrs) {
                        //^these three things are static - always going to be there, they are call-backs...


                         let promise = getCityWeather.weather(attrs.city);

                         promise.then(function(returnedWeather) {
                              vm.location = returnedWeather.data;
                         })

                    }
               }
           })

               .config(appConfig);

               /*----------------------------------------------------------------------------------------------------------------------------------------------------
               The config block of our angular module always executes before our controllers and services are instantiated 
               and data is bound to our page. This is where we would do any mandatory configuration of our module.    
               ------------------------------------------------------------------------------------------------------------------------------------------------------*/

               appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

               function appConfig($stateProvider, $urlRouterProvider) {
                    $urlRouterProvider.otherwise('/')

                    $stateProvider
                         .state('home', {
                              url: '/',
                              templateUrl: 'partials/home.html'
                         })
                         .state('category', {
                              url: '/category',
                              templateUrl: 'partials/category.html',
                         })
                         .state('list', {
                              url: '/list',
                              templateUrl: 'partials/list.html'
                         })
                         .state('featured', {
                              url: '/featured',
                              templateUrl: 'partials/featured.html',
                         });
               }
          })();
