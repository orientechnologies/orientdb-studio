var builder = angular.module('builder', ['ionic', 'ngDraggable'])


builder.controller("AppBuilderController", function ($scope) {


    $scope.onDropComplete = function (data, event, element) {

        $scope.$broadcast("element-add", data, element);
    }


});

builder.controller("AppComponentsController", function ($scope) {


    $scope.header = {
        type: "Header",
        title: "New Header",
        etpl: "tpl/editHeader.html",
        tpl: "tpl/header.html"
    }

    $scope.edit = function (elem) {
        console.log(elem);
    }

});


builder.directive('appBuilder', function ($rootScope, $compile, $http, $parse) {

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {


            scope.$on("element-add", function (evt, data, elem) {
                if (data.etpl) {
                    $http.get(data.etpl).then(function (response) {
                        var wScope = scope.$new()
                        wScope.data = data;
                        var el = angular.element($compile(response.data)(wScope));
                        elem.append(el);
                    });
                }
            })
        }
    }
})