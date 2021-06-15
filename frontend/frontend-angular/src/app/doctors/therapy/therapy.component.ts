import { TherapyDataService } from './../../service/therapy-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';


@Component({
  selector: 'app-therapy',
  templateUrl: './therapy.component.html',
  styleUrls: ['./therapy.component.css']
})
export class TherapyComponent implements OnInit {

  asyncDoctors: Observable<Doctor[]> = this.doctorService.getTherapists();

  doctors: Doctor[] =[];
  errorMessage: string = "";
  maxStringLength: number =0;
  headElements = ['ID', 'Name', 'Gender', 'Avialable', 'Volunteer', 'Speciality']



  constructor(private doctorService: TherapyDataService) {
    doctorService.getTherapists().subscribe(
      (doctorsReturned)=>{
        this.doctors = doctorsReturned;
        doctorsReturned.forEach(i=>{this.maxStringLength=Math.max(i.name.length, this.maxStringLength)});
      },
      ()=>{this.errorMessage ="There is an issue getting your data"})
  }

  ngOnInit(): void {
  }

}
