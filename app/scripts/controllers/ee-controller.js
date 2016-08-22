var ee = angular.module('ee.controller', ['ee.services']);


ee.controller('GeneralMonitorController', function ($scope, $location, $routeParams, Cluster, AgentService) {


  $scope.rid = $routeParams.server;


  $scope.tab = $routeParams.db;


  $scope.links = {
    ee: "http://www.orientdb.com/orientdb-enterprise"
  }
  $scope.agentActive = AgentService.active;

  $scope.profilerOff = {content: "The Profiler for this server is Off. Just click the switch button above."}
  $scope.error = false;
  $scope.currentTab = 'overview';

  if ($scope.tab) {
    $scope.currentWarnings = true;
    $scope.currentTab = $scope.tab;
  }


  $scope.formatAddress = function (server) {
    if (server) {
      var address = ""
      var ports = " [";
      server.listeners.forEach(function (l, idx, arr) {
        if (idx == 0) {
          address += l.listen.split(":")[0];
        }
        ports += l.listen.split(":")[1];
        if (idx < arr.length - 1) {
          ports += ",";
        }
      });
      ports += "]";
      return address + ports;
    }
  }

  if (AgentService.active) {

    Cluster.node().then(function (data) {
      $scope.servers = data.members;


      $scope.server = $scope.servers[0];



      if ($scope.rid) {
        $scope.servers.forEach(function (e) {
          if (e.name === $scope.rid) {
            $scope.server = e;
          }
        })
      }
    });
  }


  $scope.editorOptions = {
    lineWrapping: true,
    lineNumbers: true,
    readOnly: true,
    mode: 'xml'
  };


  $scope.getServerMetrics = function () {

    var names = ["db.*.createRecord", "db.*.updateRecord", "db.*.readRecord", "db.*.deleteRecord", "db.*.scanRecord"];

    var cfg = MetricConfig.create();
    cfg.name = $i18n.get('server.operations');
    cfg.server = $scope.server['@rid'];
    cfg.config = new Array;

    names.forEach(function (name) {
      cfg.config.push({name: name});
    })
    $scope.config = cfg;

  }

  $scope.$watch('attached', function (attached) {

    if (attached != null && $scope.server && $scope.server.attached != attached) {
      if (attached) {
        Server.connect($scope.server).then(function () {
          $scope.server.attached = true;
          $scope.attached = true;
        });
      } else {
        Server.disconnect($scope.server).then(function () {
          $scope.server.attached = false;
          $scope.attached = false;
        });
      }
    }
  });
  $scope.$watch("server", function (server, oldServer) {

    if (server) {

      if (!oldServer) {
        server.attached = true;
        $scope.attached = server.attached;

        $scope.databases = server.databases;

        Cluster.configFile(server).then(function (data) {
          $scope.configuration = data;
        });
      } else {
        $location.path('/dashboard/general/' + server.name);
      }
    }
  });
  $scope.initMetrics = function () {
    var names = ["db.*.createRecord", "db.*.updateRecord", "db.*.readRecord", "db.*.deleteRecord", "db.*.scanRecord"];
    var cfg = MetricConfig.create();
    cfg.name = $i18n.get('db.operations');
    cfg.server = $scope.server['@rid'];

    cfg.databases = db;
    cfg.config = new Array;

    names.forEach(function (name) {
      cfg.config.push({name: name});
    })
    $scope.configDb = cfg;
  }
  $scope.getDbMetrics = function (db) {
    var names = ["db.*.createRecord", "db.*.updateRecord", "db.*.readRecord", "db.*.deleteRecord", "db.*.scanRecord"];
    var cfg = MetricConfig.create();
    cfg.name = $i18n.get('db.operations');
    cfg.server = $scope.server['@rid'];

    cfg.databases = db;
    cfg.config = new Array;

    names.forEach(function (name) {
      cfg.config.push({name: name});
    })
    $scope.configDb = cfg;
  }
  $scope.selectDb = function (db) {
    $scope.dbselected = db;

  }
  $scope.downloadDb = function (db) {
    $scope.dbselected = db;

    Cluster.backUp($scope.server, db);
    //Server.backUpDb($scope.server, db);
  }
  $scope.$watch('dbselected', function (data) {

    if (data) {
      $scope.getDbMetrics(data);
    }
  });

  $scope.$watch('databases', function (data) {

  });


});


ee.controller('SinglePollerController', function ($scope, $rootScope, $location, $routeParams, $timeout, Profiler, Cluster, AgentService, ChartHelper) {


  $scope.polling = true;


  $scope.transactionHeaders = angular.copy(ChartHelper.serverStatsHeader);

  $scope.height = 80;

  $scope.links = {
    ee: "http://www.orientdb.com/orientdb-enterprise"
  }
  $scope.agentActive = AgentService.active;

  var singlePoll = function () {

    if (AgentService.active) {
      Cluster.stats($scope.server.name).then(function (data) {
        data.name = $scope.server.name;
        $rootScope.$broadcast('server:updated', data);
      });
    } else {
      $scope.polling = false;
    }
  }


  $rootScope.$on("$routeChangeStart", function (event, next, current) {
    $scope.polling = false;
  });
  var statsWatching = function (polling) {
    $timeout(function () {
      if ($scope.polling) {
        polling();
        statsWatching(polling);
      }
    }, POLLING);
  }
  $scope.$watch('server', function (server) {
    if (server) {
      singlePoll();
      statsWatching(singlePoll);
    }
  })
})


ee.controller('ClusterController', function ($scope, Cluster, Notification, $rootScope, $timeout, AgentService) {


  $scope.links = {
    ee: "http://www.orientdb.com/orientdb-enterprise"
  }
  $scope.polling = true;
  $scope.agentActive = AgentService.active;
  var clusterPolling = function () {

    if (AgentService.active) {
      Cluster.stats().then(function (data) {


        $scope.servers = data.members;

        $rootScope.$broadcast("server-list", $scope.servers);
        $scope.clusterStats = data.clusterStats;


      }).catch(function (error) {
        Notification.push({content: error.data, error: true, autoHide: true});
        $scope.polling = false;
      })
    } else {
      $scope.polling = false;
    }
  }
  var statsWatching = function (polling) {
    $timeout(function () {
      if ($scope.polling) {
        polling();
        statsWatching(polling);
      }
    }, POLLING);
  }

  $rootScope.$on("$routeChangeStart", function (event, next, current) {
    $scope.polling = false;
  });


  clusterPolling();
  statsWatching(clusterPolling)
})


