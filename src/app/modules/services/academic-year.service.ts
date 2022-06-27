import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api } from 'src/app/core/api';
import { Observable, throwError } from 'rxjs';
import { acadimicYear } from '../models/acadimicYear';
import {catchError} from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root',
})
export class AcademicYearService {
  
  _url="../../../assets/academicYear.json"

  constructor(private _http: HttpClient) {}

  getAllAAcademicYear(): Observable<acadimicYear[]> {
    return this._http.get<acadimicYear[]>(this._url).pipe(
      catchError((err) => {
        return throwError(err.message || 'Server error');
      })
    );
  }
  setAcadimicYear(data1:acadimicYear)
  {
   return this._http.post(this._url,data1).pipe(catchError((err)=>
   {
   return throwError(err.message||"Server error");
   })
   )
  }
}
