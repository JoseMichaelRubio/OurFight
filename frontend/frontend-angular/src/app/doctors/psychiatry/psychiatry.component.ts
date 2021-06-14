import { PsychiatryDataService } from './../../service/psychiatry-data.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-psychiatry',
  templateUrl: './psychiatry.component.html',
  styleUrls: ['./psychiatry.component.css']
})

export class PsychiatryComponent implements OnInit {

  asyncDoctors: Observable<Doctor[]> = this.doctorService.getAllData();

  doctors: Doctor[] =[];
  errorMessage: string = "";
  maxStringLength: number =0;
  headElements = ['ID', 'Name', 'Gender', 'Avialable', 'Volunteer', 'Speciality']



  constructor(private doctorService: PsychiatryDataService) {
    doctorService.getAllData().subscribe(
      (doctorsReturned)=>{
        this.doctors = doctorsReturned;
        doctorsReturned.forEach(i=>{this.maxStringLength=Math.max(i.name.length, this.maxStringLength)});
      },
      ()=>{this.errorMessage ="There is an issue getting your data"})
  }

  ngOnInit(): void {
  }

}