ee.controller('ClusterOverviewController', function ($scope, $rootScope, ChartHelper) {


  $scope.height = 100;

  $scope.status = 'ONLINE';
  $scope.operations = 0;


  $scope.transactionHeaders = angular.copy(ChartHelper.serverStatsHeader);

  $scope.activeConnections = 0;

  $scope.agent = true;

  $scope.requests = 0;

  $scope.latency = 0;

  $scope.cpu = 0;
  $scope.disk = 0;
  $scope.ram = 0;

  $scope.server = {name: "orientdb-cluster"};
  var lastRequest = null;
  var lastOps = null;


  $rootScope.$on('server-list', function (evt, data) {
    $scope.members = data;


    var messages = [];

    var totalMessages = {};
    var totalMessagesServer = {};
    var total = 0;


    var totalLatency = 0;
    var latenciesTotal = {}

    $scope.members.forEach(function (m) {
      messages = messages.concat(Object.keys(m.messages).filter(function (k) {

        if (!totalMessages[k]) {
          totalMessages[k] = 0;
        }
        if (!totalMessagesServer[m.name]) {
          totalMessagesServer[m.name] = 0;
        }
        totalMessagesServer[m.name] += m.messages[k];
        total += m.messages[k];
        totalMessages[k] += m.messages[k];
        return messages.indexOf(k) == -1;
      }));
      if (!latenciesTotal[m.name]) {
        latenciesTotal[m.name] = {}
        latenciesTotal[m.name].in = 0;
        latenciesTotal[m.name].out = 0;
      }
      Object.keys(m.latencies).forEach(function (n) {

        if (!latenciesTotal[n]) {
          latenciesTotal[n] = {}
          latenciesTotal[n].in = 0;
          latenciesTotal[n].out = 0;
        }
        if (n !== m.name) {
          totalLatency += m.latencies[n].entries
          latenciesTotal[m.name].out += m.latencies[n].entries;
          latenciesTotal[n].in += m.latencies[n].entries;
        }
      })
    })

    $scope.messages = messages;
    $scope.totalMessages = totalMessages;
    $scope.totalMessagesServer = totalMessagesServer;
    $scope.total = total;
    $scope.latenciesTotal = latenciesTotal;
    $scope.totalLatency = totalLatency;
  });
  $scope.$watch('clusterStats', function (data) {

    if (data) {

      var clusterCrud = {
        name: "orientdb-cluster",
        realtime: {chronos: {}}
      }
      var keys = Object.keys(data);
      var cpu = 0;
      var diskTotal = 0;
      var diskUsable = 0;
      var maxMemory = 0
      var totalMemory = 0;
      var availableMemory = 0;
      var connections = 0;
      var requests = 0;
      var latency = 0;
      var operations = 0;
      var maxDiskCache = 0;
      var totalDiskCache = 0;

      keys.forEach(function (val) {
        var realtime = data[val].realtime;
        // CPU
        var cpuN = realtime['statistics']['process.runtime.cpu'].last;
        cpu += parseFloat(cpuN);
        // DISK
        diskTotal += realtime['sizes']['system.disk./.totalSpace'];
        diskUsable += realtime['sizes']['system.disk./.usableSpace'];

        // RAM

        maxMemory += realtime['statistics']['process.runtime.maxMemory'].last;
        totalMemory += realtime['statistics']['process.runtime.totalMemory'].last;
        availableMemory += realtime['statistics']['process.runtime.availableMemory'].last;


        maxDiskCache += realtime['statistics']['process.runtime.diskCacheTotal'].last;
        totalDiskCache += realtime['statistics']['process.runtime.diskCacheUsed'].last;

        // CONNECTIONS

        connections += realtime['counters']['server.connections.actives'];


        if (realtime['chronos']['distributed.node.latency']) {
          latency += realtime['chronos']['distributed.node.latency'].average;
        }
        if (realtime['chronos']['server.network.requests']) {
          requests += realtime['chronos']['server.network.requests'].entries;
        }

        var keys = Object.keys(realtime['chronos']).filter(function (k) {
          return k.match(/db.*Record/g) != null;
        })
        var ops = 0;
        keys.forEach(function (k) {
          ops += realtime['counters'][k];

          if (!clusterCrud.realtime['counters'][k]) {
            clusterCrud.realtime['counters'][k] = {};
            clusterCrud.realtime['counters'][k] = realtime['chronos'][k];
          } else {
            clusterCrud.realtime['counters'][k] += realtime['chronos'][k];
          }
        });
        operations += ops;


        var keys = Object.keys(realtime['counters']);
        keys.forEach(function (k) {
          if (!clusterCrud.realtime['counters']) {
            clusterCrud.realtime['counters'] = {};
          }
          if (!clusterCrud.realtime['counters'][k]) {
            clusterCrud.realtime['counters'][k] = 0;
          }
          clusterCrud.realtime['counters'][k] += realtime['counters'][k];
        });
      })

      $scope.cpu = (cpu / keys.length).toFixed(2);
      $scope.disk = Math.floor((100 - (diskUsable * 100) / diskTotal));

      $scope.latency = (latency / keys.length);

      var used = totalMemory - availableMemory;

      $scope.maxRam = maxMemory;
      $scope.usedRam = used;

      $scope.ram = Math.floor(((used * 100) / maxMemory));

      $scope.maxDiskCacke = maxDiskCache;
      $scope.totalDiskCache = totalDiskCache;

      $scope.diskCache = Math.floor((totalDiskCache * 100) / maxDiskCache);

      $scope.activeConnections = connections;


      if (lastRequest != null) {

        $scope.requests = Math.round(Math.abs(requests - lastRequest) / (POLLING / 1000));
      }
      lastRequest = requests;

      if (lastOps != null) {
        $scope.operations = Math.round(Math.abs(lastOps - operations) / (POLLING / 1000));
      }
      lastOps = operations;


      $rootScope.$broadcast('server:updated', clusterCrud);
    }
  })
});


ee.controller("ProfilerController", ['$scope', 'Profiler', 'Cluster', 'Spinner', 'Notification', 'CommandCache', 'Database', 'scroller', 'AgentService', function ($scope, Profiler, Cluster, Spinner, Notification, CommandCache, Database, scroller, AgentService) {


  $scope.strategies = ["INVALIDATE_ALL", "PER_CLUSTER"];


  $scope.links = {
    ee: "http://www.orientdb.com/orientdb-enterprise"
  }
  $scope.agentActive = AgentService.active;
  $scope.itemsByPage = 10;
  if (AgentService.active) {
    Cluster.node().then(function (data) {
      $scope.servers = data.members;
      $scope.server = $scope.servers[0];

    });
  }


  $scope.isLoading = false;
  $scope.refresh = function () {
    Spinner.start();
    var metricName = 'db.' + $scope.db + '.command.';
    $scope.isLoading = true;
    Profiler.profilerData({server: $scope.server.name, db: $scope.db}).then(function (data) {
      var profiling = $scope.flatten(data.realtime.chronos, metricName);


      $scope.profiles = profiling;
      $scope.isLoading = false;
      Spinner.stopSpinner();
    }).catch(function (error) {
      if (error.status == 405) {
        Notification.push({content: error.data, error: true, autoHide: true});
      } else {
        Notification.push({content: error.data, error: true, autoHide: true});
      }
      $scope.isLoading = false;
      Spinner.stopSpinner();
    })
  }

  $scope.reset = function () {

    Profiler.reset({server: $scope.server.name, db: $scope.db}).then(function (data) {
      $scope.refresh();
    })
  }
  $scope.$watch('server', function (server) {
    if (server) {
      if ($scope.server.databases.length > 0) {
        $scope.db = $scope.server.databases[0];
      }
    }
  });
  $scope.$watch('db', function (db) {

    if (db) {
      $scope.refresh();

      CommandCache.config({server: $scope.server.name, db: $scope.db}).then(function (data) {
        $scope.cache = data;
      });

      CommandCache.results({server: $scope.server.name, db: $scope.db}).then(function (data) {
        $scope.results = data.results;
      });
    }
  });

  $scope.changeEnable = function () {


    if ($scope.cache.enabled) {

      CommandCache.enable({server: $scope.server.name, db: $scope.db}).then(function () {

        Notification.push({content: "Command Cache enabled", autoHide: true});
      });
    } else {
      CommandCache.disable({server: $scope.server.name, db: $scope.db}).then(function () {
        Notification.push({content: "Command Cache disabled", autoHide: true});
      });
    }
  }

  $scope.saveConfig = function () {
    CommandCache.saveConfig({server: $scope.server.name, db: $scope.db, config: $scope.cache}).then(function () {
      Notification.push({content: "Command Cache configuration saved correctly", autoHide: true});
    });
  }

  $scope.purgeCache = function () {

    CommandCache.purge({server: $scope.server.name, db: $scope.db}).then(function () {
      Notification.push({content: "Command Cache purged", autoHide: true});
      CommandCache.results({server: $scope.server.name, db: $scope.db}).then(function (data) {
        $scope.results = data.results;
        $scope.resultsSet = null;
        $scope.headers = null;
      });
    });
  }

  $scope.fetchResults = function (q) {
    $scope.resultsSet = null;
    $scope.headers = null;
    CommandCache.queryResults({server: $scope.server.name, db: $scope.db, query: q.query}).then(function (data) {

      $scope.headers = Database.getPropertyTableFromResults(data.result);
      $scope.resultsSet = data.result;

      var someElement = angular.element(document.getElementById('results-id'));
      scroller.scrollToElement(someElement, 0, 2000);
    });
  }
  $scope.flatten = function (result, metricName) {
    var commands = new Array;
    Object.keys(result).forEach(function (e, i, a) {
      var obj = {};
      obj.name = e.substring(metricName.length, e.length);
      Object.keys(result[e]).forEach(function (ele, ide, arr) {
        obj[ele] = result[e][ele];
      });

      commands.push(obj);

    });
    return commands;
  }
  $scope.$watch('profiles', function (data) {

  })
}]);


