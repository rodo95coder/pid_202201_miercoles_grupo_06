import { Departamento } from "./departamento.model";
import { Estado } from "./estado.model";

export class Visitante {

    idvisitante?:number;
	dni?:String;
	nombre?:string;
	apellido?:String;
	email?:String;
	numero?:String;
	
	fechaNacimiento?:Date;

	departamento?:Departamento;

    estado?:Estado;
	
    fechaRegistro?:Date;
}
