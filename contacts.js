class Contacts{
    constructor() {
        this.personas = [];
    }
    añadirpersonas(persona) {
        this.personas.push(persona);
    }
    enseñarpersonas(){
        this.personas.forEach(persona =>{
            persona.printAll();
            persona.printHobbies();
        });
    }
    printPersons(){
        this.personas.forEach(persona =>{
            for(let atributo in persona){
                console.log(`${atributo}: ${persona}`);
            }
            console.log();
        })
    }
}


let contactos = new Contacts();
let persona1 = new Person("Maria", 80, 178, 1978, ["leer", "videojuegos"]) 
let persona2 = new Person("Alberto", 70, 160, 2000, ["cantar", "nadar"])

contactos.añadirpersonas(persona1);
contactos.añadirpersonas(persona2);

contactos.printPersons();

module.exports = Contacts;