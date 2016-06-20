(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('sidemenu', menu);
    function menu(){
        return {
            templateUrl: 'components/sidemenu/sidemenu.tpl.html',
            controller: menuController,
            controllerAs: 'menu'
        };
    }

    function menuController($scope, $cookieStore){
        $scope.toggleSidebar = function() {
            $scope.toggle = !$scope.toggle;
            $cookieStore.put('toggle', $scope.toggle);
        };
    }

    angular.module('myApp').directive("addwidget", function($compile){
        return function(scope, element, attrs){
            element.bind("click", function(){
                    angular.element(document.getElementById('widgetsWrapper')).append($compile("<div class='widgetPane' flex='25'>" +
                        "<md-toolbar layout='row' layout-align='end center'>" +
                        "<md-button>-</md-button>" +
                        "<md-button>+</md-button>" +
                        "<md-button>x</md-button>" +
                        "</md-toolbar>" +
                        "<md-content></md-content>" +
                        "</div>")(scope));
            });
        };
        var vm =this;

    });


})();
