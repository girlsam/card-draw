(function() {

  'use strict';

  angular.module('cardDrawApp.components.hand')
    .directive('cdHand', handDirective);

  handDirective.$inject = [];

  function handDirective() {
    return {
      restrict: 'E',
      controller: 'handController',
      template: '<h5>Hand</h5>'
    };
  }

}());
