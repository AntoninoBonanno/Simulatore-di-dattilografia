//Fonte http://www.itl-cert.it/corsotyping/index.php

//Punteggio
var score, err_count, correct_count, g_time, audio;

//Esegue tutto solo a caricamento completato
window.onload = function () {
  score = 0;
  err_count = 0;
  correct_count = 0;
  audio = false;

  //Area scrittura
  var text_target = document.getElementById("write");

  //Area testo esercizio
  var text_ex = document.getElementById("read");

  document.getElementById("goal").value = text_ex.textContent.length;
  document.getElementById("goal").setAttribute("max", text_ex.textContent.length);
  window.onresize = function () { checkScroll(text_ex); }

  //Aggiunge un listener alla textarea di input con opzione ONCE (listener rimosso alla prima invocazione)
  text_target.addEventListener("keydown", timerUpdate, { once: true });

  //Listener per pressione tasto
  text_target.addEventListener("keydown", (e) => {
    
    //Stato di Capslock
    var caps_status = e.getModifierState("CapsLock");

    if (caps_status) {
      //Cambia il background di CapsLock
      document.getElementById("caps_lock").style.background = "rgb(158, 202, 237)";

      //Capitalizza le lettere
      let letters = document.getElementsByClassName("letter");
      for (let item of letters) {
        item.classList.add('uppercase');
      }
    } else {
      //Ripristina il background di CapsLock
      document.getElementById("caps_lock").style.background = "#fff";

      //Rimuove la capitalizzazione delle lettere
      let letters = document.getElementsByClassName("letter");
      for (let item of letters) {
        item.classList.remove('uppercase');
      }
    }


    //Controlla se viene premuto Shift
    if (e.shiftKey) {
      //Cambia il background di Shift
      let shifts = document.getElementsByClassName("shift");
      for (let item of shifts) {
        item.style.background = "rgb(158, 202, 237)";
      }

      //Capitalizzazione lettere
      let letters = document.getElementsByClassName("letter");
      for (let item of letters) {
        if (!caps_status) {
          item.classList.add('uppercase');
        } else {
          item.classList.remove('uppercase');
        }
      }

      //Cambio simboli
      let off_symbols = document.getElementsByClassName("off");
      for (let item of off_symbols) {
        item.classList.add('hidden');
      }
      let on_symbols = document.getElementsByClassName("on");
      for (let item of on_symbols) {
        item.classList.remove('hidden');
      }
    }


    //Animazione on
    if (e.key) {
      let key_anim = document.getElementById(e.key);
      
      /*Non potendo esserci più ID per un unico elemento HTML quando si preme Shift o è attivo
      CapsLock la stringa key ricevuta in ingresso non corrisponde agli ID degli item della tastiera
      quindi va convertiti la stringa ma non c'è una funzione specifica in quanto differisce a seconta del layout*/
      switch (e.key) {
        case ">":
          key_anim = document.getElementById("<");
          break;
        case ";":
          key_anim = document.getElementById(",");
          break;
        case ":":
          key_anim = document.getElementById(".");
          break;
        case "_":
          key_anim = document.getElementById("-");
          break;
        case "ç":
          key_anim = document.getElementById("ò");
          break;
        case "°":
          key_anim = document.getElementById("à");
          break;
        case "§":
          key_anim = document.getElementById("ù");
          break;
        case "é":
          key_anim = document.getElementById("è");
          break;
        case "*":
          key_anim = document.getElementById("+");
          break;
        case "|":
          key_anim = document.getElementById("\u005C");
          break;
        case "!":
          key_anim = document.getElementById("1");
          break;
        case "\u0022":
          key_anim = document.getElementById("2");
          break;
        case "£":
          key_anim = document.getElementById("3");
          break;
        case "$":
          key_anim = document.getElementById("4");
          break;
        case "%":
          key_anim = document.getElementById("5");
          break;
        case "&":
          key_anim = document.getElementById("6");
          break;
        case "/":
          key_anim = document.getElementById("7");
          break;
        case "\(":
          key_anim = document.getElementById("8");
          break;
        case "\)":
          key_anim = document.getElementById("9");
          break;
        case "=":
          key_anim = document.getElementById("0");
          break;
        case "?":
          key_anim = document.getElementById("\u0027");
          break;
        case "^":
          key_anim = document.getElementById("ì");
          break;
        case " ":
          key_anim = document.getElementById("space");
          break;
        default:
          key_anim = document.getElementById((e.key).toLowerCase());
          break;
      }

      if (key_anim){
        key_anim.classList.add("grow");
      }
    }

    if (e.key == "Backspace") {
      e.preventDefault();
    }

  });

  //Listener rilascio tasto
  text_target.addEventListener("keyup", (e) => {
    if (e.key == "Shift") {

      //Ripristina il background di Shift
      let shifts = document.getElementsByClassName("shift");
      for (let item of shifts) {
        item.style.background = '#fff';
      }

      //Toggle capitalizzazione lettere e cambio simboli
      let letters = document.getElementsByClassName("letter");
      for (let item of letters) {
        item.classList.toggle('uppercase');
      }
      let off_symbols = document.getElementsByClassName("off");
      for (let item of off_symbols) {
        item.classList.toggle('hidden');
      }
      let on_symbols = document.getElementsByClassName("on");
      for (let item of on_symbols) {
        item.classList.toggle('hidden');
      }
    }

    //Animazione off
    if (e.key) {
      let key_anim = document.getElementById(e.key);

      /*Non potendo esserci più ID per un unico elemento HTML quando si preme Shift o è attivo
      CapsLock la stringa key ricevuta in ingresso non corrisponde agli ID degli item della tastiera
      quindi va convertiti la stringa ma non c'è una funzione specifica in quanto differisce a seconta del layout*/
      switch (e.key) {
        case ">":
          key_anim = document.getElementById("<");
          break;
        case ";":
          key_anim = document.getElementById(",");
          break;
        case ":":
          key_anim = document.getElementById(".");
          break;
        case "_":
          key_anim = document.getElementById("-");
          break;
        case "ç":
          key_anim = document.getElementById("ò");
          break;
        case "°":
          key_anim = document.getElementById("à");
          break;
        case "§":
          key_anim = document.getElementById("ù");
          break;
        case "é":
          key_anim = document.getElementById("è");
          break;
        case "*":
          key_anim = document.getElementById("+");
          break;
        case "|":
          key_anim = document.getElementById("\u005C");
          break;
        case "!":
          key_anim = document.getElementById("1");
          break;
        case "\u0022":
          key_anim = document.getElementById("2");
          break;
        case "£":
          key_anim = document.getElementById("3");
          break;
        case "$":
          key_anim = document.getElementById("4");
          break;
        case "%":
          key_anim = document.getElementById("5");
          break;
        case "&":
          key_anim = document.getElementById("6");
          break;
        case "/":
          key_anim = document.getElementById("7");
          break;
        case "\(":
          key_anim = document.getElementById("8");
          break;
        case "\)":
          key_anim = document.getElementById("9");
          break;
        case "=":
          key_anim = document.getElementById("0");
          break;
        case "?":
          key_anim = document.getElementById("\u0027");
          break;
        case "^":
          key_anim = document.getElementById("ì");
          break;
        case " ":
          key_anim = document.getElementById("space");
          break;
        default:
          key_anim = document.getElementById((e.key).toLowerCase());
          break;
      }

      if (key_anim){
        key_anim.classList.remove("grow");
      }
    }
  });

  //Listener per l'input
  text_target.addEventListener("input", (e) => {
    
    //Prevent hackKeyboard
    /*if(!e.isTrusted) {
      return;
    }*/

    var input_text = text_target.value;

    if (window.speechSynthesis.pending) {
      window.speechSynthesis.cancel();
    }

    //La serie di .replace seguenti serve per convertire i caratteri speciali HTML in normali caratteri utilizzati da JS
    var pre_prompt_text = ((document.getElementById('pre_prompt')).innerHTML).replace(new RegExp('&amp;', 'g'), "&").replace(new RegExp('&lt;', 'g'), "<").replace(new RegExp('&gt;', 'g'), ">").replace(new RegExp('&quot;', 'g'), '"').replace(new RegExp('&#039;', 'g'), "'");
    var prompt_text = ((document.getElementById('prompt')).innerHTML).replace(new RegExp('&amp;', 'g'), "&").replace(new RegExp('&lt;', 'g'), "<").replace(new RegExp('&gt;', 'g'), ">").replace(new RegExp('&quot;', 'g'), '"').replace(new RegExp('&#039;', 'g'), "'");
    var post_prompt_text = ((document.getElementById('post_prompt')).innerHTML).replace(new RegExp('&amp;', 'g'), "&").replace(new RegExp('&lt;', 'g'), "<").replace(new RegExp('&gt;', 'g'), ">").replace(new RegExp('&quot;', 'g'), '"').replace(new RegExp('&#039;', 'g'), "'");
    
    var text_pos = pre_prompt_text.length;
    
    if (input_text[text_pos] != prompt_text) {
      text_target.value = input_text.substr(0, text_pos);
      score -= 15;
      err_count++;
    } else {
      score += 10;
      correct_count++;

      //Riscrittura testo degli span con apposito escape dei caratteri
      (document.getElementById('pre_prompt')).innerHTML = escapeHtml(pre_prompt_text + prompt_text);
      (document.getElementById('prompt')).innerHTML = escapeHtml(post_prompt_text.substr(0, 1));
      (document.getElementById('post_prompt')).innerHTML = escapeHtml(post_prompt_text.substr(1));
    }

    //Se non ci sono più caratteri nello span del carattere attuale allora termina l'esercizio con esito poistivo
    if (
      (document.getElementById('prompt').innerHTML).length == 0 ||
      (document.getElementById('pre_prompt').innerHTML).length == document.getElementById('goal').value) {
      ex_end(true);
    }

    //Chiamata a funzione che gestisce lo scroll in caso di overflow del testo
    checkScroll(text_ex);
  });

};

