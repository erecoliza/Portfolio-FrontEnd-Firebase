export class persona {
    id?: number;    
    apellido_nombre: string;
    imagen: string;
    telefono: string;
    email: string;
    posicion: string;
    acercade: string;

    constructor(apellido_nombre: string, imagen: string, telefono: string, email: string, posicion: string, acercade: string) {
        this.apellido_nombre = apellido_nombre;
        this.imagen = imagen;
        this.telefono = telefono;
        this.email = email;
        this.posicion = posicion;
        this.acercade = acercade;
    }

}