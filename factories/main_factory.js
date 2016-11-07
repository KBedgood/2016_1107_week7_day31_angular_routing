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
¡
(function() {
    'use strict';

    angular
        .module('stabList')
        .factory('todo', function() {

            /*----------------------------------------------------------------------------------------------------------------------------------------------------
            This is my ARRAY...
            ------------------------------------------------------------------------------------------------------------------------------------------------------*/

            let data = [];

            function Todo(description, isCompleted, id) {
                this.isCompleted = isCompleted;
                this.description = description;
                this.id = id;
            }

            /*----------------------------------------------------------------------------------------------------------------------------------------------------
            Creates function with the sole purpose is to GET DATA from the above ARRAY...
            ------------------------------------------------------------------------------------------------------------------------------------------------------*/

            var getData = function() {
                if (localStorage.getItem('data')) {
                    data = JSON.parse(localStorage.getItem('data'));
                    return data;

                }
                return data;
            }

            /*----------------------------------------------------------------------------------------------------------------------------------------------------
            Creates function with the sole purpose is to ADD DATA to the above ARRAY...
            ------------------------------------------------------------------------------------------------------------------------------------------------------*/

            var addData = function(content) {

                var id = Date.now();
                var newTodo = new Todo(content, false, id);
                data.push(newTodo);
                localStorage.setItem('data', JSON.stringify(data));
                return data;
            }

            /*----------------------------------------------------------------------------------------------------------------------------------------------------
            User is creating an object but local storage can only hold strings...
            ------------------------------------------------------------------------------------------------------------------------------------------------------*/

            var deleteData = function(id) {
                var index;

                data.forEach(function(todo, arrayCounter) {
                    if (todo.id == id) {
                        index = arrayCounter;
                    }
                });

                data.splice(index, 1);
                localStorage.setItem('data', JSON.stringify(data));
                return data;

                /*----------------------------------------------------------------------------------------------------------------------------------------------------
                The "1" indicates we only want to remove one item - otherwise everything after would also be removed.
                ------------------------------------------------------------------------------------------------------------------------------------------------------*/

            }

            /*----------------------------------------------------------------------------------------------------------------------------------------------------
            RETURN DATA : Expose data to use it...
            ------------------------------------------------------------------------------------------------------------------------------------------------------*/

            return {
                getData: getData,
                addData: addData,
                deleteData: deleteData
            }

        });

})();
