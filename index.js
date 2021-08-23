 // document.querySelector("button").addEventListener("click",function(){alert("jksdfhsdkfh")});
// document.querySelectorAll("button")[1].addEventListener("click",function(){alert("1")});
// document.querySelectorAll("button")[2].addEventListener("click",function(){alert("2")});
// document.querySelectorAll("button")[3].addEventListener("click",function(){alert("3")});
// document.querySelectorAll("button")[4].addEventListener("click",function(){alert("4")});
// document.querySelectorAll("button")[5].addEventListener("click",function(){alert("5")});
// document.querySelectorAll("button")[6].addEventListener("click",function(){alert("6")});
//
//
// }

var noOfButtons=document.querySelectorAll(".drum").length;

for (var i=0 ; i<noOfButtons ; i++ ){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){ //eventlistener added to all buttons whwn clicked.
    //this.style.color="white"; // when tapped with the help of this we change color to white.

    // console.log(this);
    var buttoninnerhtml = this.innerHTML;
    makesound(buttoninnerhtml);
    buttonAnimation(buttoninnerhtml);
    }
  );
}
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();


document.addEventListener("keypress", function(event){  //adding event listener to the keypress
  makesound(event.key); //this tells which keyword was pressed.
  buttonAnimation(event.key);
}
);

function makesound(key){
  switch (key) {
    case "w":var tom1 = new Audio('sounds/tom-1.mp3');
             tom1.play();
       break;
   case "a" :var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();

   break;

   case "s" :var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();

   break;
   case "d" :var tom4= new Audio('sounds/tom-4.mp3');
    tom4.play();

   break;
   case "j" :var crash = new Audio('sounds/crash.mp3');
    crash.play();

   break;
   case "k" :var kick= new Audio('sounds/kick-bass.mp3');
    kick.play();

   break;
   case "l" :var snare= new Audio('sounds/snare.mp3');
    snare.play();

   break;


    default:console.log(this.innerHTML);

  }
}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." +currentKey);

   activeButton.classList.add("pressed");

  setTimeout( function(){
    activeButton.classList.remove("pressed");
  },100)
}
