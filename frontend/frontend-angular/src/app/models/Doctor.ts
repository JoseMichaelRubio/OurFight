import { Specialty } from "./Specialty";

export class Doctor{
  id: number;
  name: string;
  gender: string;
  available: boolean;
  volunteer: boolean;
  specialty: Specialty;

  constructor(doctor:any){
    this.id = doctor.id;
    this.name = doctor.name;
    this.gender = doctor.gender;
    this.available = doctor.available;
    this.volunteer= doctor.volunteer;
    this.specialty = doctor.specialty;



  }


}


