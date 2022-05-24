import { Departamento } from "./departamento.model";

export class Propietario {

    
	idpropietario?:number;
	dni?:string;
	nombre?:string;
	apellido?:string;
	email?:string;
	numero?:string;
	
	fechaNacimiento?:Date;

	departamento?:Departamento;

	fechaRegistro?:Date;
}
