export class experiencia {
    id?: number;    
    empresa: string;
    web: string;;
    logo: string;
    puesto: string;
    periodo_desde: string;
    periodo_hasta: string;
    descripcion: string;
 
    constructor(empresa:string, web:string, logo:string, puesto:string, periodo_desde:string, periodo_hasta:string, descripcion:string){
        this.empresa = empresa;
        this.web = web;
        this. logo = logo;
        this.puesto = puesto;
        this.periodo_desde = periodo_desde;
        this.periodo_hasta = periodo_hasta;
        this.descripcion = descripcion;
    }

  
}
