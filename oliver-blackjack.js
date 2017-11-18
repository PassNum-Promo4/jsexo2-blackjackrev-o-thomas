function blackjack() {
  var cpuMain = Math.floor(Math.random() * 11);
var playerMain = document.getElementById("nb").value;
var count = 0;
count++

document.getElementById("stats").innerHTML = count ;




 if (cpuMain < playerMain){
  document.getElementById("result").innerHTML = "vous avez gagner";
  document.getElementById("win").innerHTML = "player";

} else if (cpuMain >= playerMain) {
  document.getElementById("result").innerHTML = "vous avez perdu";
  document.getElementById("win").innerHTML = "cpu";
}
document.getElementById("userMain").innerHTML = playerMain ;
document.getElementById("cpuRes").innerHTML = cpuMain ;


}
