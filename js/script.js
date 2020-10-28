// STEP 1 Il computer deve generare 16 numeri casuali tra 1 e 100.
// STEP 2 I numeri non possono essere duplicati
// STEP 3 In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// STEP 4 L’utente non può inserire più volte lo stesso numero.
// STEP 5 Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// STEP 6 La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//  STEP 7 Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// STEP 1 devo generare 16 numeri casuali tra 1 e 100, potrei usare un ciclo con un math random e acquisire tutti e 16 i numeri dentro un array.

// STEP 2 aggiungo una condizione che gli elementi dell'array non possono essere uguali tra loro

// STEP 3 Chiedo con un prompt o input all'utente di inserire un numero compreso tra 1 e 100 per 84 volte, quindi ci sarà un ciclo con contatore a 84.

// STEP 4 il valore che andrà ad inserire l'utente andrà pushato all'interno di un array. Ogni volta che inserirà un valore nuovo, dovrò controllare con una condizione se il valore inserito sarà uguale agli elementi dell array.

// STEP 5 Se il valore di quello che inserisce l'utente è uguale agli elementi dell'array dei numeri generati la partita finirà. Altrimenti l'utente dovrà continuare a inserire i numeri.

// STEP 6 Se il valore di quello che inserisce l'utente è uguale agli elementi dell'array dei numeri generati la partita finirà o se riuscirà ad inserire tutti i numeri NON presenti nell'array dei numeri generati, quindi vincerà.

// STEP 7 Nel caso si verifica lo STEP 6 si stamperà il numero degli elementi (length) dell'array dei numeri inseriti dall'utente e comunicare se ha vinto o perso.
