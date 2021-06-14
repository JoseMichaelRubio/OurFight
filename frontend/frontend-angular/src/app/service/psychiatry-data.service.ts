import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class PsychiatryDataService {

  doctorUrl: string = environment.baseUrl + "doctors/psychiatrists";

  constructor(private http: HttpClient) { }

  getAllData(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.doctorUrl)
  }
}
