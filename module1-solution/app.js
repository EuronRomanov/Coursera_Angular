/*(function () {
'use strict';

	angular.module('LunchCheck',[])
	
.controller('LunchCheckController',validar);
 validar.$inject=['$scope'];
	
	function validar($scope){
           
          	  $scope.mensage="";

           $scope.giveMensage=function(){
           	var lis=$scope.lista;
          
              if (lis==null) {
              	$scope.mensage="Please enter data first";
              } else {

                // $scope.mensage=contar(lis);
                 var chain=lis.split(",");

                 if (chain.length<=3) {
			$scope.mensage="Enjoy!";
		} else if (chain.length>3) {
			$scope.mensage= "Too much!";
		}
              }
           }



	}



       

 
	

})();*/

!function(){"use strict";function e(e){e.mensage="",e.giveMensage=function(){var n=e.lista;if(null==n)e.mensage="Please enter data first";else{var t=n.split(",");t.length<=3?e.mensage="Enjoy!":t.length>3&&(e.mensage="Too much!")}}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();