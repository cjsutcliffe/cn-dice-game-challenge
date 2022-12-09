// button element is declared here
const button = document.getElementById("button");
const restartButton = document.getElementById("restart");
let score = 0

// Click the butoon & get a random number each time
button.addEventListener('click', () => {
    // console.log("hello");
    // Number Randomiser
    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    };

    let num = getRandomInt(1, 7);

    // Takes random number and outputs image
    let img = document.getElementById("die");
    let status = document.getElementById("status");
    let scoreCount = document.getElementById("scoreCount");
    status.textContent = "Keep playing!";


    switch (num) {
        case 1:
            console.log("1");
            console.log("lose");
            console.log(`The final score is ${score}`);
            scoreCount.textContent = score;
            score = 0;
            img.src = "./images/Dice1.png"
            status.textContent = "You lose!";
            button.textContent = "Retry?";
            break;
        case 2:
            console.log("2");
            score += 2;
            console.log(`The score is ${score}`);
            scoreCount.textContent = score;
            img.src = "./images/Dice2.png"
            button.textContent = "Roll";
            break;
        case 3:
            console.log("3");
            score += 3;
            console.log(`The score is ${score}`);
            scoreCount.textContent = score;
            img.src = "./images/Dice3.png";
            button.textContent = "Roll";
            break;
        case 4:
            console.log("4");
            score += 4;
            console.log(`The score is ${score}`);
            scoreCount.textContent = score;
            img.src = "./images/Dice4.png";
            button.textContent = "Roll";
            break;
        case 5:
            console.log("5");
            score += 5;
            console.log(`The score is ${score}`);
            scoreCount.textContent = score;
            img.src = "./images/Dice5.png";
            button.textContent = "Roll";
            break;
        case 6:
            console.log("6");
            score += 6;
            console.log(`The score is ${score}`);
            scoreCount.textContent = score;
            img.src = "./images/Dice6.png";
            button.textContent = "Roll";
            break;
    };

    if (score >= 20) {
        status.textContent = "You win!";
        console.log("Winner!")
        button.textContent = "Retry..."
        score = 0;
    } else if (num == 1 ) {
        button.textContent = "Retry...";
    } else {
        button.textContent = "Roll";
    };

});


restartButton.addEventListener('click', () => {
    let status = document.getElementById("status");
    let scoreCount = document.getElementById("scoreCount");
    score = 0;
    scoreCount.textContent = score;

    switch (status) {
        case status.textContent == "Want to play?":
            break;
        case status.textContent == "You Win!":
            status.textContent = "Want to play?";
            break;
        case status.textContent == "You Lose!":
            status.textContent = "Want to play?";
            break;
        case status.textContent == "Keep playing!":
            status.textContent = "Want to play?";
            break;
    };
});