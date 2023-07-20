"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("./book");
var library_1 = require("./library");
var libro1 = new book_1.Book("La mesa", 120, "73286-BHK67", "Carlos Jimenez", "Pinguino");
var libro2 = new book_1.Book("El calendario", 100, "738097-HFWO89", "Maria Garcia", "El barco de vapor");
var libro3 = new book_1.Book("La foto", 390, "6283-JA56FT", "Carlos Jimenez", "Planeta");
var booksarray = [libro1, libro2, libro3];
var biblio = new library_1.Library(booksarray, "Jupiter", "Teresa");
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
var autorlibros = biblio.findByAuthor("Carlos Jimenez");
console.log(autorlibros);