ee.controller("AuditingController", ['$scope', 'Auditing', 'Cluster', 'Spinner', 'Notification', '$modal', 'ngTableParams', 'AgentService', 'SecurityService', 'DatabaseApi', 'Database', function ($scope, Auditing, Cluster, Spinner, Notification, $modal, ngTableParams, AgentService, SecurityService, DatabaseApi, Database) {


  $scope.auditingWiki = Database.resolveWiki("Studio-Auditing.html");

  $scope.NODB = "--No Database--";
  $scope.enabled = false;
  $scope.clazz = 'tabs-style-linebox';
  $scope.links = {
    ee: "http://www.orientdb.com/orientdb-enterprise"
  }
  $scope.agentActive = AgentService.active;

  $scope.active = 'log';
  $scope.logs = [];
  $scope.query = {
    limit: 100
  }

  if (AgentService.active) {
    Cluster.node().then(function (data) {
      $scope.servers = data.members;
      $scope.server = $scope.servers[0];


      $scope.databases = [$scope.NODB].concat($scope.server.databases);

      if ($scope.server.databases.length > 0) {
        $scope.db = $scope.server.databases[0];

      }
    });

  }
  $scope.itemsByPage = 10;

  $scope.template = 'views/server/stats/auditing/log.html';


  $scope.saveAuditing = function () {


    SecurityService.reload({"module": "auditing", "config": $scope.auditingCfg})
      .then(function () {
        return $scope.save();
      }).then(function () {
      Notification.push({content: "Auditing configuration saved correctly.", autoHide: true});
      initConfig();
    }).catch(function (error) {
      Notification.push({content: error.data, error: true, autoHide: true});
    });

  }
  var initConfig = function () {

    SecurityService.get().then(function (security) {
      try {


        if (!security.auditing) {
          security.auditing = {
            "class": "com.orientechnologies.security.auditing.ODefaultAuditing",
            "enabled": false,
            "distributed": {
              "onNodeJoinedEnabled": false,
              "onNodeJoinedMessage": "Node ${node} has joined...",
              "onNodeLeftEnabled": false,
              "onNodeLeftMessage": "Node ${node} has left..."
            }
          }
        }
        $scope.auditingCfg = security.auditing;
        if (!$scope.auditingCfg.distributed) {
          $scope.auditingCfg.distributed = {
            "onNodeJoinedEnabled": false,
            "onNodeJoinedMessage": "Node ${node} has joined...",
            "onNodeLeftEnabled": false,
            "onNodeLeftMessage": "Node ${node} has left..."
          }
        }
        $scope.oldauditingCfg = angular.copy($scope.auditingCfg);
        $scope.enabled = security.auditing.enabled
      } catch (e) {
      }
      if ($scope.enabled) {
        Auditing.getConfig({db: $scope.db}).then(function (data) {

          $scope.config = data;

          if ($scope.config && !$scope.config.schema) {
            $scope.config.schema = {}
          }
          var cls = $scope.config.classes;
          $scope.classes = Object.keys(cls).filter(function (k) {
            return (k != "@type" && k != "@version")
          }).map(function (k) {

            var clazz = {
              name: k,
              polymorphic: cls[k].polymorphic
            }
            return clazz;
          })
          $scope.query.clazz = $scope.config.auditClassName;
          Spinner.start();
          Auditing.query({query: $scope.query}).then(function (data) {
            $scope.logs = data.result;
            Spinner.stopSpinner();
          }).catch(function (error) {
            Spinner.stopSpinner();
            Notification.push({content: error.data, error: true, autoHide: true});
          })
        });
      }
    })

  }


  $scope.changeDB = function (db) {
    if (db) {
      $scope.db = db;
      initConfig();
    }
  }
  $scope.$watch("auditingCfg.enabled", function (val, old) {
    if (old != undefined && val) {

      if (!$scope.config) {

        $scope.config = {
          "auditClassName": "AuditingLog",
          "classes": {
            "*": {
              "polymorphic": true,
              "onCreateEnabled": false,
              "onCreateMessage": "",
              "onReadEnabled": false,
              "onReadMessage": "",
              "onUpdateEnabled": false,
              "onUpdateMessage": "",
              "onDeleteEnabled": false,
              "onDeleteMessage": "",
              "onCreateClassEnabled": false,
              "onCreateClassMessage": "",
              "onDropClassEnabled": false,
              "onDropClassMessage": ""
            }
          },
          schema: {}
        }
      }
    }
  })
  $scope.$watch("db", function (db) {
    if (db) {
      initConfig();
    }
  })
  $scope.resetFilter = function () {
    $scope.query = {
      limit: 100,
      clazz: $scope.auditClassName
    }
  }
  $scope.save = function () {

    if ($scope.config) {
      return Auditing.saveConfig({db: $scope.db}, $scope.config);
    }

  }

  $scope.filter = function () {
    Spinner.start();

    var q = angular.copy($scope.query);
    if ($scope.NODB == q.db) {
      q.db = null;
    }
    Auditing.query({db: $scope.db, query: q}).then(function (data) {

      $scope.logs = data.result;
      Spinner.stopSpinner();
    }).catch(function (error) {
      Notification.push({content: error.data, error: true, autoHide: true});
      Spinner.stopSpinner();
    })
  }
  $scope.$watch("active", function (val) {
    switch (val) {
      case "config":
        $scope.template = 'views/server/stats/auditing/config.html';
        break;
      case "log":
        $scope.template = 'views/server/stats/auditing/log.html';
        break;
    }
  })
  $scope.delete = function (k) {
    delete $scope.classes[k];
  }
  $scope.addCommand = function () {
    if (!$scope.config.commands) {
      $scope.config.commands = new Array;
    }
    $scope.config.commands.push({
      regex: "",
      message: ""
    })
  }
  $scope.deleteCommand = function (index) {
    $scope.config.commands.splice(index, 1);
  }
  $scope.addClass = function () {
    var modalScope = $scope.$new(true);


    var modalPromise = $modal({template: 'views/database/auditing/newClass.html', scope: modalScope, show: false});

    modalScope.save = function () {
      if (modalPromise.$scope.selectedClass) {
        var cfg = {
          "polymorphic": true,
          "onCreateEnabled": false,
          "onCreateMessage": "",
          "onReadEnabled": false,
          "onReadMessage": "",
          "onUpdateEnabled": false,
          "onUpdateMessage": "",
          "onDeleteEnabled": false,
          "onDeleteMessage": ""
        }
        $scope.config.classes[modalPromise.$scope.selectedClass.name] = cfg;

      }
    }
    var db = DatabaseApi.get({database: $scope.db}, function (data) {
      console.log(data);
      //modalScope.classes = Database.listClasses();
    })
    db.$promise.then(function (data) {
      modalScope.classes = data['classes'];
      modalPromise.$promise.then(modalPromise.show);
    });
  }
}]);


ee.controller('PluginsController', function ($scope, Plugins, Cluster, Notification, AgentService) {


  $scope.links = {
    ee: "http://www.orientdb.com/orientdb-enterprise"
  }

  $scope.agentActive = AgentService.active;
  $scope.editorOptions = {
    lineWrapping: true,
    lineNumbers: true,
    mode: 'javascript'
  };

  $scope.customTemplate = {
    'mail': 'views/server/plugins/mail.html',
    'automaticBackup': 'views/server/plugins/automaticBackup.html'
  }
  $scope.clazz = 'tabs-style-linebox';
  $scope.dirty = false;
  $scope.selectPlugin = function (plugin) {
    $scope.selectedPlugin = plugin;
    $scope.currentEditingPlugin = angular.copy($scope.selectedPlugin);
  }


  $scope.pluginTemplate = function (plugin) {

    var pluginTpl = $scope.customTemplate[plugin.name];

    return pluginTpl || 'test';
  }

  $scope.$watch('server', function (server) {

    if (server) {
      Plugins.all(server.name).then(function (data) {
        $scope.plugins = data.plugins.filter(function (p) {
          return p.name != 'ee-events';
        });

        $scope.noPlugins = $scope.plugins.length == 0;

        $scope.selectedPlugin = $scope.plugins[0];
        $scope.currentEditingPlugin = angular.copy($scope.selectedPlugin);
      })
    }
  })

  $scope.$on('context:changed', function (evt, context) {
    $scope.selectPlugin(context);
  })

  $scope.saveConfiguration = function () {


    Plugins.saveConfig($scope.server.name, $scope.selectedPlugin.name, $scope.currentEditingPlugin.configuration).then(function (data) {
      $scope.dirty = false;
      $scope.selectedPlugin.configuration = data;
      $scope.selectPlugin($scope.selectedPlugin);

      Notification.push({content: "Plugin configuration saved correctly.", autoHide: true});
    }).catch(function (error) {

      Notification.push({content: error.data, error: true, autoHide: true});
    });
  }

  $scope.applyAll = function () {
    Plugins.saveConfig('_all', $scope.selectedPlugin.name, $scope.currentEditingPlugin.configuration).then(function (data) {
      $scope.dirty = false;

      try {
        if ($scope.data.results[0]) {
          $scope.selectedPlugin.configuration = $scope.data.results[0];
          $scope.selectPlugin($scope.selectedPlugin);
        }
      } catch (e) {

      }

      Notification.push({content: "Plugin configuration saved correctly in all Servers", autoHide: true});
    }).catch(function (error) {

      Notification.push({content: error.data, error: true, autoHide: true});
    });
  }
})

