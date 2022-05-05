import { Propietario } from "./propietario.model";

export class Mascota {

    idmascota?:number;
	nombre?:string;
	especie?:string;
	color?:string;
	edad?:string;
	
	 propietario?:Propietario;
	
	fechaNacimiento?:Date;
	
	fechaRegistro?:Date;
}
