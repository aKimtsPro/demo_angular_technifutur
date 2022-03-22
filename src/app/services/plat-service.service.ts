import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Plat } from '../models/plat.model';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  listError: any[] = [];

  private readonly BASE_URL = "http://localhost:3000/plats";

  constructor(private client: HttpClient) { }

  // GET - DELETE
  getPlats(): Observable<Plat[]>{
    return this.client.get<Plat[]>(this.BASE_URL)
  }

  getPlat(id: number): Observable<Plat>{
    return this.client.get<Plat>(this.BASE_URL+'/'+id).pipe(
      catchError( (err, caught) => {
        this.listError.push(err);
        return new Observable<Plat>((sub) => sub.error(err));
      })
    )
  }

  // POST - PUT - PATCH
  onPlatSent(plat: Plat){
    return this.client.post<Plat>(this.BASE_URL, plat)
  }

}
