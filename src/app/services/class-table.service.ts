import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ClassTable } from '../models/classTable';

@Injectable({
  providedIn: 'root',
})
export class ClassTableService {

  private server = 'https://ntub-class.herokuapp.com/personal';

  constructor(private http: HttpClient) { }

  get(stdNo: string): Observable<ClassTable> {
    const url = `${this.server}/${stdNo}`;
    return this.http.get<ClassTable>(url).pipe(
      tap(res => console.log(res)),
      catchError(() => of(null as ClassTable)),
    );
  }
}
