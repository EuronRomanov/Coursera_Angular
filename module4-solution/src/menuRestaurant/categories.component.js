(function () {
	
	'use strict';
	angular.module('MenuApp')
	.component('categories',{
		templateUrl: 'src/menuRestaurant/templates/categories.component.template.html',
		bindings: {
    		items: '<'
  		}
	});
	
})();