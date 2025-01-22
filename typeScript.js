// 1) Quali sono i tipi primitivi principali in TypeScript?
// come in js i tipi primitivi principali sono numbers, string e boolean 
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var Name = 'Daniele (Rey)';
var Age = 20;
var StaiStudiandoTypeScrip = true;
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }
var Greet = function (myName) { return 'Ciao' + myName; };
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
//la seguente funzione ritornerà la somma di a e b e questo valore sarà sicuramente un numero
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var price = 30;
var Iva = 22;
var CalcoloIva = function (prezzo, iva) {
    return iva + 100 / 100 * prezzo;
};
console.log(CalcoloIva);
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var string1 = 'a bello';
var string2 = ' de zia';
var string3 = string1.concat(string2);
console.log(string3);
// 7) Cos'è un Type Union e come si scrive?
// una Type Union è una variabile che accetta diversi tipi di valori, come ad esempio numerici e stringhe 
var union = 5;
union = 'ciao';
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var variabile = null;
variabile = 78;
variabile = undefined;
// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
var giornoDellaSettimana = 10;
giornoDellaSettimana = 'Lunedì';
//non ho ben capito l'esercizio
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var tupla = ['Mario', 'Paolo', 'gigino', 5, 67890];
var user1 = {
    email: 'ciaoiosono',
    // tel: 48575388,
};
// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
var nome = 'Marco';
var voto = 9;
var studente = [nome, voto];
// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
// 17) Crea un oggetto che implementi l'interfaccia Auto.
// 18) Cosa sono i Generics in TypeScript?
// 19) È possibile avere più tipi generici in un'interfaccia?
// 20) Crea un'interfaccia generica per una risposta API.  
