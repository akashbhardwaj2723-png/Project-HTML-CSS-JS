let userScore=0;
let compScore=0;

let userScoreShow=document.querySelector("#user-score")
let compScoreShow=document.querySelector("#comp-score")

let btn=document.querySelector("button");

let choice=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

 const genCompChoice= ()=>{
  const option=["rock","papper","scissor"]
  const randmIdx=Math.floor(Math.random()*3);
  return option[randmIdx];

 }
 const draw=()=>{
  msg.innerText="Game is Draw try again.."
  msg.style.backgroundColor="skyblue"
 }
 const showWinner=(userWin,compChoice,userChoice)=>{
   if(userWin===true){
    userScore++;
    userScoreShow.innerText=userScore;
    
    
    msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="Green"
    
   }else{
  
    
    compScore++;
    compScoreShow.innerText=compScore;
    msg.innerText=`You Loss ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red"
   }
 }

const playGame=(userChoice)=>{
 
  let compChoice=genCompChoice();
   
    if(userChoice === compChoice){
      draw();
    }else{
      let userWin=true;
      if(userChoice==="rock"){
        userWin= compChoice==="papper"?false:true;
      }
      else if(compChoice==="papper"){
        userWin= compChoice==="scissor"?false:true;
      }else{
        //rock ,papper
        userWin = compChoice==="rock"?false:true;
      }
      showWinner(userWin,userChoice,compChoice);
    }
}

choice.forEach((choice)=>{
   
  choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id")
      playGame(userChoice)
    
  
  })
})


btn.addEventListener("click",()=>{
  console.log("Clicked Btn");
  
    userScore=0;
    compScore=0;
   userScoreShow.innerText=userScore;
    compScoreShow.innerText=compScore;
    msg.innerText="play your move ";
    msg.style.backgroundColor="aqua"

})