(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('templates', templates);


    function templates($scope, $http, $element){
        $scope.closePane= function(){
            var vm = this;

            vm.parentTag = $element.parent()[0].remove();
        }

        $http.get('http://veegamdevsite.azurewebsites.net/components/templates/templates.json')
            .then(function(res){
                $scope.templatesList = res.data[0].templatesList;
            });

    }

})();
