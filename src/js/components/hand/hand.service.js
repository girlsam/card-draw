(function() {

  angular.module('cardDrawApp.components.hand')
    .service('handService', handService);

  handService.$inject = ['$http'];

  function handService($http) {
    this.draw = function() {
      const deckURL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
      let getAppPath = (id) => {`${id}/draw/?count=52`};
      $http.get(deckURL)
        .then(deckInfo => {
          console.log(deckInfo);
          var id = deckInfo.data.deck_id
          return $http.get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=52`)
        })
        .then(cardInfo => {
          var card = cardInfo.data.cards
          console.log(card);
        });
      }
    }

}());
