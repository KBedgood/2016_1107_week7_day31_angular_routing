/*----------------------------------------------------------------------------------------------------------------------------------------------------
AngularJS 1.X
A module contains the different components of an AngularJS app
A controller manages the app's data
An expression displays values on the page
A filter formats the value of an expression
------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------------------------------------------
The CONTROLLER is always read first – it's like my normal JS file.
Handles any interaction with the user and taking data from the factory and presenting it back to user...
------------------------------------------------------------------------------------------------------------------------------------------------------*/

(function() {
    'use strict';

    /*----------------------------------------------------------------------------------------------------------------------------------------------------
    Save all inventory data into an array...
    ------------------------------------------------------------------------------------------------------------------------------------------------------*/

    angular
        .module('stabList')
        .controller('ToDoController', function(todo) {

            let vm = this;

            /*----------------------------------------------------------------------------------------------------------------------------------------------------
            Pushes user info onto object on submit...
            ------------------------------------------------------------------------------------------------------------------------------------------------------*/

            vm.submit = function(content) {
                vm.content = '';
                vm.items = todo.addData(content);
            }

            vm.delete = function(id) {
                vm.items = todo.deleteData(id);
            }

            vm.items = todo.getData();

        });
})();
