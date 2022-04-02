import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://6229de55be12fc4538aa6c8e.mockapi.io/users'
  constructor(private http: HttpClient) { }
}
