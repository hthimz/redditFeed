import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private baseUrl:string = "https://www.reddit.com/";
constructor(  private http: HttpClient){

}
get(url:string){
  console.log("Get called",url);
  
}
getData (url:string) {
  return this.http.get(this.baseUrl+url)
}

}
