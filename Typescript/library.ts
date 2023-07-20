import { Book } from "./book"
export class Library{
    private books: Book[];
    private address: string;
    private manager: string;

    constructor(books: Book[], address: string, manager: string){
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    //getters y setters
    public getaddress(): string{
        return this.address
    }
    public setaddress(newAdress: string): void{
        this.address = newAdress
    }
    public getmanager(): string{
        return this.manager
    }
    public setmanager(newManager: string): void{
        this.manager = newManager
    }
    //toString(): string
    public toString(): string{
        let infolibro = ""
        for(let book of this.books){
            infolibro += `${book.toString()}`;
        }
        return infolibro.trim();
    }
    public getNumberOfBooks():number{
        return this.books.length;
    }
    public findByAuthor(author: string): Book[]{
        return this.books.filter((book) => book.gettitle() == author)
    }
}