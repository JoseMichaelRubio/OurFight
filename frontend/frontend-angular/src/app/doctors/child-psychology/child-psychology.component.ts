import { ChildPsychologyDataService } from './../../service/child-psychology-data.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-child-psychology',
  templateUrl: './child-psychology.component.html',
  styleUrls: ['./child-psychology.component.css']
})
export class ChildPsychologyComponent implements OnInit {


  asyncDoctors: Observable<Doctor[]> = this.doctorService.getChildPsychologists();

  doctors: Doctor[] =[];
  errorMessage: string = "";
  maxStringLength: number =0;
  headElements = ['ID', 'Name', 'Gender', 'Avialable', 'Volunteer', 'Speciality']



  constructor(private doctorService: ChildPsychologyDataService) {
    doctorService.getChildPsychologists().subscribe(
      (doctorsReturned)=>{
        this.doctors = doctorsReturned;
        doctorsReturned.forEach(i=>{this.maxStringLength=Math.max(i.name.length, this.maxStringLength)});
      },
      ()=>{this.errorMessage ="There is an issue getting your data"})
  }

  ngOnInit(): void {
  }

}
