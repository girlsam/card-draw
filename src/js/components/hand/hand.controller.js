(function() {

  'use strict';

  angular
    .module('cardDrawApp.components.hand')
    .controller('handController', handController);

  handController.$inject = ['handService'];

  function handController(handService) {
    handService.draw();
  }

})();
