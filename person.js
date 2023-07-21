//reto 6
class Person{

    //constructor
    constructor(name, weight, height, añonac, aficiones){
        this.nombre = name
        this.apellido
        this.peso = weight
        this.altura = height
        this.yearOfBirth
        this.hobbies 
        this.yearOfBirth = añonac
        //reto 5
        this.hobbies = aficiones
    }



//método

//reto 2
calcimc(){
    let imc = this.peso / (this.altura ** 2);
    return imc;
}

//reto 3
edad(añoact){
    return añoact - this.yearOfBirth;
}

//reto 4
printAll(){
    console.log(`Nombre: ${this.nombre} - Peso: ${this.peso} - Altura: ${this.altura} - Año de nacimiento: ${this.yearOfBirth}`);
}

//reto 5
printHobbies(){
    console.log(`Aficiones: ${this.hobbies}`);
}
}

module.exports = Person;