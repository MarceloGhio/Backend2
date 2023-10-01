/*---------------MUTABILIDAD----------------*/
/*De una constante que incialmente es una array vacio, y lo modificamos agregandole un numero */

const array = [];
array.push(1);
console.log(array);

const user = {
    name: `Juan`,
    age: 40
}
/*no funcionaria si tengo la variable name = carlos y le quioro cambiar el valor nos da error*/
user.name = `Carlos`

console.log(user);