let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-contaner");
let msg = document.querySelector("#msg");


let turn0 = true; //player O
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetgame = () => {
turn0=true;
enabledbtns();
msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box Was Clicked");
    if (turn0) {
      //player0
      box.innerText = "0";
      turn0 = false;
    } else {
      //playerX
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  });
});
const disabledbtns = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledbtns = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratutions , winner is ${winner}` ;
    msgContainer.classList.remove("hide");
    disabledbtns();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val=== pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
                
            }
        }
  }
};

newGamebtn.addEventListener("click" ,resetgame);
resetbtn.addEventListener("click" ,resetgame);


