export class educacion {
    id?: number;    
    establecimiento: string;
    web: string;;
    logo: string;
    carrera: string;
    periodo_desde: string;
    periodo_hasta: string;
    descripcion: string;
 
    constructor(establecimiento:string, web:string, logo:string, puesto:string, periodo_desde:string, periodo_hasta:string, descripcion:string){
        this.establecimiento = establecimiento;
        this.web = web;
        this. logo = logo;
        this.carrera = puesto;
        this.periodo_desde = periodo_desde;
        this.periodo_hasta = periodo_hasta;
        this.descripcion = descripcion;
    }

  
}
