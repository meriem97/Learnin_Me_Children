import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentifService {
  urlService="http://127.0.0.1/PFE/admin/";
  constructor(private http:HttpClient) { }


  verifUser(username:any,password:any):Observable<any>{
    let body={username:username,password:password};
    console.log(body)
    return this.http.post(this.urlService+"login.php",body);
  }
  register(user:any):Observable<any>{
    console.log(user)
    return this.http.post(this.urlService+"ajoututilisateur.php",user);
  }
}