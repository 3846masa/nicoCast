$(function(){
  setTimeout(fadeIn, 3000);

  function fadeIn () {
    $('.container').delay(125).animate({ opacity: 1.0 }, 1000, 'easeInQuad');
  }

  var bodyWebFont = document.createElement('japont-config');
  bodyWebFont.setAttribute('src', 'mplus/mplus-1p-light.woff');
  bodyWebFont.setAttribute('selector', 'body');

  var headerWebFont = document.createElement('japont-config');
  headerWebFont.setAttribute('src', 'mplus/mplus-1p-light.woff');
  headerWebFont.setAttribute('selector', 'body');

  var cnt = 0;
  bodyWebFont.onload = headerWebFont.onload = function () {
    cnt++;
    if (cnt === 2) {
      fadeIn();
    }
  }

  document.head.appendChild(bodyWebFont);
  document.head.appendChild(headerWebFont);
});
