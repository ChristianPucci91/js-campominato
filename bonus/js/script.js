// >>>>>>>>>> DESCRIZIONE ESERCIZIO <<<<<<<<<<<

// STEP 1 Il computer deve generare 16 numeri casuali tra 1 e 100.
// STEP 2 I numeri non possono essere duplicati
// STEP 3 In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// STEP 4 L’utente non può inserire più volte lo stesso numero.
// STEP 5 Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// STEP 6 La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//  STEP 7 Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// >>>>>>>>>> INIZIO ESERCIZIO <<<<<<<<<<<<<<<

// var livello sarà la variabile che utilizzeremo per l'esercizio bonus ovvero il range di numeri con cui si può giocare, per ora la settiamo a 16.
var livello = 0;
var mine = 16;
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<INIZIO BONUS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><
livelloText = document.getElementById('livello');

// Chiedo all'utente che tipo di difficoltà vuole affrontare.
while(livello == 0) {
  livelloDomanda = parseInt(prompt("Scegli la difficoltà: 1 = Facile 2 = Medio 3 = Difficile"));
  while ((livelloDomanda < 1) || (isNaN(livelloDomanda)) || (livelloDomanda > 3)) {
     livelloDomanda = parseInt(prompt("Per favore, inserisci un numero da 1 a 3"));
  }
  if (livelloDomanda == 1) {
    livello = 100;
    livelloText.innerHTML = "Hai scelto il livello " + livelloDomanda + ", giocherai con " + livello + " numeri."
  }else if (livelloDomanda == 2) {
    livello = 80;
    livelloText.innerHTML = "Hai scelto il livello " + livelloDomanda + ", giocherai con " + livello + " numeri."
  }else {
    livello = 50;
    livelloText.innerHTML = "Hai scelto il livello " + livelloDomanda + ", giocherai con " + livello + " numeri."
  }

}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<FINE BONUS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><

var numeriGenerati = [];// creo variabile array per i numeri generati ( mine del gioco).
numeriGenerati = generaNumeri(1,livello);// richiamo la funzione con gli argomenti 1 e livello
console.log(numeriGenerati); //lascio console log per verificare la funzionalità del programma

var numeriInseriti = [];// creo array numeri inseriti dall'utente.
var punteggio = 0; // creo variabile per stabilire il punteggio dell'utente
var numeroTrovato = false;// creo variabile esterna che mi servirà per i cicli

// creo ciclo con condizioni: se la variabile esterna è false e se il punteggio dell'utente è diverso dai numeri che può giocare allora:
while(numeroTrovato == false && punteggio != (livello-mine)) {
  var inputUser = parseInt(prompt("inserisci un numero da 1 a " + livello))

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<INIZO BONUS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><

  // creo condizioni e regole per l'inserimento dati utente
  while ((inputUser == 0) || (inputUser < 1) || (inputUser > livello) || (isNaN(inputUser)) || (numeriInseriti.includes(inputUser))){
    inputUser = parseInt(prompt("Per favore, inserisci un numero secondo le regole"))
  }
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<FINE BONUS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><

  // creo condizioni e regole per l'inserimento dati utente
  while ((inputUser == 0) || (inputUser < 1) || (inputUser > livello) || (isNaN(inputUser)) || (numeriInseriti.includes(inputUser))){
    inputUser = parseInt(prompt("Per favore, inserisci un numero secondo le regole"))
  }
  numeriInseriti.push(inputUser);
  // creo condizione dicendo che se il numero che inserisce l'utente è uguale a un elemento dell'array CPU allora modifico variabile esterna decretando che i giocatore ha perso
  if (numeriGenerati.includes(inputUser)) {
    numeroTrovato = true;
    document.getElementById('numeri_generati').innerHTML = numeriGenerati;
    alert("Hai perso!!");
    alert("Hai totalizzato " + punteggio + " punti!");
  }
  // se la condizione non si verifica stampo il numero inserito e aumento la variabile punteggio dell'utente
  document.getElementById('numeri_inseriti').innerHTML = numeriInseriti ;
  punteggio++;
}
// Condizione per decretare che ha vinto l'utente dove dico che se il punteggio è uguale ai numeri che poteva giocare e se nei numeri che ha messo nessuno è uguale ai numeri della cpu ha vinto
if (punteggio == (livello-mine) && (numeriGenerati.includes(inputUser))==false) {
  alert("Complimenti, mi hai battuto! Sei il vincitore!");
  alert("Hai totalizzato il punteggio pieno: " + punteggio + " punti");
  document.getElementById('numeri_generati').innerHTML = numeriGenerati;
}

// Creo una funzione per generare 16 numeri random da 1 a 100. dico al ciclo for di incrementare i fino a fare 16 cicli, e di stamparmi un numero mettendo una condizione while specificando con include(), che finchè non stampa un numero diverso dagli elementi dell'array non può uscire dalla condizione
function generaNumeri(min,max) {

  for (var i = 0; i < mine; i++) {
    numeriGeneratiElemento = Math.floor(Math.random()* max )+min;
    while (numeriGenerati.includes(numeriGeneratiElemento)) {
      numeriGeneratiElemento = Math.floor(Math.random()* max) +min;
    }
    numeriGenerati.push(numeriGeneratiElemento);
  }
  return numeriGenerati;
}
