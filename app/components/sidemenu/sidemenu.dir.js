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
                    angular.element(document.getElementById('widgetsWrapper')).append($compile("<div><button class='btn btn-default' data-alert="+scope.count+">Show alert #"+scope.count+"</button></div>")(scope));
            });
        };
        var vm =this;

    });


})();
