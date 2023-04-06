console.log('Nuovo commento'); // STATEMENT
console.log('Siamo pronti per partire');

/** 
 *  OPERATORI:
 *      - MATEMATICI: +, -, /, *, **, %
 *      - CONFRONTO: <, >, <=, >=, ==, ===, !=, !==
 *      - LOGICI: &&, ||
 */

// Math:
// - Math.ceil()
// - Math.floor()
// - Math.round()

let temp1 = 20;
let temp2 = -10;
let temp3 = 3;

let maxTemp = Math.max(temp1, temp2, temp3);
let minTemp = Math.min(temp1, temp2, temp3);  

console.log(`La temperatura massima registrata oggi e' di: ${maxTemp}, e quella minima e' stata di: ${minTemp}`);

console.log("La temperatura massima registrata oggi e' di: " + maxTemp + ", e quella minima e' stata di: " + minTemp);

// Math.random(): permette di generare un numero casuale tra 0 e 1

console.log(Math.random());

// Impostare un nuovo range di valori
console.log( Math.floor(Math.random() * (10 - 0) + 0) );

console.log( 1 < 2 < 3 ); // 1 < 2 = 1 < 3 = true

console.log( 3 > 2 > 1 ); // 3 > 2 = 1 > 1 = false


/**
 *  CONDIZIONI
 */
let age = 'ciao';
if(age > 17) {
    console.log('Sei maggiorenne');
} else if(age <= 17) {
    console.log('Sei minorenne');
} else {
    console.log('Hai inserito un valore NON corretto');
}

// OPERTATORE TERNARIO
// (age > 17) ? console.log('Sei maggiorenne') : console.log('Sei minorenne'); 

let patente = false;
let agePerson = '17';

if(agePerson > 17 && patente == true) {
    console.log('Puoi guidare');
} else if (agePerson > 17 && patente == false) {
    console.log('Non puoi guidare e ti facciamo la multa');
} else if(agePerson < 18 && typeof agePerson == 'number') {
    console.log('Sei minorenne');
} else {
    console.log('Sei in arresto e ti ritiriamo la patente');
}

// Scrivere un programma che permetta di convertire un voto numerico con testo.
// se il voto e' inferiore a 18 --> 'Insufficiente'
// se il voto e' compreso tra 18 e 20 --> 'Sufficiente'
// se il voto e' compreso tra 21 e 25 --> 'Buono'
// se il voto e' compreso tra 26 e 29 --> 'Ottimo'
// se il voto e' 30 --> 'Eccelente'

// let vote = prompt('Che voto al tema Italiano?');

// if(vote < 18) {
//     alert('Insufficiente');
// } else if(vote >= 18 && vote <= 20) {
//     alert('Sufficiente');
// } else if (vote >= 21 && vote <= 25) {
//     alert('Buono');
// }

// Switch
let color = 'green';

switch (color) {
    case 'red':
    case 'yellow':
    case 'blue': 
        console.log(`Il colore stai cercando e' disponibile`);
        break;
    default:
        console.log(`Il colore che stai cercando non e' disponibile`);
        break;
}



// switch (true) {
//     case vote < 18:
//         console.log('Insufficiente');
//         break;

//     default:
//         break;
// }

let beer = prompt('Seleziona una birra');

switch (beer.toLowerCase()) {
    case 'heineken':
        console.log('Bevi responsabilmente, dato che hai scelto questa birra');
        break;
    case 'jchnusa':
        console.log('Hai scelto una birra NON filtrata');
        break;
    case 'messina':
        console.log('Hai scelto una birra con i cristalli di sali');
        break;
    case 'bjourne':
        console.log('Ti vuoi divertire stasera?');
        break;
    case 'desperados':
        console.log('Vamos a bailar!');
        break;
    case 'peroni':
        console.log('Ottimo scelta');
        break;
    default:
        console.log('Seleziona una nuova birra');
        break;
}

/**
 *  CICLI:
 *  for
 *  while
 * 
 */
// for(let i = 1; i <= 100; i++) {
//     // console.log(i);
//     // Voglio stampare solo i numeri pari
//     if(i % 2 == 0) {
//         console.log(i);
//     }
// }

// while
let number = 0;

// while(number <= 3) {
//     console.log(number);

//     number++;
// }

// Dato un numero iniziale, se il numero e' pari dividerlo per 2, se dispari moltiplicarlo per 3 e sommare 1, finche' il numero non diventa 1.
let randomNumber = 73;

while (randomNumber !== 1) {
    if(randomNumber % 2 == 0) {
        randomNumber = randomNumber / 2;
    } else {
        randomNumber = (randomNumber * 3) + 1
    }
    console.log(randomNumber);
}

/**
 *  Creare un programma che simuli il gioco di Super Mario Bros.
 * 
 */
let startGame = prompt(`Sei pronto? \n (1) Inizia partita \n (2) Esci da gioco`);

let counter = 0;

while (startGame != '1' && startGame != '2' && counter < 3) {
   startGame = prompt(`Sei pronto? \n (1) Inizia partita \n (2) Esci da gioco`);
   console.log(counter); 
   counter++;
}

// INIZIO PARTITA
if (startGame == 1) {
    alert(`Partita iniziata e buon divertimento!`);

    let enemy = prompt(`Attento c'e' un nemico! Premi: \n (1) Salta e corri \n (2) Si abbassa \n (3) Salta sopra al nemico e lo elimina`);

    switch (enemy) {
        case '1':
            alert(`C'e' mancato poco! sei riuscito a schivare il tuo primo nemico`);
            break;
        case '2':
            alert(`Hai perso due punti vita`);
            break;
        case '3':
            alert(`Wow! Bravissimo! Continua cosi'`);
            break;
        default:
            alert(`Peccato sei stato troppo lento... Game Over!`);
            break;
    }
} else { // FINE PARTITA
    alert(`Ci rivedremo presto!`);
}
