import { Book } from "./book";
import { Library } from "./library";
let libro1 = new Book("La mesa", 120, "73286-BHK67", "Carlos Jimenez", "Pinguino");
let libro2 = new Book("El calendario", 100, "738097-HFWO89", "Maria Garcia", "El barco de vapor")
let libro3 = new Book("La foto", 390, "6283-JA56FT", "Carlos Jimenez", "Planeta")

let booksarray = [libro1, libro2, libro3]
let biblio = new Library(booksarray, "Jupiter", "Teresa")

//getters y setters
console.log(biblio.getaddress());
console.log(biblio.getmanager());

biblio.setaddress("Saturno");
biblio.setmanager("Jorge");

console.log(biblio.getaddress());
console.log(biblio.getaddress());

//metodo toString
console.log(biblio.toString());

//metodo numbofbooks
console.log(biblio.getNumberOfBooks());

//metodo bookby author
let autorlibros = biblio.findByAuthor("Carlos Jimenez");
console.log(autorlibros);



