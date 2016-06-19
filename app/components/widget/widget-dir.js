(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('widgetwrapper', widgetwrapper);
    function widgetwrapper(){
        return {
            templateUrl: 'components/widget/widget-tpl.html',
            controller: widgetWrapper,
            controllerAs: 'widgetwrapper'
        };
    }

    function widgetWrapper(){

    }

})();
