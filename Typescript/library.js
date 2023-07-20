"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    //getters y setters
    Library.prototype.getaddress = function () {
        return this.address;
    };
    Library.prototype.setaddress = function (newAdress) {
        this.address = newAdress;
    };
    Library.prototype.getmanager = function () {
        return this.manager;
    };
    Library.prototype.setmanager = function (newManager) {
        this.manager = newManager;
    };
    //toString(): string
    Library.prototype.toString = function () {
        var infolibro = "";
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            infolibro += "".concat(book.toString());
        }
        return infolibro.trim();
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        return this.books.filter(function (book) { return book.gettitle() == author; });
    };
    return Library;
}());
exports.Library = Library;
