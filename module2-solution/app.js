(function (){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ShoppingListToBuyController', ShoppingListToBuyController)
  .controller('ShoppingListBoughtController', ShoppingListBoughtController)
  .service('ShoppingListService', ShoppingListService);

  ShoppingListToBuyController.$inject = ['ShoppingListService'];
  function ShoppingListToBuyController (ShoppingListService) {
    var toBuyList = this;

    toBuyList.items = ShoppingListService.getToBuyItems();

    toBuyList.buy = function (itemIndex) {
      ShoppingListService.buy(itemIndex);
    };

    toBuyList.message = function () {
      if (toBuyList.items.length == 0) {
        return 'Everything is bought!';
      } else {
        return false;
      }
    };
  }

  ShoppingListBoughtController.$inject = ['ShoppingListService'];
  function ShoppingListBoughtController (ShoppingListService) {
    var boughtList = this;

    boughtList.items = ShoppingListService.getBoughtItems();

    boughtList.message = function () {
      if (boughtList.items.length == 0) {
        return 'Nothing bought yet.';
      } else {
        return false;
      }
    };

  }

  function ShoppingListService() {
    var service = this;

    var toBuyList = [
      {
        itemName: "Cookies",
        quantity: 10
      },
      {
        itemName: "Chips",
        quantity: 20
      }
    ];

    var boughtList = [];

    service.getToBuyItems = function () {
      return toBuyList;
    };

    service.getBoughtItems = function () {
      return boughtList;
    };

    service.buy = function (itemIndex) {
      boughtList.push(toBuyList[itemIndex]);
      toBuyList.splice(itemIndex, 1);
    };

  }

})();
