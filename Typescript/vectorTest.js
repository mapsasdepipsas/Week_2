"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = require("./vector");
var vector = new vector_1.Vector(10, 78);
var vector2 = new vector_1.Vector(11, 65);
//print()
console.log("logs de print");
vector.print();
vector2.print();
//add(v1:Vector):Vector
console.log("logs de add");
var sumvect = vector.add(vector2);
sumvect.print();
//subs(v1:Vector):Vector
console.log("logs de subs");
var restavect = vector.subs(vector2);
restavect.print();
//mult(v1:Vector):Vector
console.log("logs de mult");
var multvect = vector.mult(vector2);
multvect.print();
//multNumber(n:number):Vector
console.log("logs de multnum");
var mult2vect = vector.multNumber(9);
mult2vect.print();
