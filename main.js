new Vue({
    el: '#body',

    data: {
      counter: 0
    }

  });

document.getElementById("hand").addEventListener("transitionend", function(){
    if (document.getElementById("useless").checked == true) {
        document.getElementById("useless").checked = false;
    }
});