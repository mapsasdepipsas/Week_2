export class Vector{
    private elements: number[];

    constructor(public n: number, public k: number){
        this.elements = [];
        for (let index = 0; index < n; index++) {
            this.elements.push (Math.floor((Math.random()) * (k + 1)));   
        }
    }
    //print(). Imprime por consola el vector.
    public print(): void{
        console.log(this.elements);
    }
    //add(v1:Vector):Vector. Realiza la suma de elements con v1.
    public add(v1:Vector): Vector{
        let result: Vector = new Vector(this.elements.length, 0);
        for (let index = 0; index < this.elements.length; index++) {
            result.elements[index] = this.elements[index] + v1.elements[index];
        }
        return result;
    }
    //subs(v1:Vector):Vector. Realiza la resta de elements con v1.
    public subs(v1:Vector):Vector{
        let result: Vector = new Vector(this.elements.length, 0);
        for (let index = 0; index < this.elements.length; index++) {
            result.elements[index] = this.elements[index] - v1.elements[index];  
        }
        return result;
    }
    //mult(v1:Vector):Vector. Realiza el producto de elements y v1.
    public mult(v1:Vector):Vector{
        let result: Vector = new Vector(this.elements.length, 0);
        for (let index = 0; index < this.elements.length; index++) {
            result.elements[index] = this.elements[index] * v1.elements[index]; 
        }
        return result;
    }
    //multNumber(n:number):Vector. Realiza el producto entre elements y el número n.
    public multNumber(n:number): Vector{
        let result: Vector = new Vector(this.elements.length, 0);
        for (let index = 0; index < this.elements.length; index++) {
            result.elements[index]= this.elements[index] * n[index];  
        }
        return result;
    }
}

