/*(function(){
	'use strict';

	var app=angular.module('ShoppingListCheckOff',[]);
	app.controller('ToBuyController', ToBuyController);
	app.controller('AlreadyBoughtController',AlreadyBoughtController);
	app.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

	ToBuyController.$inject=['ShoppingListCheckOffService'];
	AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

	function ToBuyController(ShoppingListCheckOffService) {
		var ctrl1=this;
		ctrl1.Message="Everything is bought!";

		
			ctrl1.ToBuy=ShoppingListCheckOffService.getLista();
		
		
		ctrl1.pro="";
		ctrl1.quan="";

		ctrl1.toBuy=function(index,nombre,cantidad) {
			var product=ShoppingListCheckOffService.getElement(index);
			ctrl1.pro=product['name'];
		ctrl1.quan=product['quantity'];
			ShoppingListCheckOffService.addItem(nombre,cantidad);
			ShoppingListCheckOffService.removeItem(index);
			
		};
	}

	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var ctrl2=this;

		ctrl2.Message="Nothing bought yet";

	

			

		
				ctrl2.Bought=ShoppingListCheckOffService.getbought();
				
			
			
		
	}

	function ShoppingListCheckOffService() {

		var service=this;
		var lista=[
		{ name: "cookies", quantity: 10 },
		{ name: "milk", quantity: 12 },
		{ name: "rice", quantity: 100 },
		{ name: "butter", quantity: 243 },
		{ name: "soap", quantity: 1 }];

		


		var bought=[];

         service.addItem=function(product,quantity){
         	var input={
				name:product,
				quantity:quantity
			};
         	bought.push(input);
         	
         	
         };

         service.removeItem=function (index) {
         	lista.splice(index,1);
         	
         	
         };

         service.getElement=function(index){
         	return lista[index];
         };

         service.getLista=function(){
         	

         	return lista;
         };

         service.getbought=function () {
         	

         	return bought;
         };


	}

})();*/



!function(){"use strict";var t=angular.module("ShoppingListCheckOff",[]);function e(t){var e=this;e.Message="Everything is bought!",e.ToBuy=t.getLista(),e.pro="",e.quan="",e.toBuy=function(n,i,o){var u=t.getElement(n);e.pro=u.name,e.quan=u.quantity,t.addItem(i,o),t.removeItem(n)}}function n(t){this.Message="Nothing bought yet",this.Bought=t.getbought()}t.controller("ToBuyController",e),t.controller("AlreadyBoughtController",n),t.service("ShoppingListCheckOffService",function(){var t=[{name:"cookies",quantity:10},{name:"milk",quantity:12},{name:"rice",quantity:100},{name:"butter",quantity:243},{name:"soap",quantity:1}],e=[];this.addItem=function(t,n){var i={name:t,quantity:n};e.push(i)},this.removeItem=function(e){t.splice(e,1)},this.getElement=function(e){return t[e]},this.getLista=function(){return t},this.getbought=function(){return e}}),e.$inject=["ShoppingListCheckOffService"],n.$inject=["ShoppingListCheckOffService"]}();
