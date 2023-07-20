export class Person{
    public name: string
    public age: number
    private adress: string

    constructor(name: string, age : number, adress: string){
        this.name = name;
        this.age = age;
        this.adress = adress;
    }
    //printName, yearOfBirth, setAdress, get Adress abajo

    //get muestra qué valor tiene adress, el que nosotros le hemos dado ANTES
    public getadress(): string{
        return this.adress
    }
    
    //set no devuelve nada, modifica el valor que tiene adress, NUEVO NOMBRE DE CALLE
    //cuando un método no devuelve nada, se pone que es de tipo void
    //le pasamos por parámetro la nueva calle(newAdress)
    public setadress(newAdress: string): void{
        this.adress = newAdress
    }

    public printAdress(): string{
        return `El nombre de la calle es: ${this.adress}`
    }

    public printName(){
        return this.name
    }

    public yearOfBirth(currentYear: number): number{
        return currentYear - this.age
    }
}