var time_set = false;
var timer_h = null, timer_m = null, timer_s = null;
var timeoutID = 0;
//Gestione del timer ricevuto dal database
function setTimer(php_timer) {//Tempo ottenuto da HTML con onfocus="setTimer()"
  if (!time_set) {
    time_set = true;
    //Salva il tempo iniziale in una variabile globale
    g_time = php_timer;

    //Assegnazione a variabili globale del timer da "php_timer"
    timer_h = php_timer.substr(0, 2);
    timer_m = php_timer.substr(3, 2);
    timer_s = php_timer.substr(6, 2);
  }  
    
  document.getElementById("timeinput").disabled = true;
  document.getElementById("goal").disabled = true;

  //String escape
  var newText =  document.getElementById("post_prompt").innerHTML.replace(/(\r\n|\n|\r)/gm, "");
  newText = newText.replace(/\s+/g, ' ').trim();  
  document.getElementById("post_prompt").innerHTML = newText;  
}

function ex_end(superato) {
  clearTimeout(timeoutID);
  (document.getElementById("write")).disabled = true;
  var popup_text = document.getElementById("endlevel_text");
  var popup_score = document.getElementById("score");
  
  document.getElementById('endlevel_popup_container').style.display = 'block'; // show
  
  var vel = calcvel();
  
  popup_score.innerHTML = "Punteggio: " + Math.floor(score * vel / 10) + "</br>Velocità: " + vel + " tasti al minuto" + "</br>N° errori: " + err_count + "<br>N° Corretti: " + correct_count;
  if (superato && (score > 0)) {
    popup_text.innerHTML = "Superato";    
  } else {    
    popup_text.innerHTML = "Tempo Scaduto - Non superato";    
  }
}

