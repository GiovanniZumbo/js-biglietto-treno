// @ Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.


// PLANNING

/*
Creare una variabile per il costo per chilometro / Make a price/distance var
Creare una variabile per lo sconto minorenni / Make an under18 discount var
Creare una variabile per lo sconto over 65 / Make an over65 discount var
Chiedere il numero di chilometri da percorrere. / Request travel distance 
Chiedere l'età del passeggero. / Request traveller age
Calcolare il prezzo del biglietto senza sconto. / Calculate full price ticket
Calcolare il prezzo finale del biglietto. / Calculate reduced price ticket
Stampare il risultato / Output the result

*/

// @Bonus

resultElement = document.getElementById('message');

// # STAGING

// * 1. Creare una variabile per il costo per chilometro / Make a price/distance var
const priceUnit = 0.21;

// * 2. Creare una variabile per lo sconto minorenni / Make an under18 discount var 
const underPercDiscount = 20;

// * 3. Creare una variabile per lo sconto over 65 / Make an over65 discount var
const overPercDiscount = 40;

// # GATHERING DATA

// * 4. Chiedere il numero di chilometri da percorrere. / Request travel distance 

const distance = parseInt(prompt("Inserisci la distanza da percorrere (km)", 12, 5))
console.log('distance', distance);
resultDistance = document.getElementById('distance')
resultDistance.innerHTML = `Distanza da percorrere: ${distance} km.`;

// * 5. Chiedere l'età del passeggero. / Request traveller age

const age = parseInt(prompt("Inserisci la tua età", 25));
console.log('age', age);
resultDistance = document.getElementById('age')
resultDistance.innerHTML = `Età inserita: ${age} anni.`;

// # PROCESSING

// * 6. Calcolare il prezzo del biglietto senza sconto. / Calculate full price ticket

const ticketPrice = ((distance * priceUnit).toFixed(2));
console.log('ticketPrice', ticketPrice);


// * 7. Calcolare il prezzo finale del biglietto. / Calculate reduced price ticket

// Under

function underPrice(ticketPrice, underPercDiscount) {
    const underDiscount = (ticketPrice * underPercDiscount) / 100;
    return ticketPrice - underDiscount;
}

const finalUnderPrice = underPrice(ticketPrice, underPercDiscount).toFixed(2)

// Over

function overPrice(ticketPrice, overPercDiscount) {
    const overDiscount = (ticketPrice * overPercDiscount) / 100;
    return ticketPrice - overDiscount;
}

const finalOverPrice = overPrice(ticketPrice, overPercDiscount).toFixed(2)

// # OUTPUT 

// * 8. Stampare il risultato / Output the result

let message = '';


if (age < 18) {
    message = `<del>${ticketPrice}€</del> ${finalUnderPrice}€. <br> <b>Hai usufruito del 20% di sconto.</b>`;
    console.log('finalUnderPrice', finalUnderPrice);

} else if (age >= 65) {
    message = `<del>${ticketPrice}€</del> ${finalOverPrice}€. <br> <b>Hai usufruito del 40% di sconto.</b>`;
    console.log('finalOverPrice', finalOverPrice);

} else {
    message = ticketPrice;
}

resultElement.innerHTML = `Il costo del tuo biglietto è: ${message} `;