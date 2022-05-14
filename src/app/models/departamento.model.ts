import { Edificio } from "./edificio.model";

export class Departamento {

    iddepartamento?:number;
	 nombre?:string;
	descripcion?:string;
	 precio?:string;
	 edificio?: Edificio;
	fechaVigencia?:Date;	
	fechaRegistro?:Date;

}
