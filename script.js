var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var rButton = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var s1 = document.querySelector("#s1")
var s2 = document.querySelector("#s2")
var numInput = document.querySelector("input");
var play = document.querySelector("#playTO")
var gameOver = false;
var winningScore = 0;

p1Button.addEventListener("click", function(){
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            gameOver = true;
            s1.classList.add("winner")
        }
        s1.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            gameOver = true;
            s2.classList.add("winner")
        }
        s2.textContent = p2Score;
    }
});

rButton.addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0;
    s1.textContent = 0;
    s2.textContent = 0;
    s1.classList.remove("winner")
    s2.classList.remove("winner")
    gameOver = false;
    numInput.value = 0;
    winningScore = 0;
    play.textContent = 0;
})

numInput.addEventListener("change", function(){
    play.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    s1.textContent = 0;
    s2.textContent = 0;
    s1.classList.remove("winner")
    s2.classList.remove("winner")
    gameOver = false; 
}