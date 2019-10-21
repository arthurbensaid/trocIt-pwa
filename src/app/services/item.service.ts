import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl: string;
  private usersUrl: string;
  public usrId = localStorage.getItem('currentUsr');

  constructor(private http: HttpClient) {
    this.itemsUrl = 'http://localhost:8080/items';
    this.usersUrl = 'http://localhost:8080/users/' + this.usrId + '/items/';
  }

  public findAll(): Observable<Item[]> {
    if (this.usrId === null) {
      return this.http.get<Item[]>(this.itemsUrl);
    }
    return this.http.get<Item[]>(this.itemsUrl + this.usrId);
  }

  public like(id: number) {

    console.log(this.usrId);

    return this.http.put(this.itemsUrl, {itemId: id, userId: this.usrId});
  }

  public isMatch(id: number) {

    console.log('isMatch ?' + this.usrId);

    return this.http.post(this.itemsUrl, {itemId: id, userId: this.usrId});
  }

  public findMyItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.usersUrl);
  }

  public findMyLikedItems(): Observable<Item[]> {
    return this.http.get<Item[]>('http://localhost:8080/users/' + this.usrId + '/myLikedItems/');
  }

  public findById(id: number): Observable<Item> {
    return this.http.get<Item>(this.itemsUrl + id);
  }

  public save(item: Item) {

    console.log('Coucou cest le service ' + item._title);

    return this.http.post<Item>(this.usersUrl, item);
  }

  public savePicture(newItem: FormData) {

    return this.http.post<FormData>(this.usersUrl, newItem);
  }

  public updatePicture(item: FormData, itemId: number) {

    return this.http.put<FormData>(this.usersUrl + itemId, item);
  }

  public delete(id: number) {
    console.log('item removal');
    console.log(this.itemsUrl + id);
    return this.http.delete(this.usersUrl + id);
  }

}
