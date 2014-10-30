var app = angular.module('app', ['ionic', 'ionicWidget', 'ngRoute','ngAnimate'])


app.config(function ($provide, $routeProvider) {

    $provide.factory('$routeProvider', function () {
        return $routeProvider;
    });


    $routeProvider.otherwise({
        redirectTo: '/home'
    });


});

app.run(function (OrientDB, $routeProvider, $route, $rootScope) {

    OrientDB.getApp().then(function (data) {
        var app = data;
        if (app && app.pages) {
            $rootScope.app = app;
            var pages = Object.keys(app.pages);
            pages.forEach(function (e) {
                $routeProvider.when(app.pages[e].url, {
                    templateUrl: 'page.html',
                    controller: 'PageController',
                    resolve: {
                        config: function () {
                            return app.pages[e].config;
                        }
                    }

                });
            });
            $route.reload();
        }
    })


})

app.controller("PageController", function (config, $rootScope, $scope, $window) {
    $scope.config = config;


});
app.directive('pageBuilder', function ($q, $rootScope, $compile, $http, $timeout, $window) {


    var fetchAndCompile = function (scope, component) {
        var deferred = $q.defer();

        if (!component.tplEdit) {
            $http.get(component.tpl).then(function (response) {

                var comScope = scope.$new(true)
                comScope.config = component;



                var el = angular.element($compile(response.data)(comScope));

                if (!component.children) {
                    component.children = [];
                }
                $q.all(component.children.map(function (e) {
                        return fetchAndCompile(scope, e);
                    })).then(function (widgets) {
                        widgets.forEach(function (w) {
                            el.append(w);
                        })
                        deferred.resolve(el);
                    })
            })
        } else {
            var comScope = scope.$new(true)
            comScope.config = component;
            var el = angular.element($compile(component.tplEdit)(comScope));
            $timeout(function () {
                deferred.resolve(el);
            }, 500)
        }
        return deferred.promise;
    }
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            var config = scope[attrs.pageBuilder];
            $q.all(config.children.map(function (e) {
                    return fetchAndCompile(scope, e);
                })).then(function (data) {
                    data.forEach(function (e) {
                        element.append(e);
                    })
                })

        }

    }
})