//reto 6
let Person = require('./person');

let pers1 = new Person ("Maria", 76, 1.70, 1978, ["nadar", "cantar", "dormir"]);
//reto 2
let imcpers1 = pers1.calcimc();
console.log(`El IMC de ${pers1.nombre} es de ${imcpers1} `);

//reto 3
let edadPers1 = pers1.edad(2023);
console.log(`${pers1.nombre} tiene ${edadPers1} años`);

//reto 4
pers1.printAll();
//reto 5
pers1.printHobbies();