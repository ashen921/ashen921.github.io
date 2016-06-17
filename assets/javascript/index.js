'use strict';
'use strict';

var lit = ['lit1.png', 'lit2.jpg', 'lit3.jpg', 'lit4.jpg', 'lit5.jpg'];
var nah = ['nah1.jpg', 'nah2.jpg', 'nah3.png', 'nah4.jpg'];
var btn = '<a class="waves-effect waves-light btn-large blue-grey darken-1 z-depth-1 isitlit"><i class="material-icons right">whatshot</i>Is it Lit?</a>';

$(function () {
  $('.content').html(btn);
  $('.lit').on('click', '.isitlit', function () {
    $('.isitlit').fadeOut(100, reveal);
  });
  $('.restart').on('click', function (e) {
    e.preventDefault();
    $('.content').html(btn);
  });
});

function reveal() {
  var yesOrNo = Math.round(Math.random());
  var imgEle = '<img class="responsive-img" src="/assets/images/';
  if (yesOrNo) {
    imgEle += lit[Math.floor(Math.random() * lit.length)] + '" alt="LIT">';
  } else {
    imgEle += nah[Math.floor(Math.random() * nah.length)] + '" alt="BRUH">';
  }
  $('.content').html(imgEle);
}
//# sourceMappingURL=index.js.map
