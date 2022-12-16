export class persona {
    id?: number;    
    apellidonombre: string;
    imagen: string;
    telefono: string;
    email: string;
    posicion: string;
    acercade: string;

    constructor(apellidonombre: string, imagen: string, telefono: string, email: string, posicion: string, acercade: string) {
        this.apellidonombre = apellidonombre;
        this.imagen = imagen;
        this.telefono = telefono;
        this.email = email;
        this.posicion = posicion;
        this.acercade = acercade;
    }

}