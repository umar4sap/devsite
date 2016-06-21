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

<<<<<<< HEAD
        var jsondata = [
            {
                "templatesList": [
                    {
                        "templateItem": {
                            "href": "templatesdescription",
                            "name": "Working Template"
                        },

                        "templateItemDescription": "Lorem Loreem Loreeem Ipsum Ipsuum Ipsuuum ..."
                    },
                    {
                        "templateItem": {
                            "href": "http://example.com/event1",
                            "name": "Template 2"
                        },

                        "templateItemDescription": "Lorem Loreem Loreeem Ipsum Ipsuum Ipsuuum ..."
                    },
                    {
                        "templateItem": {
                            "href": "http://example.com/event1",
                            "name": "Template 3"
                        },

                        "templateItemDescription": "Lorem Loreem Loreeem Ipsum Ipsuum Ipsuuum ..."
                    },
                    {
                        "templateItem": {
                            "href": "http://example.com/event1",
                            "name": "Template 4"
                        },

                        "templateItemDescription": "Lorem Loreem Loreeem Ipsum Ipsuum Ipsuuum ..."
                    },
                    {
                        "templateItem": {
                            "href": "http://example.com/event1",
                            "name": "Template 5"
                        },

                        "templateItemDescription": "Lorem Loreem Loreeem Ipsum Ipsuum Ipsuuum ..."
                    },
                    {
                        "templateItem": {
                            "href": "http://example.com/event1",
                            "name": "Template 6"
                        },

                        "templateItemDescription": "Lorem Loreem Loreeem Ipsum Ipsuum Ipsuuum ..."
                    },
                    {
                        "templateItem": {
                            "href": "http://example.com/event1",
                            "name": "Template 7"
                        },

                        "templateItemDescription": "Lorem Loreem Loreeem Ipsum Ipsuum Ipsuuum ..."
                    },
                    {
                        "templateItem": {
                            "href": "http://example.com/event1",
                            "name": "Template 8"
                        },

                        "templateItemDescription": "Lorem Loreem Loreeem Ipsum Ipsuum Ipsuuum ..."
                    }
                ]
            }
        ];


                $scope.templatesList = jsondata[0].templatesList;
=======
        $http.get('app/components/templates/templates.json')
            .then(function(res){
                $scope.templatesList = res.data[0].templatesList;
            });
>>>>>>> origin/master

    }

})();
