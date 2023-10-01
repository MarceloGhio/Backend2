/*Las funciones son bloques de instrucciones que trabajan sobre un scope local.Para qe se ejecuten se invocan despues de su declaracion, la podemos invocar con su nombre y parentesis () ,la podemos encontrar en su sintaxis basica o arrow function => */

function saludar1(name){
    return `Hola ${name}`;
}

const saludar2 = (name) => {
    return `Hola ${name}`;
}

const saludar3 = name => `Hola ${name}`;

console.log(saludar1(`Alberto`));
console.log(saludar2(`Juan`));
console.log(saludar3(`Pedro`));

/*-----------------------------------callbacks--------------------------*/
// una funcion que se pasa como parametro de otra funcion
const array = [1, 2, 4, 5, 6, 7];
/*aca filter recibe una funcion callback(()=>{}), es una funcion que retorna lo que queremos filtrar*/
const array2 = array.filter(x => x > 3);
/*lo que hace internamente es:*/
// array.filter(function(x){
    // return x > 3
// })

console.log(array2);

/*-----------------------------------SCOPE-----------------------------------*/

// let num = 0

const fn1= () => {
    let num = 1;
    console.log(num);
}

// console.log(num);

fn1();

/*--------------------------------TEMPLATE STRINGS--------------------------------------------------*/

// forma de crear cadena de texto mas simple y legible, se escriben entre comillas invertidas , nos permite incluir variables dentro de la cadena de texto sin tener que concatenarlas de manera individual.

// anteriormente se nigresaba asi:
let nombre = `Juan`
let age = 45
let msg = `Mi nombre es ` + nombre + ` y tengo ` + age + ` años`

//console.log(msg);

let nombre2 = `Roman`
let age2 = 45
let msg2 = `Mi nombre es ${nombre2} y tengo ${age2} años`

console.log(msg2);

const msgMultilinea =`
        Este es un ejemplo
        de un mensaje
        en varias lineas
        `

        console.log(msgMultilinea);

        