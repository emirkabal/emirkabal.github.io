

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var logoContainer = document.getElementsByClassName('arrow')[0];
  if (scrollPosition >= 100) logoContainer.classList.add('arrow--scrolled');
  else logoContainer.classList.remove('arrow--scrolled');
});

let keyList = [];

    $(document).ready(function () {
      $('#dervis').on('ended', function () {
        $('#cheat1').hide();
      });
      $(document).keypress(function (e) {
        keyList.push(e.key);
        let cheat = keyList.join('');
        if (["dervis", "kedi", "cat"].includes(cheat.replace('ş', 's').toLocaleLowerCase())) {
          console.log('cheat activated!')
          $('#cheat1').show();
          $('#dervis').get(0).currentTime = 0;
          $('#dervis').get(0).play()
        }
        setTimeout(() => {
          keyList.shift();
        }, 2000);
      });
    });
