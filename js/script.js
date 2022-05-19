"use strict"
/* SELEZIONO GLI INPUT E IL BUTTON, E LI PORTO IN QUESTO FILE TRAMITE QUETSE VARIABILI */
const inputName = document.querySelector("[name='userName']");
const inputDistance = document.querySelector("[name='distanceKm']");
const submitElement = document.getElementById("submitButton");
const outputName = document.getElementById("outputUserName");
const outputPriceTot = document.getElementById("outputPrice");

/* VARIABILE CHE SERVE AL CALCOLO DEL PREZZO DEL BIGLIETTO */
const tariffaKm = 0.21;
let realPrice = "";

/* ATTRIBUISCO L'EVENTO CHE VERRà GENERATO UNA VOLTA CLICCATO IL BUTTON "GENERA" */
/* L'EVENTO RIGUARDA FAR COMPARIRE IL NOME NELLA PARTE INFERIORE DELL'APP, SEZIONE NOME PASSEGGERO */
submitElement.addEventListener("click", function() {
    outputName.innerHTML = inputName.value;
    realPrice = (tariffaKm * inputDistance.value);
    outputPriceTot.innerHTML = realPrice.toFixed(2);
});