ee.controller('MailController', function ($scope, $modal, Database) {


  $scope.mailWiki = Database.resolveWiki("Mail-Plugin.html");
  $scope.removeProfile = function () {

    var idx = $scope.profiles.indexOf($scope.profile);

    $scope.profiles.splice(idx, 1);

    if ($scope.profiles.length > 0) {
      $scope.profile = $scope.profiles[0];
    } else {
      $scope.profile = null;
    }
  }

  $scope.addProfile = function () {
    var modalScope = $scope.$new(true);

    modalScope.newProfile = {name: ''};

    var modalPromise = $modal({template: 'views/server/plugins/newProfile.html', scope: modalScope, show: false});

    modalScope.createProfile = function () {
      $scope.profiles.push(modalPromise.$scope.newProfile);

      $scope.profile = modalPromise.$scope.newProfile;
      modalPromise.hide();
    }


    modalPromise.$promise.then(modalPromise.show);

  }
  $scope.$watch('currentEditingPlugin', function (data) {
    if (data && data.name == 'mail') {
      $scope.profiles = data.configuration.profiles;
      $scope.profile = $scope.profiles[0]

    } else {
      $scope.profiles = []
      $scope.profile = null;
    }
  })

});


ee.controller('AutomaticBackupController', function ($scope, $modal, Database) {


  $scope.wiki = Database.resolveWiki("Automatic-Backup.html");


  $scope.modes = ["FULL_BACKUP", "INCREMENTAL_BACKUP", "EXPORT"];

  $scope.$watch('currentEditingPlugin', function (data) {

    if (data && data.name == 'automaticBackup') {

      $scope.config = data.configuration;
    }
  })


});

ee.controller('EEDashboardController', function ($scope, $rootScope, $routeParams, Database) {


  $rootScope.$on('servermgmt:open', function () {
    $scope.show = "ee-view-show";
  })
  $rootScope.$on('servermgmt:close', function () {
    $scope.show = "";
  })


  $scope.menus = [
    {name: "stats", title: "Dashboard", template: 'stats', icon: 'fa-dashboard'},
    {
      name: "general",
      title: "Servers Management",
      template: 'general',
      icon: 'fa-desktop'
    },
    {name: "cluster", title: "Cluster Management", template: 'distributed', icon: 'fa-sitemap'},
    {name: "backup", title: "Backup Management", template: 'backup', icon: 'fa-clock-o'},
    {name: "profiler", title: "Query Profiler", template: 'profiler', icon: 'fa-rocket'},
    {name: "security", title: "Security", template: 'security', icon: 'fa-lock'},
    {name: "teleporter", title: "Teleporter", template: 'teleporter', icon: 'fa-usb'},
    {name: "alerts", title: "Alerts Management", template: 'events', icon: 'fa-bell'}

  ]


  $rootScope.$on("$routeChangeStart", function (event, next, current) {
    if (next.params.tab) {
      $scope.menus.forEach(function (e) {
        if (e.name == next.params.tab) {
          $scope.activeTab = e;
        }
      })
    } else {
      $scope.activeTab = $scope.menus[0];
    }
  });

})


ee.controller('DatabasesController', function ($scope, $rootScope, AgentService) {


  $scope.agentActive = AgentService.active;

  $scope.$watch("server", function (server) {

    if (server) {
      server.attached = true;
      $scope.attached = server.attached;

      $scope.databases = server.databases;

    }
  });

})

ee.controller("WarningsController", function ($scope, $rootScope, AgentService) {


  $scope.agentActive = AgentService.active;
  $rootScope.$on('server:updated', function (evt, data) {


    var keyTips = data.realtime.tips;
    var keys = Object.keys(keyTips)
    var tips = new Array;
    keys.forEach(function (k) {
      var o = {warning: k, count: keyTips[k].count, time: keyTips[k].time}
      tips.push(o);
    })

    $scope.tips = tips;
  });

});

ee.controller('ClusterDBController', function ($scope, Cluster, $rootScope, $timeout) {


  $scope.clazz = 'tabs-style-linebox';
  $scope.icon = 'fa-database';

  $scope.databases = null;

  $scope.$watch('selectedDb', function (db) {

    if (db) {
      $scope.$broadcast('db-chosen', {name: db, servers: $scope.databases[db]});
    }
  })

  Cluster.stats().then(function (data) {
    initDatabases(data.members);

  }).catch(function (error) {
    Notification.push({content: error.data, error: true, autoHide: true});
    $scope.polling = false;
  })
  function initDatabases(servers) {
    if (!$scope.databases) {
      $scope.databases = {};
      servers.forEach(function (s) {
        s.databases.forEach(function (db, idx) {
          if (!$scope.databases[db]) {
            $scope.databases[db] = [];
          }
          $scope.databases[db].push(s);
          if (idx == 0) {

            $scope.selectedDb = db;
          }
        })
      })
    }
  }

});

ee.controller('ClusterSingleDBController', function ($scope, Cluster, Notification, Database) {


  $scope.links = {
    "ownership": Database.getOWikiFor("Distributed-Architecture.html#cluster-ownership"),
    "role": Database.getOWikiFor("Distributed-Architecture.html"),
    "configuration": Database.getOWikiFor("Distributed-Configuration.html#default-distributed-db-configjson")
  }

  $scope.roles = ["master", "replica"];


  $scope.quorums = ['majority', 'all'];


  $scope.$on('db-chosen', function (evt, db) {


    var servers = angular.copy(db.servers);


    Cluster.database(db.name).then(function (data) {
      $scope.config = data;
      $scope.name = db.name;


      //
      var uniqueServers = [];
      Object.keys($scope.config.clusters).forEach(function (c) {

        if ($scope.config.clusters[c].servers) {
          $scope.config.clusters[c].servers.forEach(function (s) {
            if (uniqueServers.indexOf(s) == -1) {
              uniqueServers.push(s);
            }
          })
        }
      })

      uniqueServers = uniqueServers.filter(function (f) {
        var found = false;
        servers.forEach(function (s) {
          if (s.name === f) {
            found = true;
          }
        })
        return f != "<NEW_NODE>" && !found;
      })
      uniqueServers.forEach(function (s) {
        servers.push({name: s});
      })

      servers.forEach(function (el, idx, arr) {
        $scope.quorums.push((idx + 1).toString());
      })

      $scope.calculatedRoles = {};
      if ($scope.config.servers) {
        Object.keys($scope.config.servers).forEach(function (k) {
          if (k === "*") {
            servers.forEach(function (s) {
              $scope.calculatedRoles[s.name] = $scope.config.servers[k];
            });
          } else {
            $scope.calculatedRoles[k] = $scope.config.servers[k];
          }
        })
      }
      $scope.servers = servers;
    })


    $scope.isClusterInNode = function (cluster, node) {
      var tmp = $scope.config.clusters[cluster];
      if (!tmp.servers)return false;
      return tmp.servers.indexOf(node) != -1;
    }

    $scope.getOwnership = function (cluster, node) {
      var tmp = $scope.config.clusters[cluster];
      if (!tmp.servers)return "";

      if (tmp.owner && tmp.owner != "") {
        return tmp.owner === node ? "X" : "o";
      }
      return (tmp.servers.indexOf(node) == 0) ? "X" : "o";
    }


  })

  $scope.saveConfig = function () {

    Object.keys($scope.calculatedRoles).forEach(function (k) {
      var r = $scope.calculatedRoles[k];
      var oldRole = $scope.config.servers[k];
      if (oldRole) {
        delete $scope.config.servers[k];
      }
      if ($scope.config.servers["*"] != r) {
        $scope.config.servers[k] = r;
      }
    })

    var config = Object.assign({}, $scope.config);

    try {
      var val = parseInt(config.writeQuorum);
      if (!isNaN(val)) {
        config.writeQuorum = val;
      }
    } catch (e) {
    }
    Cluster.saveDBConfig({name: $scope.name, config: config}).then(function () {
      Notification.push({content: "Distributed Configuration correctly saved.", autoHide: true});
    }).catch(function (err) {
      Notification.push({content: err.data, error: true, autoHide: true});
    })

  }
})

