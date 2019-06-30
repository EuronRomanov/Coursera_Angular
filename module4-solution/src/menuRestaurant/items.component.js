(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuRestaurant/templates/items.component.html',
  bindings: {
    items: '<'
  }
});

})();
