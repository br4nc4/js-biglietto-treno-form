"use strict"
/* SELEZIONO GLI INPUT E IL BUTTON, E LI PORTO IN QUESTO FILE TRAMITE QUETSE VARIABILI */
const inputName = document.querySelector("[name='userName']");
const inputDistance = document.querySelector("[name='distanceKm']");
const submitElement = document.getElementById("submitButton");
const outputName = document.getElementById("outputUserName");
const outputPriceTot = document.getElementById("outputPrice");
let optionAge1 = document.getElementById("option1");


/* VARIABILI CHE SERVONO AL CALCOLO DEL PREZZO DEL BIGLIETTO */
const tariffaKm = 0.21;
const sconto1 = 0.2;
const sconto2 = 0.4;


/* LE VARIABILI INIZIALMENTE DEVONO ESSERE VUOTE E SOLO SUCCESSIVAMENTE ASSUMERE IL VAOLRE NEL CALCOLO PER IL PREZZO DEL BIGLIETTO */
let realPrice = ""; 
let realSale = "";





/* ATTRIBUISCO L'EVENTO CHE VERRà GENERATO UNA VOLTA CLICCATO IL BUTTON "GENERA" */
/* L'EVENTO RIGUARDA FAR COMPARIRE IL NOME NELLA PARTE INFERIORE DELL'APP, SEZIONE NOME PASSEGGERO */
submitElement.addEventListener("click", function() {
    outputName.innerHTML = inputName.value;
    /* STABILISCO LA PRIMA CONDIZIONE */
    /* SE VIENE SELEZIONATO MINORENNE DAL MENU CON LE VARIEM OPZIONI ALLORA VIENE APPLICATO LO SCONTO AL PREZZO FINALE */
    if (optionAge1.value = "minorenne"){
        realSale = parseInt(tariffaKm * inputDistance.value * sconto1);
        realPrice = parseInt((tariffaKm * inputDistance.value) - realSale);
        outputPriceTot.innerHTML = realPrice.toFixed(2) + "€";
    }
    
});

