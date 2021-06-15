import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class GroupTherapyDataService {

  doctorUrl: string = environment.baseUrl + "doctors/group-therapists"

  constructor(private http: HttpClient) { }

  getGroupTherapists(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.doctorUrl);
  }
}
