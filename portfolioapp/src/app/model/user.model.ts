export class user {
    id?: number;    
    username: string;
    email: string;
    password: string;
    apellido_nombre: string;
    
    constructor(username: string, email: string, password: string, apellido_nombre: string ) {
        this.username = username;
        this.email = email;
        this.password = password;        
        this.apellido_nombre = apellido_nombre;        
    }
}