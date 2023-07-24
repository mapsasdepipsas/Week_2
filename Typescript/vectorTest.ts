import { Vector } from "./vector";
let vector = new Vector(10, 78);
let vector2 = new Vector(11, 65);

//print()
console.log("logs de print");

vector.print();
vector2.print();

//add(v1:Vector):Vector
console.log("logs de add");

let sumvect = vector.add(vector2)
sumvect.print();

//subs(v1:Vector):Vector
console.log("logs de subs");

let restavect = vector.subs(vector2)
restavect.print();

//mult(v1:Vector):Vector
console.log("logs de mult");

let multvect = vector.mult(vector2)
multvect.print();

//multNumber(n:number):Vector
console.log("logs de multnumber");

let mult2vect = vector.multNumber(9)
mult2vect.print();


