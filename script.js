// Inizializzazione variabili
const introduction = document.getElementById("introduction");
const startButton = document.getElementById("start");
const confirmButton = document.getElementById("confirm");
const playAgain = document.getElementById("play-again");
const userNumbersSection = document.getElementById("user-numbers");
let numbers;

// Avvio del gioco
startButton.addEventListener("click", function () {
    numbers = []; // Arrai vuoto contenente i numeri da ricordare
    // Generazione 5 numeri casuali
    while (numbers.length < 5) {
        let number = randomNumber(1, 100);
        if (!numbers.includes(number)) {
            numbers.push(number);
        }
    }
    print("numbers", numbers); // Stampa dei numeri generati in pagina
    introduction.classList.add("d-none"); // Scomparsa dell'introduzione della pagina
    // Tempo per ricordare i numeri (20s) e countdown prima dell'inserimento dei numeri (30s)
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
    const numbersFound = []; // Creazione array che conterrà i numeri che verranno trovati
    const userNumbers = getNumbersByClass("user-number", 5); // Estrapolazione dei numeri inseriti
    // Verifica della presenza dei numeri inseriti tra quelli generati
    for (var i = 0; i < userNumbers.length; i++) {
        if (numbers.includes(userNumbers[i])) {
            numbersFound.push(userNumbers[i]);
        }
    }
    userNumbersSection.classList.add("d-none"); // Scomparsa della sezione d'input
    setNumbersByClass("user-number", "", 5); // Pulizia sezione d'input
    print("how-many-numbers", "Hai indovinato " + numbersFound.length + " numeri"); // Stampa quanti numeri sono stati indovinati
    print("numbers-found", numbersFound); // Stampa quali numeri sono stati indovinati
    playAgain.classList.remove("d-none"); // Scomparsa bottone "Gioca ancora"
})
playAgain.addEventListener("click", function () {
    // Pulizia risultato
    print("how-many-numbers", "");
    print("numbers-found", "");
    playAgain.classList.add("d-none");
    // Riapparizione dell'introduzione
    introduction.classList.remove("d-none");
})

// Funzione per generare un numero tra un minimo e un massimo
function randomNumber(min, max) {
    return Math.floor(Math.random() * max - min + min) + min;
}
// Funzione per la stampa in HTML
function print(id, result) {
    const element = document.getElementById(id);
    if (Array.isArray(result)) {
        element.innerHTML = "<ul><li>" + result.join("</li><li>") + "</li></ul>";
    } else {
        element.innerHTML = result;
    }
}
// Funzione per prendere i valori da input tramite classe
function getNumbersByClass(target, num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(parseInt(document.getElementsByClassName(target)[i].value));
    }
    return arr;
}
// Funzione per impostare i valori tramite classe
function setNumbersByClass(target, content, num) {
    for (let i = 0; i < num; i++) {
        document.getElementsByClassName(target)[i].value = content;
    }
}