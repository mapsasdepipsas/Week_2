export class Book{
    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    constructor(title: string, nPages: number, isbn: string, author: string, editorial: string){
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
//getters y setters
    public gettitle(): string{
        return this.title
    }
    public settitle(newTitle: string): void{
        this.title = newTitle
    }
    public getnpages(): number{
        return this.nPages
    }
    public setnpages(newnpages: number): void{
        this.nPages = newnpages
    }
    public getisbn(): string{
        return this.isbn
    }
    public setisbn(newisbn: string): void{
        this.isbn = newisbn
    }
    public getauthor(): string{
        return this.author
    }
    public setauthor(newauthor: string): void{
        this.author = newauthor
    }
    public geteditorial(): string{
        return this.editorial
    }
    public seteditorial(neweditorial: string): void{
        this.editorial = neweditorial
    }

//toString(): string
    public toString(): string{
        return `Title - ${this.title}\ Number of pages - ${this.nPages}\ ISBN - ${this.isbn}\ Author - ${this.author}\ Editorial - ${this.editorial}`
    }
}

