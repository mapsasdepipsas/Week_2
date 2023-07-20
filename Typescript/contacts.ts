import { Person } from "./person";
export class contacts {
    public people: Person[];

    constructor(){
        this.people = [];
    }

    public añadirpersona(persona: Person){
        this.people.push(persona);
    }

    public printCalendar() {
        for(let persona of this.people)
        console.log(`Nombre: ${persona.name}, Edad: ${persona.age}, Direccion: ${persona.getadress}`);
        
    }
}