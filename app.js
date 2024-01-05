//declaring glabal variables

let count = 0;
let flag = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn");
console.log(resetBtn);
console.log(boxes);
let countb=0;


//adding event listeners !
enable();

//checking conditions of wins!
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//function to add event Listeners

function enable()
{
    for (let i = 0; i < 9; i++) {

        let str = ".box" + i; console.log(str);
        let box = document.querySelector(str);
    
    
        box.addEventListener("click", ()=> 
        {
            if (count % 2 == 0 && flag[i] != 1) {
                box.innerHTML = "<h1 style='color:black; font-family:sans-serif'>X</h1>";
                count++;
                flag[i] = 1
                countb++;
            }
            else if (count % 2 == 1 && flag[i] != 1) {
                box.innerHTML = "<h1 style='color:white; font-family:sans-serif'>O</h1>";
                count--;
                flag[i] = 1;
                countb++;
            }
            
            console.log(countb);
            if(countb==9)
            {
                document.querySelector(".msg").innerHTML = "Game Tied!";
                document.querySelector(".msg").classList.remove("hide");
            }
            checkWinner();
        });
        
    }
}
//check winner function

function checkWinner() {
    for (pattern of winPatterns) {
        let pos1 = document.querySelector(".box" + pattern[0]).innerText;
        let pos2 = document.querySelector(".box" + pattern[1]).innerText;
        let pos3 = document.querySelector(".box" + pattern[2]).innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                let winner;
                if (count == 0)
                {
                    winner = 'O';
                }
                else
                {
                    winner='X';
                }
                document.querySelector(".msg").innerHTML = "Player " + winner+" wins &#129395";
                document.querySelector(".msg").classList.remove("hide");
                disable();
            }
        }
    }
}

//disabling boxes once winner is announced

function disable()
{
    for(let i=0;i<9;i++)
    {
        flag[i]=1;
    }
}

//setting up reset-btn
resetBtn.addEventListener("click",()=>
{
    count=0;
    countb=0;
    flag = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    document.querySelector(".msg").classList.add("hide");
    for(box of boxes)
    {
        box.innerHTML="";
    }
})

