import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class TherapyDataService {

  doctorUrl: string = environment.baseUrl + "doctors/therapists"

  constructor(private http: HttpClient) { }

  getTherapists(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.doctorUrl);
  }
}
