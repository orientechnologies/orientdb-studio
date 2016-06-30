'use strict';

// EXTERNAL DEPS
import 'jquery';
import angular from 'angular';
import  'angular-strap';
import 'angular-local-storage';
import 'angular-scroll';
import 'angular-animate';
import 'angular-sanitize';
import 'ui-select';
import 'angular-spectrum-colorpicker';
import  'angular-translate';
import  'angular-translate-loader-partial';
import 'ng-tags-input';
import 'angular-bootstrap-switch';
import 'angular-smart-table';
import 'ng-table';
import 'd3';
import 'spectrum-colorpicker';
import 'angular-spectrum-colorpicker';


import  'angular-strap/dist/angular-strap.tpl';
import  'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import  'codemirror/theme/ambiance.css';
import  'codemirror/lib/codemirror.css';
import  'codemirror/addon/hint/show-hint.css';
import  'codemirror/addon/dialog/dialog.css';
import  'spectrum-colorpicker/spectrum.css'

// CONFIG
import routing from './app.config'

import NProgress from 'nprogress';


// CONTROLLERS

import HeaderController from './controllers/header-controller'
import LoginController from './controllers/login-controller'
import DatabaseController from './controllers/database-controller'
import {CtrlName as DocumentController} from './controllers/document-controller'
import ServerController from './controllers/server-controller'
import VertexController from './controllers/graph-controller'
import FunctionController from './controllers/function-controller'
import UsersCtrl from './controllers/users-controller'
import AsideController from './controllers/aside-controller'
import NotificationController from './controllers/notification-controller'
import ConfigurationController from './controllers/configuration-controller'
import EEController from './controllers/ee-controller'
import SchemaController from './controllers/schema-controller'


// WIDGET

import CodeMirrorUI from './directives/ui-codemirror';
import BootstrapTabSet from './directives/tabset';
import Rendering from './directives/widget';
import StudioGraph from './directives/graph';

// FILTERS

import StudioFilters from './filters/filter'


//  STYLES

import './styles/main.css'
import './styles/layout.css'
import './styles/responsive.css'
import './styles/animation.css'
import './styles/graph.css'

var deps = [HeaderController,
  LoginController,
  DatabaseController,
  DocumentController,
  ServerController,
  VertexController,
  FunctionController,
  UsersCtrl,
  AsideController,
  EEController,
  SchemaController,
  NotificationController,
  ConfigurationController,
  CodeMirrorUI,
  BootstrapTabSet,
  StudioFilters,
  Rendering,
  StudioGraph,
  'mgcrea.ngStrap',
  'LocalStorageModule',
  'ngTable',
  'duScroll',
  'ui.select',
  'ngRoute',
  'ngAnimate',
  'ngSanitize',
  'angularSpectrumColorpicker',
  'pascalprecht.translate',
  'ngTagsInput',
  'frapontillo.bootstrap-switch',
  'smart-table'];


var App = angular.module('OrientDBStudioApp', deps);


App.config(routing);
var POLLING = 2000;
App.run(function ($rootScope, $interval, DatabaseApi, Notification, Spinner, $templateCache, Aside) {
  $rootScope.$on('$routeChangeSuccess', function (event, currentRoute, oldRoute) {
    switch (currentRoute.templateUrl) {
      case 'views/login.html':
        $rootScope.bodyClass = 'landing-page';
        break;
      default:
        $rootScope.bodyClass = 'normal-page';
        break;
    }
    if (currentRoute.$$route.controller === 'ServerDashboardController') {
      $rootScope.$emit("servermgmt:open");
    } else {
      $rootScope.$emit("servermgmt:close");
    }
    if (oldRoute && currentRoute.originalPath != oldRoute.originalPath) {
      Notification.clear();
    }
    NProgress.done();
  });
  $rootScope.$on("$routeChangeStart", function (event, next, current) {
    Aside.destroy();
    NProgress.start();
    NProgress.set(0.2);
    NProgress.set(0.4);

  })

  $interval(function () {
    DatabaseApi.listDatabases().then(function (data) {
      $rootScope.$broadcast("server:up");
    }, function error(data) {
      $rootScope.$broadcast("server:down");
    })
  }, 10000);

  $templateCache.put('popover/popover.tpl.html', '<div class="popover"><div class="arrow"></div><h3 class="popover-title" ng-bind="title" ng-show="title"></h3><div class="popover-content" ng-bind-html="content"></div></div>');
})

$('body').on('keyup', function (e) {

  if (e.keyCode == 27) {
    $('.modal-backdrop').click()
  }
})


// Controller Binding


