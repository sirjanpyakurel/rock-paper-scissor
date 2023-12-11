let userSide = document.querySelector(".left");
let userRock = document.querySelector(".Urock");
let userPaper = document.querySelector(".Upaper");
let userScissor = document.querySelector(".Uscissor");
let hideShow = document.querySelectorAll(".result");
let leftResult = document.querySelector(".leftresult");
let rightResult = document.querySelector(".rightresult");
let winner = document.querySelector(".winner");
let loser = document.querySelector(".loser");
let tie = document.querySelector(".tie");
let reset = document.querySelector(".reset");


let rock = 1;
let paper = 2;
let scissor = 3;

function rockClick(){
    leftResult.innerText = "Rock";
}
userRock.addEventListener('click',rockClick);

function paperClick(){
    leftResult.innerText = "Paper";
}
userPaper.addEventListener('click',paperClick);

function scissorClick(){
    leftResult.innerText = "Scissor";
}
userScissor.addEventListener('click',scissorClick);


// userPaper.addEventListener('click',function(){
//     leftResult.innerText = "Paper";
// });
// userScissor.addEventListener('click',function(){
//     leftResult.innerText = "Scissor";
// });

let num =  Math.ceil((Math.random()) * 3);

function myFunction(){
if (num === 1) {
    rightResult.innerText = "Rock";
}

else if(num === 2) {
    rightResult.innerText = "Paper";
}

else {
    rightResult.innerText = "Scissor";
}

checkWinner();
}

var timer = setInterval(myFunction,2000);

setTimeout(function() {
    clearInterval(timer);
    disableBtn();
},10000);

function checkWinner() {
    let userChoice = leftResult.innerText;
    let computerChoice = rightResult.innerText;

    if (
        (userChoice === "Rock" && computerChoice === "Scissor") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissor" && computerChoice === "Paper")
    ){
        winner.classList.add("show");
    }

    else if (
        (userChoice === "Rock" && computerChoice === "Paper") ||
        (userChoice === "Paper" && computerChoice === "Scissor") ||
        (userChoice === "Scissor" && computerChoice === "Rock") )
        {
            loser.classList.add("show");
           // winner.classList.add("loser");
        }

        else if (userChoice === "" && (computerChoice === "Paper" || computerChoice === "Rock" || computerChoice === "Scissor"))
        {
            loser.classList.add("show");
        }
        else {
            tie.classList.add("show");
        }

        reset.classList.add("show");

disableBtn();
    
}


reset.addEventListener('click', function() {
    location.reload();
})


function disableBtn() {
    
    userRock.removeEventListener('click', rockClick);
    userPaper.removeEventListener('click', paperClick);
    userScissor.removeEventListener('click', scissorClick);
}

