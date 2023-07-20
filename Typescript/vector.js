"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.n = n;
        this.k = k;
        this.elements = [];
        for (var index = 0; index < n; index++) {
            this.elements.push(Math.floor((Math.random()) * (k + 1)));
        }
    }
    //print(). Imprime por consola el vector.
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    //add(v1:Vector):Vector. Realiza la suma de elements con v1.
    Vector.prototype.add = function (v1) {
        var result = new Vector(this.elements.length, 0);
        for (var index = 0; index < this.elements.length; index++) {
            result.elements[index] = this.elements[index] + v1.elements[index];
        }
        return result;
    };
    //subs(v1:Vector):Vector. Realiza la resta de elements con v1.
    Vector.prototype.subs = function (v1) {
        var result = new Vector(this.elements.length, 0);
        for (var index = 0; index < this.elements.length; index++) {
            result.elements[index] = this.elements[index] - v1.elements[index];
        }
        return result;
    };
    //mult(v1:Vector):Vector. Realiza el producto de elements y v1.
    Vector.prototype.mult = function (v1) {
        var result = new Vector(this.elements.length, 0);
        for (var index = 0; index < this.elements.length; index++) {
            result.elements[index] = this.elements[index] * v1.elements[index];
        }
        return result;
    };
    //multNumber(n:number):Vector. Realiza el producto entre elements y el número n.
    Vector.prototype.multNumber = function (n) {
        var result = new Vector(this.elements.length, 0);
        for (var index = 0; index < this.elements.length; index++) {
            result.elements[index] = this.elements[index] * n[index];
        }
        return result;
    };
    return Vector;
}());
exports.Vector = Vector;
