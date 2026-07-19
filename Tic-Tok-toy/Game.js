let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#Re-set");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newbtn=document.querySelector("#new-btn")

let turn0=true;

const Winpattern=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];
const resetgame=()=>{
  turn0=true;
  enableBtn();
  msgcontainer.classList.add("hide")
}

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
  console.log("Yes BOx was clicked");
    if(turn0===true){
      box.innerText="o"
      turn0=false;
    }else{
      box.innerText="x";
      
      turn0=true;
    }

    if(turn0===true){
  box.style.color="black";
}
else{
  box.style.color="rad";
}


    box.disabled=true;
    checkbox();
  })
})
const disabledBtn =()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}

const enableBtn =()=>{
  for(let box of boxes){
    box.disabled=false;
     box.innerText="";
  }
}

const showWinner=(winner)=>{
msg.innerText=`Contgatulation ,Winnner is ${winner}`
msgcontainer.classList.remove("hide")
  disabledBtn();
}

const checkbox = ()=>{
  for(let pattern of Winpattern){
        let pas1val=  boxes[pattern[0]].innerText;
        let pas2val=  boxes[pattern[1]].innerText;
        let pas3val=  boxes[pattern[2]].innerText;
        if(pas1val !="" && pas2val !="" && pas3val !=""){
          if(pas1val===pas2val && pas2val===pas3val){
            console.log("You winner",pas1val);
            showWinner(pas1val);
          }
        }
      }

};
newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);


// if(turn0===true){
//   box.style.color="black";
// }
// else{
//   box.style.color="yellow";
// }