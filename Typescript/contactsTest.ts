import { contacts } from "./contacts";
import { Person } from "./person";

let persona = new Person("Irene", 23, "San Juan");
let persona2 = new Person("Sara", 19, "Mercurio");

let agenda = new contacts();

agenda.añadirpersona(persona);
agenda.añadirpersona(persona2);

console.log(persona.getadress());
console.log(persona2.getadress());

persona.setadress("San Lorenzo");
persona2.setadress("Venus");

console.log(persona.getadress());
console.log(persona2.getadress());

agenda.printCalendar();