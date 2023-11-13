/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let val1 = 2;
let val2 = 3;

let sum = val1 + val2;
console.log("Somma tra 2 valori: ", sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let generaNumeroCasuale = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log("NUmeri casuali da 0 a 20: ", generaNumeroCasuale(0, 20));


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
    name: "Vincenzo",
    surname: "Saccone", 
    age: 19,
}

console.log("Oggetto me: ", me);


/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age; 
console.log("Oggetto me con la proprietà age eliminata: ", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["C", "C++", "Java", "HTML", "CSS", "JS"]; //aggiunge la proprietà skills all'oggetto
console.log("Oggetto me con la proprietà skills: ", me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("PHP"); //pusha la stringa "PHP" all'interno di me.skills
console.log("Oggetto me con la proprietà skills modificata: ", me);


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop(); //pop elimina l'ultimo elemento
console.log("Oggetto me con la proprietà skills modificata (eliminando l'ultimo elemento): ", me);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  return Math.floor(Math.random() * (6 - 1 + 1) + 1); 
}

console.log("Dado: ", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/


let whoIsBigger = (a, b) => {
  if (a > b) { //semplicemente controlliamo quale num è maggiore dell'altro con un if
    return "Il primo numero " + a + " è maggiore del secondo " + b;
  } else if (a < b) {
    return "Il primo numero " + a + " è minore del secondo " + b;
  } else {
    return "I due numeri sono uguali: " + a + " = " + b;
  }
}

console.log(whoIsBigger(3, 3));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

let splitMe = (stringa) => { 
  return stringa.split(" "); //splittiamo la frase servendoci degli spazi
}

let s = splitMe("ciao come va?");
console.log(s);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

let deleteOne = (str, bool) => {
  if (bool === true) {
    return str.substring(1); //qui il substring elimina il primo carattere
  } else {
    return str.substring(0, str.length - 1); //qui invece elimina l'ultimo carattere (lunghezza della stringa -1)
  }
}

let elimina = deleteOne("Ciao", false);
console.log(elimina);


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

let onlyLetters = (stringaA) => {
  let numRimossi = stringaA.replace(/[0-9]/g, '');  //ritorniamo la frase senza numeri quindi nessuno "carattere da 0 a 9"
  return numRimossi;
}

let noNumbers = onlyLetters("Questa 2frase, inizialmente40 aveva numeri in83 mezzo");
console.log(noNumbers);
 
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

let isThisAnEmail = (stringaB) => {
  const email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; //controllo classico delle email

  return email.test(stringaB);
}

let risultato = isThisAnEmail("esempio22@icloud.com");
console.log("Email: ", risultato);


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

let whatDayIsIt = () => {
  let giorniSettimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  //mappiamo i giorni della settimana ricordandoci che con JS si parte da 0 e che indica la domenica 
  let dataCorrente = new Date();
  let numeroGiorno = dataCorrente.getDay();
  return giorniSettimana[numeroGiorno];
}

let giorno = whatDayIsIt();
console.log("Oggi è:", giorno);

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

let rollTheDices = (numLanci) => { 
  if (numLanci >= 1) { //ovviamente il parametro dato deve essere superiore a 1 altrimenti non verrà lanciato il dado
    let values = []; //array dove verranno pushati gli elementi random
    let sum1 = 0;

    for (let i = 0; i < numLanci; i++) {
      let result = dice();
      values.push(result);
      sum1 += result;
    }

    return {
      sum1: sum1,
      values: values,
    };

  } else {
    return "Hai inserito 0, il dado non verrà lanciato";
  }
}

let lancio = rollTheDices(3);
console.log(lancio);


/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

let howManyDays = (anno, mese, giorno) => {
  let dataInserita = new Date(anno, mese, giorno); 
  let dataCorrente = new Date();
  let giorniDifferenza = Math.abs(dataInserita.getTime() - dataCorrente.getTime()); //data attuale - data inserita
  //Utilizziamo Math.abs per avere un numero senza il segno negativo

  let risultato = giorniDifferenza / (1000 * 60 * 60 * 24);
  risultato = parseInt(risultato);
  return "Giorni trascorsi da oggi: " + risultato;
}

let diffGiorni = howManyDays(2023, 10, 2); //10 indica Novembre 
console.log(diffGiorni);


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

let isTodayMyBirthday = (mese, giorno) => {
  let currentDate = new Date();
  let compleanno = new Date(currentDate.getFullYear(), mese, giorno);

  return currentDate.getMonth() === compleanno.getMonth() && currentDate.getDate() === compleanno.getDate();
  //qui semplicemente fa un confronto per capire se il mese e il giorno corrente corrispondono con quelli del compleanno
}

let compleannoOggi = isTodayMyBirthday(0, 26); // 26 gennaio
console.log(compleannoOggi);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Arrays & Oggetti

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

let deleteProp = (obj, stringaC) => {
  delete obj[stringaC]; //bisogna usare la bracket notation necessariamente
  //un errore che facevo precedentemente era quello di usare la dot notation
  return obj;
}

let obj = {
  name: "nome",
  surname: "cognome",
}

let eliminaProp = deleteProp(obj, "surname");
console.log("Oggetto obj con proprietà eliminata: ",eliminaProp);


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

let newestMovie = (movies) => {
  if (movies.length === 0) { 
    return "Nessun film disponibile.";
  }

  let newest = movies[0];

  for (let i = 1; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > parseInt(newest.Year)) { //trova il film più recente
      newest = movies[i];
    }
  }

  return newest;
}

let filmPiuRecente = newestMovie(movies);
console.log("Film più recente: ", filmPiuRecente);



/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

let countMovies = () => {
  return movies.length;
}

console.log("Numero di film: ", countMovies());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

let onlyTheYears = () => {
  let newArray = [];
  movies.forEach(element => { //il forEach (o il for) è necessario per selezionare tutti gli elementi dell'array
    newArray.push(element.Year);
  });
  return newArray;
}

console.log("Array con solo gli anni di uscita dei film: ", onlyTheYears());


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

let onlyInLastMillennium = (movies) => {
  let newArray = movies.filter(element => { //il filter viene usato qui per filtrare i film prodotti prima del 2000
    return parseInt(element.Year) <= 1999;
  });

  return newArray;
}

console.log("Film prodotti nel millennio scorso: ", onlyInLastMillennium(movies));


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

let sumAllTheYears = () => {
  return movies.reduce((acc, somma) => { //usiamo reduce per velocizzare il proccesso di somma
    return acc += parseInt(somma.Year);
  }, 0 );
}

console.log("Somma degli anni dei film: ", sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

let searchByTitle = (stringaD) => {
  let newArray = movies.filter(element => { //filter per filtrare i film che includono...
    return element.Title.includes(stringaD); //includes verifica se è inclusa la stringa inserita come parametro
  });
  return newArray;
}

console.log(searchByTitle("Avengers"));


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

let searchAndDivide = (stringaE) => {
  let result = { //oggetto dove verranno inserite le due categorie
    match: [], //che matcha con la stringa
    unmatch: [], //che non lo faS
  };

  movies.forEach(element => {
    if (element.Title.includes(stringaE)) { //include "Avengers"? se si, lo inserisce nel match
      result.match.push(element); //attraverso il push 
    } else {
      result.unmatch.push(element); //altrimenti lo pusha nell'altra categoria
    }
  });

  return result;
}

console.log(searchAndDivide("Avengers"));


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

let removeIndex = (numA) => {
  movies.splice(numA, 1); 
}

removeIndex(1);
console.log(movies);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////7

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

let container = document.querySelector("#container"); //selezione attraverso #id

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

let td = document.querySelectorAll("td"); 

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

document.addEventListener("DOMContentLoaded", function() { //una volta avviato lo script, attua questa funzione:
  td.forEach(e => {
    console.log(e.textContent); //stampa il contenuto di td
  });
});


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

document.addEventListener("DOMContentLoaded", function() {
  let links = document.querySelectorAll("a");

  links.forEach(e => {
    e.style.backgroundColor = "red"; //cambia colore sfondo ai links
  });
});


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

document.addEventListener("DOMContentLoaded", function() {
  let lista = document.getElementById("myList");
  let nuovoElemento = document.createElement("li");

  nuovoElemento.innerText = "PROVA"; //aggiunge un nuovo li 

  lista.appendChild(nuovoElemento); //è necessario appenderlo altrimenti non sarà visibile
});


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

document.addEventListener("DOMContentLoaded", function() {
  let lista = document.querySelectorAll("#myList");
  
  lista.forEach(e => {
    e.innerText = ""; //svuotiamo assegnando come testo una stringa vuota
  });
});


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

document.addEventListener("DOMContentLoaded", function() {
  let tr = document.querySelectorAll("tr");
  
  tr.forEach(e => {
    e.classList.add("test"); //aggiunge una classe .test
  });
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

let halfTree = (numero) => { //numero altezza
  let albero = '';
  
  for (let i = 1; i <= numero; i++) { //usiamo un ciclo (for) annidato per costituire la strurra
    let riga = '';

    for (let j = 0; j < i; j++) {
      riga += '*'; 
    }

    albero += riga + '\n';
  }

  return albero;
}

console.log("Mezzo albero di asterischi: ");
console.log(halfTree(3));


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

let ripeti = (str, times) => { //la difficoltà che ho riscontrato rispetto al precedente esercizio era la gestione degli spazi per centrare l'albero
  let result = '';
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
}

let tree = (numero) => { //numero altezza
  for (let i = 1; i <= numero; i++) {
    let spazi = ripeti(' ', numero - i); //per lasciare gli spazi
    let asterischi = ripeti('*', 2 * i - 1); //per ripetere gli asterischi
    console.log(spazi + asterischi);
  }
}

console.log("Albero intero di asterischi: ");
tree(5);




/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

let isItPrime = (valore) =>  { //un numero è primo se è divisibile solo per 1 e per se stesso
  if (valore <= 1) { //quindi se è minore di 1, già viene scartato a priori
    return false;
  }

  for (let i = 2; i <= valore / 2; i++) { //'valore / 2' perché se in questo range nessun numero è divisibile per 2, il numero è primo
    if (valore % i === 0) {
      return false;
    }
  }

  return true;
}

// Esempio di utilizzo
let numero = 13;
console.log(isItPrime(numero)); // Restituirà true perché 13 è un numero primo
