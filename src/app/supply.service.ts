import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError ,of} from 'rxjs';
import { supply } from './supply';


@Injectable({
  providedIn: 'root'
})
export class SupplyService {
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private url = 'api/mysupply';

  getlist(): Observable<supply[]> {
    return this.http.get<supply[]>(this.url).pipe(
      catchError(this.handleError<supply[]>('getlist', []))
    );
  }

  getlistbyid(id:number):Observable<supply>{
    return this.http.get<supply>(`${this.url}/${id}`).pipe(
      catchError(this.handleError<supply>(`getlistbyid id=${id}`))
    );
  }

  deletesupply(id:number):Observable<supply>{
    return this.http.delete<supply>(`${this.url}/${id}`, this.httpOptions).pipe(
     
      catchError(this.handleError<supply>('deletesupply'))
    )
  }

  addsupply(supply:supply):Observable<supply>{
  
    return this.http.post<supply>(this.url,supply,this.httpOptions).pipe(
      
      catchError(this.handleError<supply>('addsupply'))
    );
  }
updatesupply(supply:supply):Observable<supply>{
  
  return this.http.put<supply>(this.url,supply,this.httpOptions).pipe(
    
    catchError(this.handleError<supply>('updatesupply'))
  );

}
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }

}


