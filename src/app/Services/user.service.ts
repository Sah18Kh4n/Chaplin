import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:3000/user/"

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  findUser(id: number): Observable<User> {
    return this.httpClient.get<User>(this.url + '/id')
  }

  getAllUser(): Observable<any> {
    return this.httpClient.get(this.url)
  }

  postUser(id: number) {
    return this.httpClient.post(this.url, JSON.stringify, this.httpOption)
  }

  delete(id: number) {
    return this.httpClient.delete(this.url + id, this.httpOption)
  }
}
