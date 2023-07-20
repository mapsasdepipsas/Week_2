"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    //getters y setters
    Book.prototype.gettitle = function () {
        return this.title;
    };
    Book.prototype.settitle = function (newTitle) {
        this.title = newTitle;
    };
    Book.prototype.getnpages = function () {
        return this.nPages;
    };
    Book.prototype.setnpages = function (newnpages) {
        this.nPages = newnpages;
    };
    Book.prototype.getisbn = function () {
        return this.isbn;
    };
    Book.prototype.setisbn = function (newisbn) {
        this.isbn = newisbn;
    };
    Book.prototype.getauthor = function () {
        return this.author;
    };
    Book.prototype.setauthor = function (newauthor) {
        this.author = newauthor;
    };
    Book.prototype.geteditorial = function () {
        return this.editorial;
    };
    Book.prototype.seteditorial = function (neweditorial) {
        this.editorial = neweditorial;
    };
    //toString(): string
    Book.prototype.toString = function () {
        return "Title - ".concat(this.title, " Number of pages - ").concat(this.nPages, " ISBN - ").concat(this.isbn, " Author - ").concat(this.author, " Editorial - ").concat(this.editorial);
    };
    return Book;
}());
exports.Book = Book;
