import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class MarriageCounselingDataService {

  doctorUrl: string = environment.baseUrl + "doctors/marriage-counselors";


  constructor(private http: HttpClient) { }

  getMarriageCounselors(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.doctorUrl);
  }
}

