"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var persona2 = new person_1.Person("Alicia", 33, "De los Angeles");
console.log(persona2.name);
console.log(persona2.age);
//cambiar valor de un objeto PUBLICO:
persona2.age = 34;
console.log(persona2);
console.log(persona2.getadress());
//NO se hace console.log de setadress pq no me devuelve nada, set simplemente cambia el valor al objeto.
persona2.setadress("Angeles");
//hacemos un console.log de getadress DE NUEVO, 1 vez modificado antes para ver el nuevo valor que le hemos dado en el setadress 
console.log(persona2.getadress());
//para que saque el printadress y el nombre de la calle cambiada con el setadress(Luna)
console.log(persona2.printAdress());
//printname
console.log(persona2.printName());
//yearofbirth
console.log(persona2.yearOfBirth(2023));
