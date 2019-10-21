import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUsrSubject: BehaviorSubject<any>;
    public currentUsr: Observable<any>;

    constructor(private http: HttpClient) {
        this.currentUsrSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUsr')));
        this.currentUsr = this.currentUsrSubject.asObservable();
    }

    public get currentUserValue() {
        return this.currentUsrSubject.value;
    }

    login(userName: string, passWord: string) {
        return this.http.get<number>(`http://localhost:8080/users/validateLogin`, {params: {username: userName, password: passWord}})
            .pipe(map(usrId => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUsr', JSON.stringify(usrId));
                this.currentUsrSubject.next(usrId);
                return usrId;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUsr');
        this.currentUsrSubject.next(null);
    }
}
