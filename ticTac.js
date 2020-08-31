

var x = document.querySelectorAll("td")
var restart = document.querySelector(".restart")

function changeMarker(){
  if (this.textContent === ""){
  this.textContent = "X"
}

  else if (this.textContent === "X") {
    this.textContent = "0"
}
  else{
    this.textContent = ""
  }
}

for(var i = 0; i < x.length; i++){
  x[i].addEventListener('click',changeMarker)

}

function restart_game(){
  for (var i = 0; i < x.length; i++){
  x[i].textContent = ''
  }
}

restart.addEventListener('click',restart_game)
