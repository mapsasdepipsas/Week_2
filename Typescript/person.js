"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, adress) {
        this.name = name;
        this.age = age;
        this.adress = adress;
    }
    //printName, yearOfBirth, setAdress, get Adress abajo
    //get muestra qué valor tiene adress, el que nosotros le hemos dado ANTES
    Person.prototype.getadress = function () {
        return this.adress;
    };
    //set no devuelve nada, modifica el valor que tiene adress, NUEVO NOMBRE DE CALLE
    //cuando un método no devuelve nada, se pone que es de tipo void
    //le pasamos por parámetro la nueva calle(newAdress)
    Person.prototype.setadress = function (newAdress) {
        this.adress = newAdress;
    };
    Person.prototype.printAdress = function () {
        return "El nombre de la calle es: ".concat(this.adress);
    };
    Person.prototype.printName = function () {
        return this.name;
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        return currentYear - this.age;
    };
    return Person;
}());
exports.Person = Person;
