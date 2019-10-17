import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldItemsService {

  private itemsUrl: string;

  constructor(private http: HttpClient) {

    this.itemsUrl = 'http://localhost:8080/items';
  }

  public findAll(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl);
  }

  public like(id: number) {

    const usrId = localStorage.getItem('currentUsr');

    console.log(usrId);

    return this.http.put(this.itemsUrl, {itemId: id, userId: usrId});
  }

  public isMatch(id: number) {

    const usrId = localStorage.getItem('currentUsr');

    console.log('isMatch ?' + usrId);

    return this.http.post(this.itemsUrl, {itemId: id, userId: usrId});
  }
}
