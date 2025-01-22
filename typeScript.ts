// 1) Quali sono i tipi primitivi principali in TypeScript?
// come in js i tipi primitivi principali sono numbers, string e boolean 
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
const Name: string = 'Daniele (Rey)'
let Age: number = 20 
let StaiStudiandoTypeScrip: boolean = true
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }
const Greet = (myName) => {return 'Ciao' + myName}
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
//la seguente funzione ritornerà la somma di a e b e questo valore sarà sicuramente un numero
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
let price: number = 30 
const Iva: number = 22 
const CalcoloIva = (prezzo, iva)=>{
    return iva+100/100 * prezzo
}
console.log(CalcoloIva)
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
const string1: string = 'a bello'
const string2: string = ' de zia'
const string3: string = string1.concat(string2)
console.log(string3)
// 7) Cos'è un Type Union e come si scrive?
// una Type Union è una variabile che accetta diversi tipi di valori, come ad esempio numerici e stringhe 
let union: number | string = 5
union = 'ciao'
// 8) Crea una variabile che possa contenere un numero, null o undefined.
let variabile: number | null | undefined = null 
variabile = 78
variabile = undefined
// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
let giornoDellaSettimana: number | string = 10
giornoDellaSettimana = 'Lunedì'
//non ho ben capito l'esercizio
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
const numbers: number[] = [1, 2, 3]
const numbers2: Array<number> = [1, 2, 3]
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
const tupla: (number | string)[] = ['Mario', 'Paolo', 'gigino', 5, 67890]
// 12) Qual è la differenza tra type e interface?
//l'nterface è una template precostituito che può essere riempito solo con le variabili già dichiarate
// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
interface person {
    firstName: string
    lastName: string
    age: number
}
// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
interface user {
    email: string 
    tel?: number
}

let user1: user = {
    email: 'ciaoiosono',
    // tel: 48575388,
}
// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
let nome = 'Marco'
let voto = 9
const studente: (string | number)[] = [nome, voto]

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

// 17) Crea un oggetto che implementi l'interfaccia Auto.
// 18) Cosa sono i Generics in TypeScript?
// 19) È possibile avere più tipi generici in un'interfaccia?
// 20) Crea un'interfaccia generica per una risposta API.  