

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var logoContainer = document.getElementsByClassName('arrow')[0];
  if (scrollPosition >= 100) logoContainer.classList.add('arrow--scrolled');
  else logoContainer.classList.remove('arrow--scrolled');
});

let keyList = [];

    $(document).ready(function () {
    
      $(document).keypress(function (e) {
        keyList.push(e.key);
        let cheat = keyList.join('');
        if (["dervis", "kedi", "cat"].includes(cheat.replace('ş', 's').toLocaleLowerCase())) {
          $('#cheats').append(`
<div id="cheat1" class="modal">
  <div class="modal-content">
    <center>
      <video id="dervis" src="https://cdn.discordapp.com/attachments/649655949560381450/650720508098117635/Dervis-1.mp4"
        type="video/mp4"></video>
    </center>
  </div>
</div>`);
          console.log('cheat activated!')
          $('#cheat1').show();
          $('#dervis').get(0).currentTime = 0;
          $('#dervis').get(0).play()
          $('#dervis').on('ended', function () {
            $('#cheat1').hide();
            $('#cheat1').remove();
          });
        } else if (["otobus", "otobüs"].includes(cheat.toLocaleLowerCase())) {
          $('#cheats').append(`
<div id="cheat2" class="modal">
  <div class="modal-content">
    <center>
      <img src="https://i.emirkabal.com/otobus.png">
      <audio id="korna">
        <source src="https://i.emirkabal.com/korna.mp3" type="audio/mpeg">
          tarayıcı desteği bulunmuyor
      </audio>
    </center>
  </div>
</div>`);
          console.log('cheat activated!')
          $('#korna').get(0).currentTime = 0;
          $('#korna').get(0).play()
          $('#cheat2').show();
          $('#korna').on('ended', function () {
            $('#cheat2').hide();
            $('#cheat2').remove();
          });
          
        }
        setTimeout(() => {
          keyList.shift();
        }, 2000);
      });
    });
