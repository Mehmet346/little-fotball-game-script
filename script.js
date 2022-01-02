
var xp = 0;
var timeleft = 3;
var downloadTimer = setInterval(function Timer(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    alert("sureniz sona erdi puaniniz : "+xp);
  } else {
    document.getElementById("board-time").innerHTML = "Kalan Sure : " + timeleft;
  }
  timeleft -= 1;
}, 1000);

  function cancel() {
    clearTimeout(timeleft);
      xp++;
      document.getElementById("board-time").innerHTML = "Kalan Sure : " + timeleft;
      timeleft = 3;
      document.getElementById("board-xp").innerHTML = "Puaniniz : " + xp;
    Timer();
  }

