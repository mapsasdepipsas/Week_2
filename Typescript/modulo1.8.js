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
var persona1 = new Person("Juan", 45, "Estrella");
console.log(persona1);
//cambiar valor de un objeto PUBLICO:
persona1.age = 34;
console.log(persona1);
console.log(persona1.getadress());
//NO se hace console.log de setadress pq no me devuelve nada, set simplemente cambia el valor al objeto.
persona1.setadress("Luna");
//hacemos un console.log de getadress DE NUEVO, 1 vez modificado antes para ver el nuevo valor que le hemos dado en el setadress 
console.log(persona1.getadress());
//para que saque el printadress y el nombre de la calle cambiada con el setadress(Luna)
console.log(persona1.printAdress());
//printname
console.log(persona1.printName());
//yearofbirth
console.log(persona1.yearOfBirth(2023));
