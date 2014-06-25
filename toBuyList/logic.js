var app = angular.module('app', []);

app.controller('ItemsController',

  function ItemsController($scope) {
    $scope.types = ['office', 'music'];

    $scope.items = [{
      name: 'Microsoft Natural Ergonomic Keyboard 4000',
      price: 31.99,
      link: 'http://www.amazon.com/Microsoft-Natural-Ergonomic-Keyboard-4000/dp/B000A6PPOK/ref=zg_bs_12879431_7',
      type: 'office',
      img: 'images/keyboard.jpeg',
      bought: false
    }, {
      name: 'Evoluent Vertical Mouse 4 Small',
      price: 89.95,
      link: 'http://www.amazon.com/VerticalMouse-Small-Mouse-Laser-Wired/dp/B004GXZ69W',
      type: 'office',
      img: 'images/mouse.jpeg',
      bought: false
    }, {
      name: 'Audio-Technica ATH-M30 Headphones',
      price: 42.40,
      link: 'http://www.amazon.com/Audio-Technica-ATH-M30-Professional-Closed-back-Headphones/dp/B00007E7C8/ref=zg_bs_172541_17',
      type: 'office',
      img: 'images/headphone.jpeg',        
      bought: false
    }, {
      name: 'Little Martin LX1E',
      price: 399,
      link: 'http://www.guitarcenter.com/Martin-X-Series-LX1E-Little-Martin-Acoustic-Electric-109455931-i1148318.gc',
      type: 'music',
      img: 'images/guitar.jpeg',        
      bought: false
    },{
      name: 'Casio Privia',
      price: 299,
      link: 'http://www.ebay.com/itm/Casio-PX700-Privia-Digital-88-Note-Weighted-Key-Piano-Free-Bench-MINT-COND-/281352867406?pt=Keyboards_MIDI&hash=item4181f00e4e', 
      type: 'music',
      img: 'images/weightedkeyboard.jpeg',        
      bought: false       
    },{
      name: 'Roland HD-1',
      price: 699,
      link: 'https://www.google.com/#q=roland+hd-1&tbm=shop', 
      type: 'music',
      img: 'images/drumset.jpeg',        
      bought: false       
    },{
      name: 'Meinl Cajon',
      price: 109.99,
      link: 'http://smile.amazon.com/Meinl-Percussion-Headliner-Series-Natural/dp/B000B6FADU/ref=sr_1_1?s=musical-instruments&ie=UTF8&qid=1403585724&sr=1-1',
      img:'images/cajon.jpg',
      type:'music',
      bought:false
    },{
      name: 'Kitchen Aid Mixer',
      price:239.00,
      link: 'http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=kitchen+aid&rh=i%3Aaps%2Ck%3Akitchen+aid',
      img: 'images/mixer.jpg',
      type: 'kitchen',
      bought:false
    } 
    ];


  });

$(function () {
  $('#showing').mixItUp();
});

$(function ()  
  { $("#pop").popover();  
});  

// $(function(){
//   var container = $('.row').masonry();
//   // layout Masonry again after all images have loaded
//   container.imagesLoaded( function() {
//    container.masonry();
//   });

//});