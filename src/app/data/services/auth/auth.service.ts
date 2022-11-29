import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ILogin, IUserResponse } from '../../../core/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  login(data: ILogin): Observable<IUserResponse> {
    return this._http.get<IUserResponse>('/auth');
    // deberia ser un post
    // solo se uso un get para seguir el curso
    // return this._http.get<IUserResponse>('auth', data);
  }
}
