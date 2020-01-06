  $(document).ready(function() {
    checkWeb();
  });

    var jeu_en_pause=false;
    
    function modePause() {
      if($('body').hasClass('pause')) {
        jeu_en_pause=false;
        $('body').removeClass('pause');
        return 'Mettre en pause';
      } else {
        jeu_en_pause=true;
        $('body').addClass('pause');
        return 'Quitter le mode "pause"';
      }
    }

    function checkWeb() {
      $.get('https://tools.sopress.net/propuls/buzzer/?ping&'+Math.random()).then(function(data) {
       $('[name="web"]').html('Connexion web ok').addClass('green').removeClass('red');
      }).catch(function(error) {
       $('[name="web"]').html('AUCUNE CONNEXION A INTERNET').addClass('red').removeClass('green');
      });
    }

    function toggleFullScreen() {
      if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
       (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {  
          document.documentElement.requestFullScreen();  
        } else if (document.documentElement.mozRequestFullScreen) {  
          document.documentElement.mozRequestFullScreen();  
        } else if (document.documentElement.webkitRequestFullScreen) {  
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
        }  
        return 'Quitter le mode plein écran';
      } else {  
        if (document.cancelFullScreen) {  
          document.cancelFullScreen();  
        } else if (document.mozCancelFullScreen) {  
          document.mozCancelFullScreen();  
        } else if (document.webkitCancelFullScreen) {  
          document.webkitCancelFullScreen();  
        }  
        return 'Plein écran';
      }  
    }