ee.controller('EventsController', function ($scope, Plugins, $modal, Cluster, Profiler, Notification, AgentService) {

  var PNAME = "ee-events";


  $scope.links = {
    ee: "http://www.orientdb.com/orientdb-enterprise"
  }
  $scope.agentActive = AgentService.active;

  $scope.alertValues = [">=", "<="];

  $scope.parameters = ["value", "entries", "min", "max", "average", "total"];

  $scope.levels = ['OFFLINE', 'ONLINE'];

  $scope.eventWhen = [{title: "Metric", name: "MetricWhen"}, {title: "Status", name: 'LogWhen'}];

  $scope.eventWhat = [{title: "Mail", name: 'MailWhat'}, {title: "Http Request", name: 'HttpWhat'}];


  if (AgentService.active) {
    Plugins.one({plugin: 'mail'}).then(function (plugin) {
      $scope.profiles = plugin.profiles;
    });

    Profiler.metadata().then(function (data) {
      $scope.metadata = data.metadata;
    });
    Cluster.node().then(function (data) {
      $scope.servers = data.members;
      Plugins.one({plugin: PNAME}).then(function (plugin) {
        $scope.config = plugin;
        $scope.events = plugin.events;
      });
    });
  }

  $scope.addEvent = function () {
    if (!$scope.events) {
      $scope.events = [];
    }
    $scope.events.push({name: 'New Alert', when: {name: $scope.eventWhen[0]}, what: {name: $scope.eventWhat[0]}});
  }
  $scope.dropEvent = function (e) {
    var idx = $scope.events.indexOf(e);
    $scope.events.splice(idx, 1);
  }

  $scope.changeWhen = function (e) {
    var name = e.when.name;
    e.when = {};
    e.when.name = name;
  }

  $scope.changeWhat = function (e) {
    var name = e.what.name;
    e.what = {};
    e.what.name = name;
  }

  $scope.configureWhen = function (when) {

    var modalScope = $scope.$new(true);


    modalScope.eventWhen = when;
    modalScope.levels = $scope.levels;
    modalScope.servers = $scope.servers;
    modalScope.metadata = $scope.metadata;
    modalScope.parameters = $scope.parameters;
    modalScope.alertValues = $scope.alertValues;

    if (when.name === 'MetricWhen') {

      modalScope.$watch('eventWhen.type', function (data, old) {

        if (data) {
          var type = modalScope.metadata[data].type;
          if (type === 'CHRONO' || type === 'STAT') {
            modalScope.parameters = ["entries", "min", "max", "average", "total"];
          } else {
            modalScope.parameters = ["value"];
          }
          if (modalScope.eventWhen.parameter) {

            if (!old || old != data) {
              modalScope.eventWhen.parameter = null;
            }
          }
        }
      })
    }
    var modalPromise = $modal({
      template: 'views/server/distributed/events/' + when.name.toLowerCase().trim() + '.html',
      scope: modalScope
    });

    modalPromise.$promise.then(modalPromise.show);
  }
  $scope.configureWhat = function (what) {

    var modalScope = $scope.$new(true);

    modalScope.eventWhat = what;
    modalScope.profiles = $scope.profiles;
    var modalPromise = $modal({
      template: 'views/server/distributed/events/' + what.name.toLowerCase().trim() + '.html',
      scope: modalScope
    });
    modalPromise.$promise.then(modalPromise.show);
  }
  $scope.saveConfig = function () {
    Plugins.saveConfig("_all", PNAME, $scope.config).then(function (data) {
      Notification.push({content: "Events configuration saved correctly", autoHide: true});
    })
  }
});

ee.controller('ThreadsController', function ($scope, ThreadService, Notification, AgentService) {

  $scope.editorOptions = {
    lineWrapping: true,
    lineNumbers: true,
    readOnly: true
  };

  $scope.agentActive = AgentService.active;

  $scope.dump = function () {
    ThreadService.dump($scope.currentServer).then(function (data) {
      $scope.dumpDate = new Date();
      $scope.threadDump = data.threadDump;
    }).catch(function (err) {
      Notification.push({content: err.data, error: true, autoHide: true});
    })
  }
  if (AgentService.active) {
    $scope.$watch('server', function (server) {
      $scope.currentServer = server;
      $scope.dump();
    })
  }

});
ee.controller('MonitoringController', function ($scope, Cluster, AgentService) {

  $scope.clazz = 'tabs-style-linebox';
  $scope.agentActive = AgentService.active;

});
ee.controller('MetricsController', function ($scope, Cluster, AgentService) {

  $scope.clazz = 'tabs-style-linebox';

  $scope.agentActive = AgentService.active;


  if (AgentService.active) {
    $scope.$watch('server', function (server) {

      Cluster.stats(server.name).then(function (data) {

        $scope.chronos = Object.keys(data.realtime.chronos).filter(function (k) {
          return k.match(/db.*command/g) == null;
        }).map(function (k) {
          var obj = {};
          angular.copy(data.realtime.chronos[k], obj);
          obj.name = k;
          return obj
        });


        $scope.stats = Object.keys(data.realtime.statistics).map(function (k) {
          var obj = {};
          angular.copy(data.realtime.statistics[k], obj);
          obj.name = k;
          return obj
        });

        $scope.counters = Object.keys(data.realtime.counters).map(function (k) {
          var obj = {};
          obj.name = k;
          obj.value = data.realtime.counters[k];
          return obj
        });
      })
    })
  }
});

ee.controller('TeleporterController', function ($scope, Teleporter, $timeout, Notification, AgentService) {


  $scope.links = {
    ee: "http://www.orientdb.com/orientdb-enterprise"
  }
  $scope.agentActive = AgentService.active;

  $scope.editorOptions = {
    lineWrapping: true,
    lineNumbers: true,
    viewportMargin: 20,

    onLoad: function (cm) {
      $scope.cm = cm;
      cm.setSize("100%", 400);
    }
  };

  $scope.levels = [{"0": "NO"}, {"1": "DEBUG"}, {"2": "INFO"}, {"3": "WARNING"}, {"4": "ERROR"}];
  $scope.strategies = ["naive", "naive-aggregate"];
  $scope.nameResolvers = ["original", "java"];
  $scope.mappers = ['basicDBMapper', 'hibernate']
  $scope.defaultConfig = {
    "driver": "PostgreSQL",
    "jurl": "jdbc:postgresql://<HOST>:<PORT>/<DB>",
    "username": "",
    "password": "",
    "outDbUrl": "",
    "strategy": "naive",
    "mapper": "basicDBMapper",
    "xmlPath": "",
    "nameResolver": "original",
    "level": "2",
    "includes": [],
    "excludes": []
  }


  $scope.config = angular.copy($scope.defaultConfig);

  $scope.includedClasses = [];
  $scope.excludedClasses = [];

  $scope.changeDriver = function () {

    $scope.config.jurl = $scope.drivers[$scope.config.driver].format;
  }
  Teleporter.drivers({}).then(function (data) {
    $scope.drivers = data;
  })
  $scope.finished = false;
  $scope.running = true;
  $scope.launch = function () {
    $scope.config.includes = $scope.includedClasses.map(function (c) {
      return c.text;
    })
    $scope.config.excludes = $scope.excludedClasses.map(function (c) {
      return c.text;
    })
    Teleporter.launch({config: $scope.config}).then(function (data) {
      $scope.running = true;
      status();
    });
  }

  $scope.testConnection = function () {
    $scope.config.includes = $scope.includedClasses.map(function (c) {
      return c.text;
    })
    $scope.config.excludes = $scope.excludedClasses.map(function (c) {
      return c.text;
    })
    Teleporter.test({config: $scope.config}).then(function (data) {
      Notification.push({content: "Connection is alive", autoHide: true});
    }).catch(function (error) {
      Notification.push({content: error.data, error: true, autoHide: true});
    });
  }


  var status = function () {

    if ($scope.running) {
      Teleporter.status({}).then(function (data) {
        $scope.status = data;
        if (data.jobs.length > 0) {


          if ($scope.job && $scope.job.log) {
            $scope.job.status = data.jobs[0].status;
            var pos = CodeMirror.Pos($scope.cm.lastLine());
            var log = data.jobs[0].log.replace($scope.job.log, "");
            $scope.cm.replaceRange(log, pos);
          } else {
            $scope.job = data.jobs[0];
          }

          $timeout(function () {
            $scope.cm.scrollTo(0, $scope.cm.getScrollInfo().height);
          })
        } else {
          if ($scope.job) {
            $scope.finished = true;
          }
          $scope.running = false;
        }
        $timeout(status, 3000);
      })
    }
  }

  status();

});


