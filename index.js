let birds = ["bird1","bird2","bird3","bird4","bird5","bird6"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let gameStart = true;
let foolCheck = true;

$(document).on("keydown",function(){
    if(gameStart){
        $("body").removeClass("danger").addClass("normal");
        $(".terence").css("display","none");    
     gameStart = false;
    foolCheck = true;
    nextSequence();
    }
})

function nextSequence(){
      if(foolCheck){   
    let randomBird = Math.floor(Math.random()*6);
    let randomChosenBird = birds[randomBird];
    gamePattern.push(randomChosenBird);
    playSound(randomChosenBird);
    switch(randomChosenBird){
       case "bird1":
        $("#"+randomChosenBird).addClass("red");
        setTimeout(function(){
            $("#"+randomChosenBird).removeClass("red");
        },800);
        break;

        case "bird2":
        $("#"+randomChosenBird).addClass("chuck");
        setTimeout(function(){
            $("#"+randomChosenBird).removeClass("chuck");
        },800);
        break;

        case "bird3":
        $("#"+randomChosenBird).addClass("bomb");
        setTimeout(function(){
            $("#"+randomChosenBird).removeClass("bomb");
        },800);
        break;

        case "bird4":
        $("#"+randomChosenBird).addClass("blue");
        setTimeout(function(){
            $("#"+randomChosenBird).removeClass("blue");
        },800);
        break;

        case "bird5":
        $("#"+randomChosenBird).addClass("matilda");
        setTimeout(function(){
            $("#"+randomChosenBird).removeClass("matilda");
        },800);
        break;

        case "bird6":
        $("#"+randomChosenBird).addClass("hal");
        setTimeout(function(){
            $("#"+randomChosenBird).removeClass("hal");
        },800);
        break;

    }
    level++;
    $("h1").text("Level "+level);
    userClickedPattern = [];
}
}
$(".birds").click(function(){
    let clickedBird = $(this).attr("id");
    playSound(clickedBird);
    switch(clickedBird){
        case "bird1":
         $("#"+clickedBird).addClass("red");
         setTimeout(function(){
             $("#"+clickedBird).removeClass("red");
         },800);
         break;
 
         case "bird2":
         $("#"+clickedBird).addClass("chuck");
         setTimeout(function(){
             $("#"+clickedBird).removeClass("chuck");
         },800);
         break;
 
         case "bird3":
         $("#"+clickedBird).addClass("bomb");
         setTimeout(function(){
             $("#"+clickedBird).removeClass("bomb");
         },800);
         break;
 
         case "bird4":
         $("#"+clickedBird).addClass("blue");
         setTimeout(function(){
             $("#"+clickedBird).removeClass("blue");
         },800);
         break;
 
         case "bird5":
         $("#"+clickedBird).addClass("matilda");
         setTimeout(function(){
             $("#"+clickedBird).removeClass("matilda");
         },800);
         break;
 
         case "bird6":
         $("#"+clickedBird).addClass("hal");
         setTimeout(function(){
             $("#"+clickedBird).removeClass("hal");
         },800);
         break;
     }

     userClickedPattern.push(clickedBird);
     checkAnswer(userClickedPattern);
    
});


function playSound(birdVoice){
  let birdSound = new Audio("./sounds/"+birdVoice+".mp3");
  birdSound.play();
}

function checkAnswer(clickedPattern){
     if(clickedPattern[clickedPattern.length-1]===gamePattern[clickedPattern.length-1]){
          if(clickedPattern.length===gamePattern.length){
            setTimeout(nextSequence,1600);
          }
     }else{
        gameOver();
     }
}
function gameOver(){
    $("body").removeClass("normal").addClass("danger");
    $(".terence").css("display","block");
    let terenceSound = new Audio("./sounds/terence.mp3");
    terenceSound.play();
    $("h1").text("Game Over 🐦 Press Any Key To Restart");
    level = 0;
    gameStart = true;
    foolCheck = false;
    userClickedPattern= [];
    gamePattern = [];
}