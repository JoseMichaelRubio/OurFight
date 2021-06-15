import { GroupTherapyDataService } from './../../service/group-therapy-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-group-therapy',
  templateUrl: './group-therapy.component.html',
  styleUrls: ['./group-therapy.component.css']
})
export class GroupTherapyComponent implements OnInit {

 asyncDoctors: Observable<Doctor[]> = this.doctorService.getGroupTherapists();

  doctors: Doctor[] =[];
  errorMessage: string = "";
  maxStringLength: number =0;
  headElements = ['ID', 'Name', 'Gender', 'Avialable', 'Volunteer', 'Speciality']



  constructor(private doctorService: GroupTherapyDataService) {
    doctorService.getGroupTherapists().subscribe(
      (doctorsReturned)=>{
        this.doctors = doctorsReturned;
        doctorsReturned.forEach(i=>{this.maxStringLength=Math.max(i.name.length, this.maxStringLength)});
      },
      ()=>{this.errorMessage ="There is an issue getting your data"})
  }

  ngOnInit(): void {
  }

}
