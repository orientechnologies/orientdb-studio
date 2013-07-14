	var schemaModule = angular.module('schema.controller',['database.services']);
	schemaModule.controller("SchemaController",['$scope','$routeParams','$location','Database','CommandApi',function($scope,$routeParams,$location,Database,CommandApi){

		$scope.database = Database;

		$scope.list = $scope.database.listClasses();
		
		$scope.headers = ['name','superClass','alias','abstract','clusters','defaultCluster','records'];

		

		$scope.setClass = function(clazz){
			$scope.classClicked = clazz;
		}  
		$scope.openClass = function(clazz){
			$location.path("/database/" + $scope.database.getName() + "/browse/editclass/" + clazz.name);
		}
	}]);
	schemaModule.controller("ClassEditController",['$scope','$routeParams','$location','Database','CommandApi',function($scope,$routeParams,$location,Database,CommandApi){


		var clazz = $routeParams.clazz;

		$scope.database = Database;
		$scope.limit = 20;
		$scope.queries = new Array;

		$scope.classClickedHeaders = ['name','type','linkedType','linkedClass','mandatory','readonly','notNull','min','max'];

		$scope.property = Database.listPropertiesForClass(clazz);
		$scope.queryText = ""
		$scope.modificati = new Array;
		$scope.prova = new Array;
		
		
console.log($scope.property[0]['linkedType'])
		$scope.modificato = function(result,prop){
			var key = result['name'];
			if($scope.modificati[result['name']] == undefined){
				$scope.modificati[result['name']] = new Array(prop);
			}

			else {

				var elem= $scope.modificati[result['name']] 
				var already = false;
				for(i in elem){
					if(prop == elem[i]){
						already=true

					}
				}
				if(already == false){

					elem.push(prop);
				}

			}

		}
		$scope.saveProperty = function(properties){

			for (result in properties ){

	//il nome da andare a cercare nella lista dei modificati
	var keyName = properties[result]['name'];
	//l'array da modificare
	var arrayToUpdate = $scope.modificati[keyName];

	if(arrayToUpdate != undefined){

		for(i in arrayToUpdate){

			var prop = arrayToUpdate[i];
			var sql = 'ALTER PROPERTY ' + clazz + '.' + keyName +' ' +prop+ ' ' +properties[result][prop];
			console.log(sql);
							CommandApi.queryText({database : $routeParams.database, language : 'sql', text : sql, limit : $scope.limit},function(data){

							});
}
}
}
//clear
$scope.modificati = new Array;
}}]);