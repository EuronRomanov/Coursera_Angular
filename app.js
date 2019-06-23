(function() {
	'use strict';
	var app=angular.module('NarrowItDownApp',[]);

	app.controller('NarrowItDownController', NarrowItDownController);
	app.service('MenuSearchService', MenuSearchService);
	app.directive('foundItems', FoundItemsDirective);
	app.factory('MenuSearchFactory', MenuSearchFactory);
	NarrowItDownController.$inject=['MenuSearchService'];
	MenuSearchService.$inject=['$http'];


	function FoundItemsDirective() {
		var ddo={
			templateUrl:'foundItems.html',
			scope:{
				found:'<',
			    onRemove:'&'
			},


			controller: ControllerUseInDirective,
			controllerAs: 'list',
			bindToController: true
		};

		return ddo;
	}
     

     function ControllerUseInDirective() {
     	var list=this;

     	list.isEmpty=function () {
     		return list.found!=undefined && list.found.length===0;
     	}
     }

	function NarrowItDownController(MenuSearchService) {
		
		var control=this;

		control.search="";
        

        
		
		control.lookFor=function () {
			 if (control.search === "") {
         	
        control.datos=[];
        return;
      }

			var promise=MenuSearchService.getMatchedMenuItems(control.search);
			
		promise.then(function (response) {
			control.datos=response;
		}).catch(function (error) {
			console.log('Error',error);
		});

		};

		control.remove=function (index) {
			control.datos.splice(index,1);
		};



	}


	function MenuSearchService($http) {
		var service=this;

		//var items=[];
		

	service.getMatchedMenuItems	=function(searchTerm) {
	        /*var direccion={
	        	method:'GET',
	        	utrl:('https://davids-restaurant.herokuapp.com/menu_items.json')
	        };*/

	        return $http({
          method: 'GET',
          url: ('https://davids-restaurant.herokuapp.com/menu_items.json')
        }).then(function (result) {
	        	
	        	var items=result.data.menu_items;
	        	var  foundItems=[];
	        	for (var i = 0; i < items.length; i++) {
	        		if (items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase())>=0) {
	        			foundItems.push(items[i]);
	        		}
	        	}

	        	return foundItems;

	        });
	       // return respons;
		};



	}



  function MenuSearchFactory() {
    var factory = function () {
      return new MenuSearchService();
    };

    return factory;
  }

})();