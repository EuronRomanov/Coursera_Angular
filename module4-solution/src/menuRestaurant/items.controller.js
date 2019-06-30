(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject0['items'];
function ItemsController(items) {
  var itemDetail = this;
  itemDetail.items = items;
}

})();