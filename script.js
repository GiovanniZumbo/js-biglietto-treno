// @ Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.


// PLANNING

/*
Creare una variabile per il costo per chilometro / Make a price/distance var
Chiedere il numero di chilometri da percorrere. / Request travel distance 
Chiedere l'età del passeggero. / Request traveller age
Calcolare il prezzo del biglietto senza sconto. / Calculate full price ticket
Creare una variabile per lo sconto minorenni / Make an under18 discount var
Creare una variabile per lo sconto over 65 / Make an over65 discount var
Calcolare il prezzo finale del biglietto. / Calculate reduced price ticket
Stampare il risultato / Output the result

*/

// # STAGING

// * 0. Creare una variabile per il costo per chilometro / Make a price/distance var
const priceUnit = 0.21;

// # GATHERING DATA

// * 1. Chiedere il numero di chilometri da percorrere. / Request travel distance 

const distance = parseInt(prompt("Inserisci la distanza da percorrere (km)", 12, 5))
console.log('distance', distance);

// * 2. Chiedere l'età del passeggero. / Request traveller age

const age = prompt("Inserisci la tua età", 25);
console.log('age', age);

// # PROCESSING

// * 3. Calcolare il prezzo del biglietto senza sconto. / Calculate full price ticket

const ticketPrice = ((distance * priceUnit).toFixed(2));
console.log('ticketPrice', ticketPrice);

// * 4. Creare una variabile per lo sconto minorenni / Make an under18 discount var 


const underPercDiscount = 20;

// * 5. Creare una variabile per lo sconto over 65 / Make an over65 discount var

const overPercDiscount = 40;

// * 6. Calcolare il prezzo finale del biglietto. / Calculate reduced price ticket

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

// * 7. Stampare il risultato / Output the result

if (age < 18) {
    alert(`Il costo del tuo biglietto è: ${finalUnderPrice}€`);
    console.log('finalUnderPrice', finalUnderPrice);

} else if (age >= 65) {
    alert(`Il costo del tuo biglietto è: ${finalOverPrice}€`);
    console.log('finalOverPrice', finalOverPrice);

} else {
    alert(`Il costo del tuo biglietto è: ${ticketPrice}€`);
    console.log('ticketPrice', ticketPrice)
}