function onKonamiCode(cb) {
  var input = '';
  var key = '38384040373937396665';
  var key1 = '84827371716982';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key1) {
      return cb();
    }
    if (!key1.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

onKonamiCode(function (){
    $('.konami').show('fast');
    // alert(' NICE ');

});