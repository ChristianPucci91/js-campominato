// >>>>>>>>>> DESCRIZIONE ESERCIZIO <<<<<<<<<<<

// STEP 1 Il computer deve generare 16 numeri casuali tra 1 e 100.
// STEP 2 I numeri non possono essere duplicati
// STEP 3 In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// STEP 4 L’utente non può inserire più volte lo stesso numero.
// STEP 5 Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// STEP 6 La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//  STEP 7 Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// >>>>>>>>>> STEP PERSONALI <<<<<<<<<<<<<<<
// var livello sarà la variabile che utilizzeremo per l'esercizio bonus ovvero il range di numeri con cui si può giocare, per ora la settiamo a 16.
var livello = 10;
var mine = 5;
// creo variabile array per i numeri generati ( mine del gioco).
var numeriGenerati = [];
// richiamo la funzione con gli argomenti 1 e livello
var generaMine = generaNumeri(1,livello)

// STEP 1 devo generare 16 numeri casuali tra 1 e 100, potrei usare un ciclo con un math random e acquisire tutti e 16 i numeri dentro un array.

// Creo una funzione per generare 16 numeri random da 1 a 100. dico al ciclo for di incrementare i fino a fare 16 cicli, e di stamparmi un numero mettendo una condizione while specificando con include(), che finchè non stampa un numero diverso dagli elementi dell'array non può uscire dalla condizione
function generaNumeri(min,max) {

  for (var i = 0; i < mine; i++) {
    numeriGeneratiElemento = Math.floor(Math.random()* max +min);
    // console.log(numeriGeneratiElemento);
    while (numeriGenerati.includes(numeriGeneratiElemento)) {
      numeriGeneratiElemento = Math.floor(Math.random()* max +min);
    }
    numeriGenerati.push(numeriGeneratiElemento);
    // numeriGeneratiElemento += numeriGeneratiElemento + numeriGeneratiElemento;
    // console.log("numeri dell'array",numeriGeneratiElemento);
  }

}
console.log("l'array è composto da: ",numeriGenerati);

// STEP 3 Chiedo con un prompt o input all'utente di inserire un numero compreso tra 1 e 100 per 84 volte, quindi ci sarà un ciclo con contatore a 84.
var numeriInseriti = [];
var partita = false;

for (var x = 0; x < (livello-mine); x++) {
  var inputUtente = parseInt(prompt("Inserisci un numero da 1 a " + livello));
  while (numeriGenerati.includes(inputUtente)){
    var inputUtente = parseInt(prompt("Numero già inserito, riprova"));
  }
  numeriInseriti.push(inputUtente);
  console.log("i numeri inseriti ",numeriInseriti);
}


// STEP 4 il valore che andrà ad inserire l'utente andrà pushato all'interno di un array. Ogni volta che inserirà un valore nuovo, dovrò controllare con una condizione se il valore inserito sarà uguale agli elementi dell array.

// STEP 5 Se il valore di quello che inserisce l'utente è uguale agli elementi dell'array dei numeri generati la partita finirà. Altrimenti l'utente dovrà continuare a inserire i numeri.

// STEP 6 Se il valore di quello che inserisce l'utente è uguale agli elementi dell'array dei numeri generati la partita finirà o se riuscirà ad inserire tutti i numeri NON presenti nell'array dei numeri generati, quindi vincerà.

// STEP 7 Nel caso si verifica lo STEP 6 si stamperà il numero degli elementi (length) dell'array dei numeri inseriti dall'utente e comunicare se ha vinto o perso.
