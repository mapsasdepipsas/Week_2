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

let pers1 = new Person ("Maria", 76, 1.70, 1978, ["nadar", "cantar", "dormir"]);
//reto 2
let imcpers1 = pers1.calcimc();
console.log(`El IMC de ${pers1.nombre} es de ${imcpers1} `);

//reto 3
let edadPers1 = pers1.edad(2023);
console.log(`${pers1.nombre} tiene ${edadPers1} años`);

//reto 4
pers1.printAll();
//reto 5
pers1.printHobbies();

module.exports = Person;