//Calcola la velocità di battitura
function calcvel() {
  var time_left = timer_h * 3600 + timer_m * 60 + timer_s;
  var time = ((g_time.substr(0, 2)) * 3600 + (g_time.substr(3, 2)) * 60 + (g_time.substr(6, 2))) - time_left;
  return (60 * (err_count + correct_count)) / time;
}

//Aggiorna il timer con chiamata ricorsiva setTimeout
function timerUpdate() {
  var timeout = false;
  if (timer_s == '00') {
    if (timer_m == '00') {
      if (timer_h == '00') { //Tempo scaduto
        timeout = true;
      } else {//Sottrai ore
        timer_h -= 1;
        timer_m = 59;
        timer_s = 59;
      }
    } else { //Sottrai minuti
      timer_m -= 1;
      timer_s = 59;
    }
  } else { //Sottrai secondi
    timer_s -= 1;
  }

  if (!timeout) {
    (document.getElementById("timer")).innerHTML = "Timer: " + timer_h + ":" + timer_m + ":" + timer_s;
    timeoutID = setTimeout(timerUpdate, 1000); //Aggiorna il timer ogni secondo
  } else {
    (document.getElementById("timer")).style.color = "red";
    ex_end(false);
  }
}

//Attivazione assistente audio
function text_to_speech() {
  if (!audio) {
    var audio_act_msg = new SpeechSynthesisUtterance('Assistente audio attivato');
    audio_act_msg.rate = 1.7;
    window.speechSynthesis.speak(audio_act_msg);
    audio = true;
    document.getElementById('audio_button').innerHTML = "&#x1f507;";
  } else {
    audio = false;
    document.getElementById('audio_button').innerHTML = "&#x1f50a;";
  }

}

