export class proyecto {
    id?: number;  
    proyecto: string;
    web: string;
    fecha: string;
    descripcion: string;
   
    constructor(proyecto: string, web: string, fecha: string,descripcion: string){
        this.proyecto = proyecto;
        this.web = web;
        this.fecha = fecha;
        this.descripcion = descripcion;
    }
  
}
