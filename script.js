const introduction = document.getElementById("introduction");
const startButton = document.getElementById("start");
const confirmButton = document.getElementById("confirm");
const playAgain = document.getElementById("play-again");
const userNumbersSection = document.getElementById("user-numbers");
let numbers = [];

startButton.addEventListener("click", function () {
    numbers = [];
    while (numbers.length < 5) {
        var number = randomNumber(1, 100);
        if (!numbers.includes(number)) {
            numbers.push(number);
        }
    }
    print("numbers", numbers);
    introduction.classList.add("d-none");
    setTimeout(function () {
        print("numbers", "");
        let i = 30;
        print("countdown", i);
        const countdown = setInterval(function () {
            if (i == 1) {
                clearInterval(countdown);
                print("countdown", "");
            } else {
                print("countdown", --i);
            }
        }, 1000);
        setTimeout(function () {
            userNumbersSection.classList.remove("d-none");
        }, 30000)
    }, 20000)
})
confirmButton.addEventListener("click", function () {
    const numbersFound = [];
    const userNumbers = getNumbersByClass("user-number", 5);
    for (var i = 0; i < userNumbers.length; i++) {
        if (numbers.includes(userNumbers[i])) {
            numbersFound.push(userNumbers[i]);
        }
    }
    userNumbersSection.classList.add("d-none");
    print("how-many-numbers", "Hai indovinato " + numbersFound.length + " numeri");
    print("numbers-found", numbersFound);
    playAgain.classList.remove("d-none");

})
playAgain.addEventListener("click", function () {
    print("how-many-numbers", "");
    print("numbers-found", "");
    playAgain.classList.add("d-none");
    introduction.classList.remove("d-none");
})

function randomNumber(min, max) {
    return Math.floor(Math.random() * max - min + min) + min;
}
function print(id, result) {
    const element = document.getElementById(id);
    if (Array.isArray(result)) {
        element.innerHTML = "<ul><li>" + result.join("</li><li>") + "</li></ul>";
    } else {
        element.innerHTML = result;
    }
}
function getNumbersByClass(target, num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(parseInt(document.getElementsByClassName(target)[i].value));
    }
    return arr;
}