ee.controller("HttpWhatController", function ($scope) {
  $scope.methods = ["GET", "POST"];


  $scope.addHeader = function () {
    if (!$scope.eventWhat.headers) {
      $scope.eventWhat.headers = []
    }
    $scope.eventWhat.headers.push({name: "", value: ""});
  }
  $scope.removeHeader = function (h) {
    var idx = $scope.eventWhat.headers.indexOf(h);
    $scope.eventWhat.headers.splice(idx, 1);
  }
  $scope.checkMethod = function () {

    if ($scope.eventWhat['method'] == 'POST') {

      return false
    }
    else {
      $scope.eventWhat['body'] = undefined;
      return true
    }
  }
});

ee.controller("GlobalConfiController", function ($scope, ServerApi) {


  ServerApi.getServerInfo(function (data) {
    $scope.properties = data.properties;
    $scope.storages = data.storages;

    $scope.globalProperties = data.globalProperties;

    if ($scope.globalProperties) {
      $scope.oldGlobal = $scope.globalProperties.filter(function (p) {
        return p.canChange;
      })
    }

  });
});


ee.controller("BackupConfigController", function ($scope, AgentService, $rootScope, $timeout, Cluster, BackupService) {


  $scope.agentActive = AgentService.active;


  $scope.clazz = 'tabs-style-linebox';
  $scope.icon = 'fa-database';

  $scope.databases = null;


  $scope.$watch("database", function (db) {
    if (db) {
      $scope.$broadcast('db-chosen', {name: db.dbName, backup: db});
    }
  })

  if (AgentService.active) {
    Cluster.node().then(function (data) {
      $scope.servers = data.members;
      $scope.server = $scope.servers[0];


      $scope.databases = {};


      BackupService.get().then(function (d) {
        d.backups.forEach(function (b, idx, arr) {
          if (idx == 0) {
            $scope.database = b;
          }
          $scope.databases[b.dbName] = b;
        });

        $scope.server.databases.forEach(function (db) {
          if (!$scope.databases[db]) {
            $scope.databases[db] = {dbName: db};
          }
        });


      })

    });
  }
});

/**
 *  Single Backup Controller
 */
