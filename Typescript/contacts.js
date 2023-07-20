"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contacts = void 0;
var contacts = /** @class */ (function () {
    function contacts() {
        this.people = [];
    }
    contacts.prototype.añadirpersona = function (persona) {
        this.people.push(persona);
    };
    contacts.prototype.printCalendar = function () {
        for (var _i = 0, _a = this.people; _i < _a.length; _i++) {
            var persona = _a[_i];
            console.log("Nombre: ".concat(persona.name, ", Edad: ").concat(persona.age, ", Direccion: ").concat(persona.getadress));
        }
    };
    return contacts;
}());
exports.contacts = contacts;
