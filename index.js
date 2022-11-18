var crash = new Audio('sounds/crash.mp3');
var kick_bass=new Audio('sounds/kick-bass.mp3');
var snare=new Audio('sounds/snare.mp3');
var tom1=new Audio('sounds/tom-1.mp3');
var tom2=new Audio('sounds/tom-2.mp3');
var tom3=new Audio('sounds/tom-3.mp3');
var tom4=new Audio('sounds/tom-4.mp3');





var numberOfButtons=document.querySelectorAll(".drum").length;
for(var i = 0;i<numberOfButtons;i++){



document.querySelectorAll(".drum")[i].addEventListener("click",function(){
makeSound(this.innerHTML);
buttonAnimation(this.innerHTML,event);

});  //this nous permet de recup l'identité du bouton qui a été activé par le click d'un user
}


for(var j = 0;j<numberOfButtons;j++){



document.addEventListener("keydown",function(event){ //avant on voulait des cliques sur les boutons donc fallait selectionner les boutons avec select query mtn on attends juste que qqn clique sur le clavier

makeSound(event.key);
buttonAnimation(event.key);


});  //this nous permet de recup l'identité du bouton qui a été activé par le click d'un user
}


function makeSound(letter){
  switch(letter){
    case 'w':
      tom1.play();
      break;
    case 'a':
      tom2.play();
      break;
    case 's':
      tom3.play();
      break;
    case 'd':
      tom4.play();
      break;
    case 'j':
      snare.play();
      break;
    case 'k':
      crash.play();
      break;
    case 'l':
      kick_bass.play();
      break;

    default:
      console.log(letter);




  }
}

function buttonAnimation(letter){
  var buttonPressed=document.querySelector("."+letter);
  buttonPressed.classList.add("pressed");
  setTimeout(function(){buttonPressed.classList.remove("pressed");},500);



}