ee.controller("SingleBackupController", function ($scope, BackupService, Notification, $modal) {

  $scope.eventsType = [
    {name: "Backup Finished", type: "BACKUP_FINISHED", clazz: 'log-finished-icon'},
    {name: "Restore Finished", type: "RESTORE_FINISHED", clazz: 'log-restore-finished-icon'},
    {name: "Backup Scheduled", type: "BACKUP_SCHEDULED", clazz: 'log-scheduled-icon'},
    {name: "Backup Started", type: "BACKUP_STARTED", clazz: 'log-started-icon'},
    {name: "Restore Started", type: "RESTORE_STARTED", clazz: 'log-restore-started-icon'},
    {name: "Backup Error", type: "BACKUP_ERROR", clazz: 'log-error-icon'},
    {name: "Restore Error", type: "RESTORE_ERROR", clazz: 'log-error-icon'}
  ]
  $scope.selectedEvents = ["BACKUP_FINISHED", "BACKUP_ERROR", "RESTORE_FINISHED"]
  $scope.mode = "1";
  $scope.modes = {"1": "Incremental Backup", "2": "Full Backup", "3": "Full + Incremental Backup"};


  // CRON Expression

  $scope.incremental_cron = $('#incremental_cron').cron({
    onChange: function () {
      if ($scope.backup && $scope.backup.modes["INCREMENTAL_BACKUP"]) {
        $scope.backup.modes["INCREMENTAL_BACKUP"].when = $(this).cron("value");
      }
    },
    customValues: {
      "5 Minutes": "0 0/5 * * * ?",
      "10 Minutes": "0 0/10 * * * ?"
    }
  });
  $scope.full_cron = $('#full_cron').cron({
    onChange: function () {
      if ($scope.backup && $scope.backup.modes["FULL_BACKUP"]) {
        $scope.backup.modes["FULL_BACKUP"].when = $(this).cron("value");
      }
    },
    customValues: {
      "5 Minutes": "0 0/5 * * * ?",
      "10 Minutes": "0 0/10 * * * ?"
    }
  });


  $scope.onEventClick = function (t) {

    var idx = $scope.selectedEvents.indexOf(t.type);
    if (idx == -1) {
      $scope.selectedEvents.push(t.type);
    } else {
      $scope.selectedEvents.splice(idx, 1);
    }

    $scope.refreshEvents();
  }

  $scope.refreshEvents = function () {
    $('#calendar').fullCalendar('removeEvents');

    $('#calendar').fullCalendar('addEventSource', formatLogs($scope.currentUnitLogs))
  }

  function formatLogs(logs) {
    return logs.filter(function (e) {
      return $scope.selectedEvents.indexOf(e.op) != -1;
    }).map(function (e, idx, arr) {
      var date = new Date(e.timestamp);
      return {
        id: idx,
        title: $scope.info(e),
        _source: e,
        _template: 'views/server/backup/' + e.op.toLowerCase() + '.html',
        start: date,
        end: date,
        className: $scope.clazz(e)

      }
    })
  }


  $scope.getClazz = function (t) {
    return ($scope.selectedEvents.indexOf(t.type) == -1 ? "fa-circle-thin " : "fa-circle ") + t.clazz;
  }


  $scope.$on('db-chosen', function (evt, db) {

    $scope.backup = db.backup;
    $scope.db = db;
    var incr = undefined;
    var full = undefined;
    if ($scope.backup.modes) {
      if ($scope.backup.modes["INCREMENTAL_BACKUP"] && $scope.backup.modes["FULL_BACKUP"]) {
        $scope.mode = "3";
        incr = $scope.backup.modes["INCREMENTAL_BACKUP"].when;
        full = $scope.backup.modes["FULL_BACKUP"].when;
      } else if ($scope.backup.modes["FULL_BACKUP"]) {
        $scope.mode = "2";
        full = $scope.backup.modes["FULL_BACKUP"].when;
      } else if ($scope.backup.modes["INCREMENTAL_BACKUP"]) {
        $scope.mode = "1";
        incr = $scope.backup.modes["INCREMENTAL_BACKUP"].when;
      }
    }


    $scope.incremental_cron.cron('value', incr);
    $scope.full_cron.cron('value', full);


    $scope.requestEvents = function () {
      BackupService.logs($scope.backup.uuid, {from: $scope.from, to: $scope.to}).then(function (data) {
        $scope.logs = data.logs;
        $scope.currentUnitLogs = data.logs;

        $scope.refreshEvents();
      })
    }


    $scope.initBackup(db);


    $scope.$watch("mode", function (m) {
      if (m) {
        switch (m) {
          case "1":
            if (!$scope.backup.modes["INCREMENTAL_BACKUP"]) {
              $scope.backup.modes["INCREMENTAL_BACKUP"] = {when: "0 0/1 * * * ?"}
            }
            delete $scope.backup.modes["FULL_BACKUP"]
            break;
          case "2":
            if (!$scope.backup.modes["FULL_BACKUP"]) {
              $scope.backup.modes["FULL_BACKUP"] = {when: "0 0/1 * * * ?"}
            }
            delete $scope.backup.modes["INCREMENTAL_BACKUP"];
            break;
          case "3":
            if (!$scope.backup.modes["FULL_BACKUP"]) {
              $scope.backup.modes["FULL_BACKUP"] = {when: "0 0/1 * * * ?"}
            }
            if (!$scope.backup.modes["INCREMENTAL_BACKUP"]) {
              $scope.backup.modes["INCREMENTAL_BACKUP"] = {when: "0 0/1 * * * ?"}
            }
            break;
        }

      }
    })


  })

  $scope.removeBkp = function (evt) {

    var modalScope = $scope.$new(true);
    modalScope.restored = {unitId: evt.unitId};

    modalScope.onRemove = function (obj, callback) {
      BackupService.remove($scope.backup.uuid, obj).then(function (data) {
        $scope.requestEvents();
        callback();
        Notification.push({content: "Backcup files removed", autoHide: true});

      }).catch(function (err) {
        callback();
        Notification.push({content: err.data, error: true, autoHide: true});
      })
    }
    BackupService.unitLogs($scope.backup.uuid, evt.unitId, {op: evt.op}).then(function (data) {
      modalScope.unitLogs = data.logs;
      modalScope.restored.log = evt;
      var modalPromise = $modal({template: 'views/server/backup/remove.html', scope: modalScope, show: false});
      modalPromise.$promise.then(modalPromise.show);
    })
  }
  $scope.restore = function (evt) {
    var modalScope = $scope.$new(true);
    modalScope.restored = {unitId: evt.unitId};
    modalScope.onRestore = function (obj, callback) {

      BackupService.restore($scope.backup.uuid, obj).then(function (data) {
        $scope.requestEvents();
        callback();
        Notification.push({content: "Restore procedure in progress into database " + obj.target, autoHide: true});
      }).catch(function (err) {
        callback();
        Notification.push({content: err.data, error: true, autoHide: true});
      })
    }


    BackupService.unitLogs($scope.backup.uuid, evt.unitId, {op: evt.op}).then(function (data) {
      modalScope.unitLogs = data.logs;
      modalScope.restored.log = evt;

      var modalPromise = $modal({template: 'views/server/backup/restore.html', scope: modalScope, show: false});
      modalPromise.$promise.then(modalPromise.show);
    })

  }


  var modeToString = function (mode) {

    switch (mode) {
      case "INCREMENTAL_BACKUP":
        return "Incremental backup";
      case "FULL_BACKUP":
        return "Full backup";
    }
  }

  $scope.clazz = function (event) {
    var clazz = "basic-log";

    switch (event.op) {
      case "BACKUP_FINISHED":
        clazz += " log-finished";
        break;
      case "BACKUP_SCHEDULED":
        clazz += " log-scheduled";
        break;
      case "BACKUP_STARTED":
        clazz += " log-started";
        break;
      case "BACKUP_ERROR":
        clazz += " log-error";
        break;
      case "RESTORE_FINISHED":
        clazz += " log-restore-finished";
        break;
      case "RESTORE_STARTED":
        clazz += " log-restore-started";
        break;
      case "RESTORE_ERROR":
        clazz += " log-error";
        break;

    }
    return clazz;
  }
  $scope.info = function (event) {
    var info = modeToString(event.mode);
    switch (event.op) {
      case "BACKUP_FINISHED":
        info += " executed";
        break;
      case "BACKUP_ERROR":
        info += " error";
        break;
      case "BACKUP_SCHEDULED":
        info += " scheduled.";
        break;
      case "BACKUP_STARTED":
        info += " started";
        break;
      case "RESTORE_FINISHED":
        info = "Restore finished";
        break;
      case "RESTORE_STARTED":
        info = "Restore started";
        break;
      case "RESTORE_ERROR":
        info = "Restore error";
        break;
    }
    return info;
  }
  function initCalendar() {
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      viewRender: function (view, element) {


        $scope.from = view.start.format('x');
        $scope.to = view.end.format('x');


        if ($scope.from && $scope.to) {
          $scope.requestEvents();
        }

      },
      eventClick: function (calEvent, jsEvent, view) {

        var modalScope = $scope.$new(true);
        modalScope.event = calEvent;
        var modalPromise = $modal({template: 'views/server/backup/modalBackup.html', scope: modalScope, show: false});

        modalScope.restoreBackup = function (evt) {
          $scope.restore(evt._source);
        }

        modalScope.removeBackup = function (evt) {
          $scope.removeBkp(evt._source);
        }
        modalPromise.$promise.then(modalPromise.show);
      },
      defaultView: 'agendaWeek',
      editable: true

    })
  }

  $scope.initBackup = function (db) {
    if (!$scope.backup.uuid) {
      $scope.backup.dbName = db.name;
      $scope.backup.modes = {};
      $scope.backup.enabled = true;
      $scope.backup.retentionDays = -1;
      $('#calendar').fullCalendar('destroy');
    } else {


      $('#calendar').fullCalendar('destroy');

      initCalendar();

    }
  }

  $scope.save = function () {
    BackupService.save($scope.backup).then(function (data) {
      $scope.backup = data;
      $scope.initBackup($scope.db);
      Notification.push({content: "Backup saved", autoHide: true});
    }).catch(function (err) {
      Notification.push({content: err.data, error: true, autoHide: true});
    });
  }
});


ee.controller("RestoreController", function ($scope) {


})
/**
 * Security Controller Auditing + Authenticator
 */
ee.controller("ServerSecurityController", function ($scope, AgentService, SecurityService, Cluster) {


  $scope.agentActive = AgentService.active;


  if ($scope.agentActive) {

    Cluster.node().then(function (data) {
      $scope.servers = data.members;
      $scope.server = $scope.servers[0];
      if ($scope.server.databases.length > 0) {
        $scope.db = $scope.server.databases[0];
      }
      SecurityService.get().then(function (security) {
        $scope.security = security;

        $scope.securityOld = angular.copy(security);
        $scope.$broadcast('security-loaded', security);
      });
    });
  }

  $scope.$watch("security.enabled", function (enabled, old) {

    if (enabled != undefined && old != undefined) {


    }
  })
  $scope.securityTabs = [

    {"name": "Auditing", "template": "views/server/stats/auditing.html"},
    {"name": "Authentication ", "template": "views/server/stats/security/authentication.html"},
    {"name": "LDAP Importer", "template": "views/server/stats/security/ldap.html"},
    {"name": "Misc", "template": "views/server/stats/security/serverSecurity.html"},

  ]


});


