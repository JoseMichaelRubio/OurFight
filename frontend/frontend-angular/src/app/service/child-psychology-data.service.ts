import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class ChildPsychologyDataService {
  doctorUrl: string = environment.baseUrl + "doctors/child-psychologists"

  constructor(private http: HttpClient) {}
  getChildPsychologists(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.doctorUrl);
  }
}
