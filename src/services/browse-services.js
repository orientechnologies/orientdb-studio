import { API,STUDIO_VERSION } from '../constants';

let browseConfig = angular.module('browse.services', []);


browseConfig.factory('BrowseConfig', function ($rootScope, Database, $location,localStorageService) {


  var config = {
    limit: 20,
    hideSettings : true,
    keepLimit : '10',
    selectedContentType : 'JSON',
    selectedRequestType : 'COMMAND',
    selectedRequestLanguage : 'SQL',
    set: function (name, val) {
      this[name] = val;
      localStorageService.add(name,val);
    },
    get: function () {

    }
  };

  return config;
});


export default browseConfig.name;
