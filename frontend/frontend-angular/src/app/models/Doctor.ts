import { Specialty } from "./Specialty";

export class Doctor{
  id: number;
  name: string;
  gender: string;
  available: boolean;
  volunteer: boolean;
  specialty: Specialty;

  constructor(_id?:number,_name?:string,_gender?:string,_available?:boolean,_volunteer?:boolean,_specialty:Specialty){
    this.id=_id || 0;
    this.name=_name || "";
    this.gender =_gender || "";
    this.available=_available || false;
    this.volunteer=_volunteer || false;
    this.specialty=_specialty || ""; //this instance doesnt have a ?


  }


}

}
