(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('pane', pane);
    function pane(){
        return {
            templateUrl: 'components/pane/pane.tpl.html',
            controller: pane,
            controllerAs: 'newpane'
        };
    }

    function pane(){

    }

})();
