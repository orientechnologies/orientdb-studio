var builder = angular.module('builder', ['ionic', 'ngDraggable', 'LocalStorageModule'])


builder.controller("AppBuilderController", function ($scope, $rootScope, $timeout, $q, localStorageService) {


    $scope.save = function () {
        console.log($scope.config)
        localStorageService.set("app", $scope.config);
    }
    $scope.clear = function () {
        $scope.config.children = [];
        $scope.save();
    }
    $scope.onDropComplete = function (data, event, element) {
        var cloned = angular.extend({}, data);
        cloned.id = guidGenerator();
        $scope.$broadcast("element-add", cloned, element, true);
    }

    $rootScope.$on("element-edit", function (msg, data, event) {
        $scope.selected = event;
        $scope.left = (63 + event.offsetX) + 'px';
        $scope.top = (70 + event.offsetY) + 'px';
    })

    $scope.remove = function () {
        var elemScope = angular.element($scope.selected.target).scope();
        var pConfig = elemScope.$parent.$parent.config;
        var idx = pConfig.children.indexOf(elemScope.$parent.config);
        pConfig.children.splice(idx, 1);
        angular.element($scope.selected.target).parent().remove()
    }
    $scope.appName = 'Prova';

    $scope.getConfigParent = function (elem) {
        var elemScope = angular.element(elem).scope();
        return elemScope.config;
    }
    $scope.config = localStorageService.get("app");
    if (!$scope.config) {
        $scope.config = {
            name: "Container",
            children: []
        }
    } else {
        $timeout(function () {
            var elem = angular.element('#appContainer');
            $scope.config.children.forEach(function (e) {
                $scope.$broadcast("element-add", e, elem, false);
            })
        }, 1000);

    }
    function guidGenerator() {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }
});

builder.controller("AppComponentsController", function ($scope) {


    $scope.components = {
        "header": {
            type: "Header",
            title: "New Header",
            clazz: "bar-light",
            tpl: "tpl/header.html"
        },
        "content": {
            type: "Content",
            title: "I am Content",
            accept: ["List"],
            tpl: "tpl/content.html"
        },
        "footer": {
            type: "Footer",
            clazz: "bar-balanced",
            title: "New Footer",
            tpl: "tpl/footer.html"
        },
        "list": {
            type: "List",
            tpl: "tpl/list.html"
        }

    }


});

builder.controller("AppComponentDetailsController", function ($rootScope, $scope) {


    $rootScope.$on("element-edit", function (msg, data, event) {
        $scope.config = data;
    })

});

builder.directive('componentBuilder', function ($rootScope, $compile, $http, $parse) {

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            $rootScope.$on("element-edit", function (msg, data, event) {
                $http.get('tpl/edit/' + data.type.toLowerCase() + '.html').then(function (response) {
                    var wScope = scope.$new()
                    wScope.config = data;
                    var el = angular.element($compile(response.data)(wScope));
                    element.empty();
                    element.append(el);
                });
            })

        }
    }
})
builder.directive('appBuilder', function ($rootScope, $compile, $http, $parse) {

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {


            scope.$on("element-add", function (evt, data, elem, toAdd) {
                if (data) {
                    $http.get('tpl/edit.html').then(function (response) {
                        if (!toAdd) {
                            var pconfig = scope.getConfigParent(elem);
                            if (!pconfig.children) {
                                pconfig.children = [];
                            }
                            pconfig.children.push(data);
                        }
                        var wScope = scope.$new()
                        wScope.config = data;
                        wScope.edit = function (e) {
                            e.stopPropagation();
                            $rootScope.$broadcast("element-edit", data, e);
                        }
                        var el = angular.element($compile(response.data)(wScope));
                        elem.append(el);
                    });
                }
            })

        }
    }
})
builder.directive('transform', function ($rootScope, $compile, $http, $parse) {

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {


        }
    }
})
builder.directive('clear', function ($rootScope, $compile, $http, $parse) {

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {


        }
    }
})

builder.directive('draggable', function ($rootScope, $compile, $http, $parse) {

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            var draggable = element.draggable({
                revert: true
            });

            scope.$watch(attrs.dragData, function (data) {
                if (data) {
                    draggable.data("data", data);
                }
            });

        }
    }
})
builder.directive('droppable', function ($rootScope, $compile, $http, $parse) {

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            var onDropCallback = $parse(attrs.dropSuccess) || null;

            element.droppable({
                greedy: true,
                drop: function (event, ui) {
                    event.stopPropagation();
                    event.preventDefault();
                    onDropCallback(scope, {$data: $(ui.draggable).data("data"), $event: event, $element: element});
                }
            });

        }
    }
})

builder.controller("HeaderDetailsController", function ($rootScope, $scope) {

    $scope.config = $scope.$parent.config;
    $scope.classes = ['bar-light', 'bar-stable', 'bar-positive', 'bar-calm', 'bar-balanced', 'bar-energized', 'bar-assertive', 'bar-royal', 'bar-dark'];

});
builder.controller("FooterDetailsController", function ($rootScope, $scope) {

    $scope.config = $scope.$parent.config;
    $scope.classes = ['bar-light', 'bar-stable', 'bar-positive', 'bar-calm', 'bar-balanced', 'bar-energized', 'bar-assertive', 'bar-royal', 'bar-dark'];

});