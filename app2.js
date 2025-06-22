

let gameSeq= [];
let userSeq =[];
let btns = ['green', 'blue', 'red', 'yellow'];
let started = false;
let level =0;
let p = document.querySelector("p");

gamestart();


function gamestart (){document.addEventListener('keypress', function (){
  if(started === false){
    
    started = true;

    levelUp();
  }
})
}

let levelUp = function (){
  userSeq=[];
  level++;
  p.innerText= `Level ${level}`;

let ridx= Math.floor(Math.random()*4);
let randcol = btns[ridx];
let btn = document.querySelector(`.${randcol}`);
btnFlash(btn);

gameSeq.push(randcol);
console.log(gameSeq);
}


 
function btnFlash(btn){
  
  btn.classList.add('flash');
  setTimeout(()=>{
    btn.classList.remove('flash');
  }, 200);
}



let buttons = document.querySelectorAll(".box");

for (el of buttons){
  el.addEventListener("click", btnPress);
}

function btnPress(){
 
let btn = this
btnFlash(btn);
let userCol = this.getAttribute('id');
userSeq.push(userCol);
checkAns(userSeq.length-1);
}



function checkAns(i){

  if(userSeq[i]===gameSeq[i]){
    if(userSeq.length == gameSeq.length){
      
    setTimeout(levelUp,1000);}
  }
  else{
    p.innerHTML= `Game is Over!! Your score is <b>${level}. </b> <br> Press any key to start`;

    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){ document.querySelector("body").style.backgroundColor="white";},150);
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
    setTimeout(gamestart,1000);
  }
}
