
//premiere piochee du joueur
//declaration de ma variable pour la pioche
var playerMain = Math.floor(Math.random() * 11 +1);
var mainCPU = Math.floor(Math.random() * 11 +1);
//declaration de ma fonction
function serv() {

//affichage du resultat dans l'html
document.getElementById("userMain").innerHTML = playerMain;
document.getElementById("cpuRes").innerHTML = mainCPU;

}

var cpuDeckInter = Math.floor(Math.random() * 11 +1);
var cpuDeck =cpuDeckInter + mainCPU;
var playerDeckInter = Math.floor(Math.random() * 11 +1);
var playerDeck = playerDeckInter + playerMain;

function pioche() {

document.getElementById("userMain").innerHTML = playerDeck;
document.getElementById("cpuRes").innerHTML = cpuDeck;
if (cpuDeck >= playerDeck){
  document.getElementById("win").innerHTML= "vous avez perdu";
} else if (cpuDeck < playerDeck) {
  document.getElementById("win").innerHTML= "vous avez gagner";
}


}
