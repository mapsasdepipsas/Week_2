let Contacts = require('./contacts');


let contactos = new Contacts();
contactos.añadirPersona("Maria", 80, 178, 1978, ["leer", "videojuegos"]); 
contactos.añadirPersona("Alberto", 70, 160, 2000, ["cantar", "nadar"]);

contactos.printPersons();