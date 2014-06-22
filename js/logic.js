var app = angular.module('app', []);

app.controller('DrawingsController',

  function DrawingsController($scope) {
    $scope.types = ['office', 'music'];

    $scope.drawings = [{
      name: 'Microsoft Natural Ergonomic Keyboard 4000',
      price: 31.99,
      link: 'http://www.amazon.com/Microsoft-Natural-Ergonomic-Keyboard-4000/dp/B000A6PPOK/ref=zg_bs_12879431_7',
      type: 'office',
      img: 'images/keyboard.jpeg',
      bought: false
    }, {
      name: 'Evoluent VerticalMouse 4 Small',
      price: 89.95,
      link: 'http://www.amazon.com/VerticalMouse-Small-Mouse-Laser-Wired/dp/B004GXZ69W',
      type: 'office',
      img: 'images/mouse.jpeg',
      bought: false
    }, {
      name: 'Audio-Technica ATH-M30 Headphones',
      price: 42.40,
      link: 'http://www.amazon.com/Audio-Technica-ATH-M30-Professional-Closed-back-Headphones/dp/B00007E7C8/ref=zg_bs_172541_17',
      type: 'music',
      img: 'images/headphone.jpeg',        
      bought: false
    }, {
      name: 'Little Martin LX1E',
      price: 399,
      link: 'http://www.guitarcenter.com/Martin-X-Series-LX1E-Little-Martin-Acoustic-Electric-109455931-i1148318.gc',
      type: 'music',
      img: 'images/guitar.jpeg',        

      bought: false
    }];


  });

$(function () {
  $('#showing').mixItUp();
});