//Evidenzia sulla tastiera i caratteri utilizzati dall'esercizio
function ex_char(stringa_caratteri) {
  if (stringa_caratteri === "Maiusc") {
    var highlight_key = document.getElementById('left-shift');
    highlight_key.style.background = "rgba(237, 233, 158, 0.3)";
    highlight_key = document.getElementById('right-shift');
    highlight_key.style.background = "rgba(237, 233, 158, 0.3)";
  } else {
    for (var j = 0; j < stringa_caratteri.length; j++) {
      var ch = stringa_caratteri.charAt(j);
      var highlight_key = null;

      /*Non potendo esserci più ID per un unico elemento HTML quando si preme Shift o è attivo
      CapsLock la stringa key ricevuta in ingresso non corrisponde agli ID degli item della tastiera
      quindi va convertiti la stringa ma non c'è una funzione specifica in quanto differisce a seconta del layout*/
      switch (ch) {
        case ">":
          highlight_key = document.getElementById("<");
          break;
        case ";":
          key_anim = document.getElementById(",");
          break;
        case ":":
          highlight_key = document.getElementById(".");
          break;
        case "_":
          highlight_key = document.getElementById("-");
          break;
        case "ç":
          highlight_key = document.getElementById("ò");
          break;
        case "°":
          highlight_key = document.getElementById("à");
          break;
        case "§":
          highlight_key = document.getElementById("ù");
          break;
        case "é":
          highlight_key = document.getElementById("è");
          break;
        case "*":
          highlight_key = document.getElementById("+");
          break;
        case "|":
          highlight_key = document.getElementById("\u005C");
          break;
        case "!":
          highlight_key = document.getElementById("1");
          break;
        case "\u0022":
          highlight_key = document.getElementById("2");
          break;
        case "£":
          highlight_key = document.getElementById("3");
          break;
        case "$":
          highlight_key = document.getElementById("4");
          break;
        case "%":
          highlight_key = document.getElementById("5");
          break;
        case "&":
          highlight_key = document.getElementById("6");
          break;
        case "/":
          highlight_key = document.getElementById("7");
          break;
        case "\(":
          highlight_key = document.getElementById("8");
          break;
        case "\)":
          highlight_key = document.getElementById("9");
          break;
        case "=":
          highlight_key = document.getElementById("0");
          break;
        case "?":
          highlight_key = document.getElementById("\u0027");
          break;
        case "^":
          highlight_key = document.getElementById("ì");
          break;
        case " ":
          highlight_key = document.getElementById("space");
          break;
        default:
          highlight_key = document.getElementById(ch.toLowerCase());
          break;
      }

      highlight_key.style.background = "rgba(237, 233, 158, 0.3)";
    }
  }
}

//Scroll automatico seguendo l'input in caso di overflow del testo
function checkScroll(e_to_scroll) {
  var span = document.getElementById('prompt');

  if ((span.offsetTop + span.scrollHeight) > (e_to_scroll.scrollTop + e_to_scroll.clientHeight)) {
    e_to_scroll.scrollTop += 2 * span.scrollHeight;
  }
  if ((span.offsetTop + span.scrollHeight) < (e_to_scroll.scrollTop + e_to_scroll.clientHeight)) {
    e_to_scroll.scrollTop = span.offsetTop;
  }
}

//Escape di caratteri HTML
function escapeHtml(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, function (m) { return map[m]; });
}
