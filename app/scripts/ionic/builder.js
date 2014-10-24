var builder = angular.module('builder', ['ionic', 'ngDraggable', 'LocalStorageModule', 'ionicWidget', 'mgcrea.ngStrap', 'ui.codemirror', 'ngRoute'])


builder.config(function ($provide, $stateProvider, $urlRouterProvider) {
    $provide.factory('$stateProvider', function () {
        return $stateProvider;
    });
});

builder.run(function ($stateProvider, localStorageService) {

    var app = localStorageService.get("app");
    if (app && app.pages) {
        var pages = Object.keys(app.pages);
        pages.forEach(function (e) {

        });
    }

})
builder.controller("AppBuilderController", function ($scope, $rootScope, $timeout, $q, localStorageService, $window, OrientDB) {

    $scope.preview = false;

    $scope.save = function () {

        OrientDB.setApp($scope.app).then(function (data) {
            $scope.app = data;
            OApp.notify("Application " + data.name + "saved correctly.");
        })
    }
    $scope.$watch("preview", function (data) {
        $rootScope.$broadcast("app-preview", data);
    })
    $scope.initIFrame = function () {
        document.getElementById('appBuilderFrame').contentWindow.OApp = {};
        document.getElementById('appBuilderFrame').contentWindow.OApp.url = OApp.url;
        document.getElementById('appBuilderFrame').contentWindow.OApp.db = OApp.db;
    }
    $scope.clear = function () {
        $scope.app.pages = {
            'home': {
                type: "Page",
                url: "/home",
                config: {
                    name: "Container",
                    children: []
                }
            }
        };
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

    $rootScope.$on("page-add", function (msg, page) {

        $scope.app.pages[page] = {
            type: "Page",
            title: page,
            url: "/" + page.toLowerCase(),
            config: {
                name: "Container",
                children: []
            }
        }
        $scope.config = $scope.app.pages[page].config;
        $rootScope.$broadcast("page-clear");
    })
    $rootScope.$on("page-selected", function (msg, page) {

        $scope.config = $scope.app.pages[page].config;
        $rootScope.$broadcast("page-clear");
        initCanvas();
        $rootScope.$broadcast("element-edit", $scope.app.pages[page], msg);
    })
    $rootScope.$on("element-remove", function () {

        var elemScope = angular.element($scope.selected.target).scope();
        var meConfig = elemScope.config ? elemScope.config : elemScope.$parent.config;
        if (meConfig.type == "Page") {

        } else {
            var pConfig = elemScope.config
            var parent = elemScope.$parent;
            while (pConfig == elemScope.config) {
                pConfig = parent.config;
                parent = parent.$parent;
            }
            var idx = pConfig.children.indexOf(meConfig);

            pConfig.children.splice(idx, 1);
            angular.element($scope.selected.target).parent().remove()
        }


    })


    $scope.getConfigParent = function (elem) {
        var elemScope = angular.element(elem).scope();
        return elemScope.config;
    }
    $timeout(function () {
        OrientDB.getApp().then(function (app) {
            $scope.app = app;
            appReady();
            initApp();
            $scope.appPreview = "../../dist/index.html?db=" + OApp.db;
        }, function (err) {
            initApp();
            $scope.appPreview = "../../dist/index.html?db=" + OApp.db;
        })
    }, 1000)

    function initApp() {
        if (!$scope.app) {
            $scope.app = {
                name: OApp.db,
                pages: {
                    'home': {
                        type: "Page",
                        title: "Home",
                        url: "/home",
                        config: {
                            name: "Container",
                            children: []
                        }
                    }
                }
            }
            $scope.config = $scope.app.pages['home'].config;
            appReady();
        } else {
            $timeout(function () {
                $scope.config = $scope.app.pages['home'].config;
                initCanvas();
            }, 1000);
        }
    }

    function initCanvas() {
        var elem = angular.element('#appContainer');
        $scope.config.children.forEach(function (e) {
            $scope.$broadcast("element-add", e, elem, false);
            function buildRecursive(e) {
                if (e.children) {
                    e.children.forEach(function (c) {
                        $timeout(function () {
                            var father = angular.element('#' + e.id);
                            $scope.$broadcast("element-add", c, father, false);
                            buildRecursive(c);
                        }, 1000);
                    })
                }
            }

            buildRecursive(e);
        })
    }


    function appReady() {
        $rootScope.$broadcast("app-ready", $scope.app);
    }

    function guidGenerator() {
        return "component_" + chance.integer({min: 0});
    }
});

builder.controller("AppComponentsController", function ($scope, $rootScope) {


    $rootScope.$on("app-preview", function (evt, data) {
        $scope.preview = data;
    })

    $scope.components = {
        "header": {
            type: "Header",
            title: "New Header",
            clazz: "bar-light",
            tpl: "tpl/header.html"
        },
        "button": {
            type: "Button",
            title: "New Button",
            clazz: "button-light",
            canEdit: true,
            tpl: "tpl/button.html"
        },
        "header-back": {
            type: "Header-Back",
            title: "New Header",
            clazz: "bar-light",
            tpl: "tpl/header-back.html"
        },
        "content": {
            type: "Content",
            title: "I am Content",
            canEdit: true,
            tpl: "tpl/content.html",
            source: {
                type: 'SQL'
            }
        },
        "card": {
            type: "Card",
            title: "I am Card",
            canEdit: true,
            tpl: "tpl/card.html",
            source: {
                type: 'SQL'
            }
        },
        "form": {
            type: "Form",
            title: "I am Form",
            canEdit: true,
            tpl: "tpl/form.html",
            source: {
                type: 'SQL'
            }
        },
        "footer": {
            type: "Footer",
            clazz: "bar-balanced",
            title: "New Footer",
            tpl: "tpl/footer.html"
        },
        "list": {
            type: "List",
            tpl: "tpl/list.html",
            canEdit: true,
            source: {
                type: 'Array',
                data: ['Item 1', "Item 2"]
            }
        }
//        "tabs": {
//            type: "Tabs",
//            tpl: "tpl/tabs.html",
//            dynamic: true
//        },
//        "tab": {
//            type: "Tab",
//            tpl: "tpl/tab.html",
//            title: "New Tab",
//            dynamic: true
//        }

    }


});

builder.controller("AppComponentDetailsController", function ($rootScope, $scope) {


    $scope.remove = function () {
        $rootScope.$broadcast("element-remove");
        $scope.config = null;
    }
    $rootScope.$on("app-preview", function (evt, data) {
        $scope.preview = data;
    })
    $rootScope.$on("element-edit", function (msg, data, event) {
        $scope.config = data;
    })

});
builder.controller("AppPageController", function ($rootScope, $scope, $modal) {


    $rootScope.$on("app-preview", function (evt, data) {
        $scope.preview = data;
    })
    $rootScope.$on("app-ready", function (e, app) {
        $scope.app = app;
        $scope.selected = 'home';
    })

    $scope.newPage = function () {

        var modalScope = $scope.$new(false);
        modalScope.save = function (name) {
            $rootScope.$broadcast("page-add", name);
            $scope.selected = name;
        }
        var myOtherModal = $modal({scope: modalScope, template: 'newPage.html', show: false});
        myOtherModal.$promise.then(myOtherModal.show);
    }
    $scope.selectPage = function (page) {
        $rootScope.$broadcast("page-selected", page);
        $scope.selected = page;
    }
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
            $rootScope.$on("element-remove", function () {
                element.empty();
            })
        }
    }
})
builder.directive('editWidget', function ($rootScope, $compile, $http, $parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            if (scope.config.canEdit) {
                scope.$watch("config.tplEdit", function (data) {
                    try {
                        var el = angular.element($compile(data)(scope));
                        element.empty();
                        element.append(el);
                    } catch (e) {
                        console.log(e);
                    }
                })
                var el = angular.element($compile(scope.config.tplEdit)(scope));
                element.append(el);
            } else {
                $http.get(scope.config.tpl).then(function (response) {
                    var el = angular.element($compile(response.data)(scope));
                    element.append(el);
                })
            }

        }
    }
})
builder.directive('appBuilder', function ($rootScope, $compile, $http, $parse) {

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {


            $rootScope.$on('page-clear', function () {
                element.empty();
            })
            scope.$on("element-add", function (evt, data, elem, toAdd) {
                if (data) {
                    $http.get('tpl/edit.html').then(function (response) {
                        if (toAdd) {
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

                        if (data.canEdit && !data.tplEdit) {

                            $http.get(data.tpl).then(function (res) {
                                wScope.config.tplEdit = res.data;
                                var el = angular.element($compile(response.data)(wScope));
                                elem.append(el);
                            });
                        } else {
                            var el = angular.element($compile(response.data)(wScope));
                            elem.append(el);
                        }

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
                revert: true,
                zIndex: 2500,
                appendTo: 'body',
                containment: 'window',
                scroll: false,
                helper: 'clone'
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
builder.controller("ButtonDetailsController", function ($rootScope, $scope) {

    $scope.config = $scope.$parent.config;
    $scope.editorOptions = {
        lineWrapping: true,
        lineNumbers: true,
        readOnly: false,
        mode: 'htmlmixed'
    };
    $scope.classes = ['button-light', 'button-stable', 'button-positive', 'button-calm', 'button-balanced', 'button-energized', 'button-assertive', 'button-royal', 'button-dark'];

});
builder.controller("ListDetailsController", function ($rootScope, $scope) {

    $scope.config = $scope.$parent.config;
    $scope.sources = ["Array", "SQL"];

    $scope.editorOptions = {
        lineWrapping: true,
        lineNumbers: true,
        readOnly: false,
        mode: 'htmlmixed'
    };


});
builder.controller("CardDetailsController", function ($rootScope, $scope) {

    $scope.config = $scope.$parent.config;

    $scope.editorOptions = {
        lineWrapping: true,
        lineNumbers: true,
        readOnly: false,
        mode: 'htmlmixed'
    };


});
builder.controller("PageDetailsController", function ($rootScope, $scope) {


    $scope.config = $scope.$parent.config;

});
builder.controller("FooterDetailsController", function ($rootScope, $scope) {

    $scope.config = $scope.$parent.config;
    $scope.classes = ['bar-light', 'bar-stable', 'bar-positive', 'bar-calm', 'bar-balanced', 'bar-energized', 'bar-assertive', 'bar-royal', 'bar-dark'];

});