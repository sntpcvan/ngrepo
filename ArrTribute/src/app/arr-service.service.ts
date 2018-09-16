import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArrServiceService {

  constructor(private http:HttpClient) { }
  getSongJSON():Observable<any>{
    return this.http.get('./assets/song.json');
  }
}