ee.controller('ServerAuthTabController', function ($scope, SecurityService, Notification, $modal) {


  $scope.authentication = $scope.security.authentication;


  var setDefault = function () {
    $scope.currentAuthenticator = null;

    if ($scope.authentication) {
      if ($scope.authentication.authenticators.length > 0) {
        for (var i in $scope.authentication.authenticators) {
          if ($scope.authentication.authenticators[i].template) {
            $scope.currentAuthenticator = $scope.authentication.authenticators[i];
          }
        }
      }
    }

  }
  $scope.suppertedAuthenticators = {
    "com.orientechnologies.orient.server.security.authenticator.ODefaultPasswordAuthenticator": {
      template: "views/server/stats/security/defaultPwd.html",

      defaultVal: {
        name: "Password",
        class: "com.orientechnologies.orient.server.security.authenticator.ODefaultPasswordAuthenticator",
        enabled: true
      }
    },
    "com.orientechnologies.security.kerberos.OKerberosAuthenticator": {
      template: "views/server/stats/security/kerberos.html",

      defaultVal: {
        name: "Kerberos",
        class: "com.orientechnologies.security.kerberos.OKerberosAuthenticator",
        enabled: true,
        "debug": false,

        "krb5_config": "/etc/krb5.conf",

        "service": {
          "ktname": "/etc/keytab/kerberosuser",
          "principal": "kerberosuser/kerberos.domain.com@REALM.COM"
        },

        "spnego": {
          "ktname": "/etc/keytab/kerberosuser",
          "principal": "HTTP/kerberos.domain.com@REALM.COM"
        },

        "client": {
          "ccname": null,
          "ktname": null,
          "useTicketCache": true,
          "principal": "kerberosuser@REALM.COM",
          "renewalPeriod": 300
        }
      }
    },
    "com.orientechnologies.orient.server.security.authenticator.OServerConfigAuthenticator": {
      defaultVal: {
        name: "ServerConfig",
        class: "com.orientechnologies.orient.server.security.authenticator.OServerConfigAuthenticator",
        enabled: true
      }
    },
    "com.orientechnologies.orient.server.security.authenticator.OSystemUserAuthenticator": {
      defaultVal: {
        name: "SystemAuthenticator",
        class: "com.orientechnologies.orient.server.security.authenticator.OSystemUserAuthenticator",
        enabled: true
      }
    }
  };


  $scope.moveUp = function (a, $index) {
    $scope.authentication.authenticators.splice($index, 1);
    $scope.authentication.authenticators.splice($index - 1, 0, a);
  }
  $scope.moveDown = function (a, $index) {
    $scope.authentication.authenticators.splice($index, 1);
    $scope.authentication.authenticators.splice($index + 1, 0, a);
  }
  $scope.addAuthenticator = function () {

    var modalScope = $scope.$new(true);


    modalScope.auths = Object.keys($scope.suppertedAuthenticators).filter(function (e) {
      var found = $scope.authentication.authenticators.filter(function (ev) {
        return ev.class == e;
      })
      return found.length == 0;
    }).map(function (e) {
      return $scope.suppertedAuthenticators[e].defaultVal;
    });

    modalScope.addToAuth = function (a) {
      $scope.authentication.authenticators.push(a);

      if ($scope.suppertedAuthenticators[a.class].template) {
        $scope.currentAuthenticator = a;
      }
    }
    var modalPromise = $modal({template: 'views/server/stats/security/newAuth.html', scope: modalScope, show: false});


    modalPromise.$promise.then(modalPromise.show);

  }

  $scope.getAuthTemplate = function (a) {
    if (!a) return a;
    return $scope.suppertedAuthenticators [a.class].template;
  }


  $scope.hasTemplate = function (a) {

    return $scope.suppertedAuthenticators[a.class].template;
  }
  $scope.setCurrent = function (a) {
    $scope.currentAuthenticator = a;
  }
  $scope.removeAuth = function (idx) {
    $scope.authentication.authenticators.splice(idx, 1);

    setDefault();
  }
  $scope.getValue = function (k) {

    return $scope.authentication.authenticators.filter(function (r) {
      return r.class == k;
    })[0];
  }

  $scope.getValues = function (k) {

    return $scope.authentication.authenticators.filter(function (r) {
      return r.class == k;
    });
  }
  $scope.saveAuthentication = function () {

    SecurityService.reload({"module": "authentication", "config": $scope.authentication}).then(function () {
      Notification.push({content: "Module Authentication reloaded", autoHide: true});
    }).catch(function (err) {
      Notification.push({content: err.data, error: true, autoHide: true});
    });
  }

  setDefault();
});

ee.controller('ServerSecurityTabController', function ($scope, SecurityService, Notification) {


  $scope.serverSecurity = $scope.security.server;


  $scope.passwordValidator = $scope.security.passwordValidator;


  $scope.saveServer = function () {

    SecurityService.reload({"module": "server", "config": $scope.serverSecurity}).then(function () {
      Notification.push({content: "Module Server reloaded", autoHide: true});
    }).catch(function (err) {
      Notification.push({content: err.data, error: true, autoHide: true});
    });
  }

  $scope.savePasswordValidator = function () {
    SecurityService.reload({"module": "passwordValidator", "config": $scope.passwordValidator}).then(function () {
      Notification.push({content: "Module password validator reloaded", autoHide: true});
    }).catch(function (err) {
      Notification.push({content: err.data, error: true, autoHide: true});
    });
  }

});


ee.controller('OKerberosController', function ($scope, SecurityService, Notification) {


  $scope.kerberos = $scope.getValue('com.orientechnologies.security.kerberos.OKerberosAuthenticator');


});


ee.controller('OLdapController', function ($scope, SecurityService, Notification, DatabaseApi) {


  DatabaseApi.listDatabases(function (data) {
    $scope.databases = data.databases;
  });

  $scope.ldap = $scope.security.ldapImporter || {
      enabled: false,
      class: 'com.orientechnologies.security.ldap.OLDAPImporter',
      debug: false,
      period: 60,
      databases: []
    };


  $scope.getValues = function (k) {

    return $scope.security.authentication.authenticators.filter(function (r) {
      return r.class == k;
    });
  }

  if ($scope.security.authentication)
    $scope.authenticators = $scope.security.authentication.authenticators;

  if ($scope.ldap.databases.length > 0) {
    $scope.currentSelected = $scope.ldap.databases[0];


    if ($scope.currentSelected.domains.length > 0) {
      $scope.currentDomain = $scope.currentSelected.domains[0];
    }
  }
  $scope.saveLdap = function () {

    SecurityService.reload({"module": "ldapImporter", "config": $scope.ldap}).then(function () {
      Notification.push({content: "Module Ldap importer reloaded", autoHide: true});
    }).catch(function (err) {
      Notification.push({content: err.data, error: true, autoHide: true});
    });
  }


  $scope.setSelected = function (a) {
    $scope.currentSelected = a;
  }

  $scope.addDomain = function () {

    if ($scope.currentSelected) {
      if (!$scope.currentSelected.domains) {
        $scope.currentSelected.domains = [];
      }
      $scope.currentSelected.domains.push({
        domain: "",
        authenticator: "",
      })
    }
  }

  $scope.removeDomain = function (idx) {
    $scope.currentSelected.domains.splice(idx, 1);
  }
  $scope.removeDatabase = function (idx) {
    $scope.ldap.databases.splice(idx, 1);
    $scope.currentSelected = null;
  }


  $scope.addServer = function () {
    if (!$scope.currentDomain.servers) {
      $scope.currentDomain.servers = [];
    }
    $scope.currentDomain.servers.push({
      url: "ldap://alias.ad.domain.com:389",
      isAlias: true
    })
  }

  $scope.addUser = function () {
    if (!$scope.currentDomain.users) {
      $scope.currentDomain.users = [];
    }
    $scope.currentDomain.users.push({
      baseDN: "CN=Users,DC=ad,DC=domain,DC=com",
      "filter": "(&(objectCategory=person)(objectclass=user)(memberOf=CN=ODBUser,CN=Users,DC=ad,DC=domain,DC=com))",
      "roles": ["reader", "writer"]
    });
  }
  $scope.removeUser = function (idx) {
    $scope.currentDomain.users.splice(idx, 1);
  }
  $scope.removeServer = function (idx) {
    $scope.currentDomain.servers.splice(idx, 1);
  }
  $scope.setCurrentDomain = function (d) {
    $scope.currentDomain = d;
  }
  $scope.addDatabase = function () {
    $scope.currentSelected = {
      database: "",
      ignoreLocal: true,
    };
    $scope.ldap.databases.push($scope.currentSelected)
  }
});
ee.controller('ODefaultPasswordController', function ($scope, SecurityService, Notification) {


  $scope.password = $scope.getValue('com.orientechnologies.orient.server.security.authenticator.ODefaultPasswordAuthenticator');


  $scope.addUser = function () {
    if (!$scope.password.users) {
      $scope.password.users = []
    }
    $scope.password.users.push({
      username: 'guest',
      resources: 'connect,server.listDatabases,server.dblist'
    })
  }

  $scope.removeUser = function (idx) {
    $scope.password.users.splice(idx, 1);
  }

});

ee.controller('OServerConfigController', function ($scope, SecurityService, Notification) {

  $scope.serverConfig = $scope.getValue('com.orientechnologies.orient.server.security.authenticator.OServerConfigAuthenticator');


});
