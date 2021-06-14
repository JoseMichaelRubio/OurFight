export class Specialty{
  specialty: string;
  coPay: number;

  constructor(_specialty?:string, _coPay?:number){
    this.specialty= _specialty || "";
    this.coPay=_coPay || 0;
  }

}
