(function(){
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

		//try{
			ctrl1.ToBuy=ShoppingListCheckOffService.getLista();
		/*}catch(error){
			ctrl1.Message=error.message;
		}*/
		
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

		//try{

			

		
				ctrl2.Bought=ShoppingListCheckOffService.getbought();
				
			
			
		/*}catch(error){
          ctrl2.Message=error.message;
		}*/
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
         	/*if (lista.length==0) {
         	throw new Error("Everything is bought!");
         	}*/

         	return lista;
         };

         service.getbought=function () {
         	/*if (bought.length<1) {
         	throw new Error("Nothing bought yet");
         	}*/

         	return bought;
         };


	}

})();