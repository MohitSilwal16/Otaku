import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anime } from '../model/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  constructor(private http: HttpClient) { }

  private baseUri = "http://localhost:8080/anime";

  getAnimeList(){
    return this.http.get<Anime[]>(this.baseUri);
  }

  filterAnimeByGenre(genre:string){
    return this.http.get<Anime[]>(`${this.baseUri}/${genre}`);
  }

  getGenreList(){
    return this.http.get<string[]>(`${this.baseUri}/genre`);
  }
}
