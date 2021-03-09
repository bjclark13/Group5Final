import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasteDiveService {
  apiKey = "404369-AprilTop-1D5TOMF0";
  url = "http://localhost:8080/api/similar";
  entertainmentResults: any[] = [];

  constructor(private http: HttpClient) { }

  getTaste() {
    const requestUrl = 
      this.getUrlWithAPIKey(); // add whatever params you want from here: https://developers.themoviedb.org/3/discover/movie-discover
      console.log(requestUrl)

    this.http.get(requestUrl).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getUrlWithAPIKey() {
    return 'http://localhost:8080/api/similar?q=Guardians%20Of%20The%20Galaxy%20Vol.%202&k=404369-AprilTop-1D5TOMF0'
    // return `${this.url}?k=${this.apiKey}`;
    // return `${this.url}?  &k=${this.apiKey}`;
  }
}
