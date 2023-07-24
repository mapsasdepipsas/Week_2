let Person = require('./person');

class Contacts{
    personas;

    constructor() {
        this.personas = [];
    }

    //para que lea la clase Person, añadirPersona
    añadirPersona(nombre, apellido, peso, altura, yearOfBirth, hobbies){
        let pers = new Person(nombre, apellido, peso, altura, yearOfBirth, hobbies);
        this. personas.push(pers);
    }
    printPersons(){
        this.personas.forEach(persona =>{
            for(let atributo in persona){
                console.log(`${atributo}: ${persona[atributo]}`);
            }
            console.log();
        })
    }
}

module.exports = Contacts;