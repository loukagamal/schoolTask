import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SchoolInfo } from '../models/schoolInfo';

@Injectable({
  providedIn: 'root'
})
export class SchoolInfoService {

  
  _url="../../../assets/schoolData.json";

  constructor(private _http: HttpClient) {}


setAcadimicYear(data1:SchoolInfo)
{
 return this._http.post(this._url,data1).pipe(catchError((err)=>
 {
 return throwError(err.message||"Server error");
 })
 )
}
}