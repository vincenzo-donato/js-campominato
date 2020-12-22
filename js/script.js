// DICHIARO LE VAR
var difficolta = prompt('scegli un livello fra (facile-intermedio-difficile');
var numeriRandom = [];
var numeriUtente = [];
var sentinella = true;
var tentativi = '';


// IMPOSTO LO SWITCH PER LE VARIE DIFFICOLTA'
switch (difficolta){

  // FACILE
  case 'facile':
    tentativi = 100;
    break;
    // FACILE FINE


    // INTERMEDIO
    case 'intermedio':
      tentativi = 80;
    break;
    // INTERMEDIO FINE


    // DIFFICILE 
    case 'difficile':
      tentativi = 50;
    break;
    // DIFFICILE FINE

}
// FINE SWITCH 

  document.getElementById('title').innerHTML += "MODALITA' DIFFICILE";
      // CREO UN CICLO PER SCRIVERE UNA SERIE DI NUMERI RANDOM CHE VERRANNO INSERITI DENTRO L'ARRAY 
    while (numeriRandom.length < 16){
      var numero = generaRandom(1,tentativi);
      if (numeriRandom.includes(numero) == false){
      numeriRandom.push(numero);
    }
    }
    // CREO UN CICLO PER INSERIRE I MIEI NUMERI DELLA LA MIA ARRAY 
    while (numeriUtente.length < tentativi && sentinella){

      var richiestaNumero = parseInt(prompt('Inserisci un Numero'));
      
      // CREO UN IF PER SPECIFICARE CHE I NUMERI DEVONO ESSERE FRA 0 E maxNum
      if(richiestaNumero <=0 || richiestaNumero > tentativi){
        alert('ATTENZIONE NUMERO NON COMPRESO FRA QUELLI SELEZIONABILI 0-' + tentativi)
        richiestaNumero = parseInt(prompt('Inserisci un Numero'));
      }
      // CREO UN IF PER IMPOSTARE UNA CONDIZIONE NEL QUALE SE IL NUMERO DA ME INSERITO E' PRESENTE NEI NUMERI MINA IL GIOCO FINISCE
      if (numeriRandom.includes(richiestaNumero)){
        alert('ATTENZIONE, HAI PERSO');
        sentinella = false;
      }
      // CASO CONTRARIO INIZIO A PUSHARLO DENTRO LA MIA ARRAY NUMERI
      else if (numeriUtente.includes(richiestaNumero) == false){
        numeriUtente.push(richiestaNumero);
      }
      // NEL CASO IL NUMERO DA ME PUSHATO SIA GIA PRESENTE UN ALERT MI AVVERTE E DEVO RIMETTERE UN'ALTRO NUMERO
      else{
        alert('ATTENZIONE NUMERO GIA INSERITO');
      }
      // IN CASO DI VINCITA'
      if(numeriUtente.length == tentativi){
        alert('HAI VINTO')
      }
      
    }

 // STAMPO SIA I NUMERI RANDOM CHE IL RISULTATO
    document.getElementById('pcNumeri').innerHTML += 'NUMERI MINA' + ' ' + numeriRandom;
    document.getElementById('decreto').innerHTML += 'SEI RIUSCITO A FARE' + ' ' + numeriUtente.length + ' ' + 'TENTATIVI' ;


// FUNZIONE
function generaRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}




