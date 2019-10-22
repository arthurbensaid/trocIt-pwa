import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usr } from '../models/usr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users/';
  }

  public findAll(): Observable<Usr[]> {
    return this.http.get<Usr[]>(this.usersUrl);
  }

  public save(usr: Usr) {

    console.log('Nouvel Usr ' + usr._username);

    return this.http.post<Usr>(this.usersUrl, usr);
  }

  public savePicture(newUsr: FormData) {

    return this.http.post<FormData>(this.usersUrl, newUsr);
  }

  public delete(id: number) {
    return this.http.delete(this.usersUrl + id);
  }
}
