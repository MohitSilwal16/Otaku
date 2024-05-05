import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manga } from '../model/manga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  constructor(private http: HttpClient) { }

  private baseUri = "http://localhost:8080/manga";

  getMangaList() {
    return this.http.get<Manga[]>(this.baseUri);
  }

  filterMangaByGenre(genre: string) {
    return this.http.get<Manga[]>(`${this.baseUri}/${genre}`);
  }

  getGenreList() {
    return this.http.get<string[]>(`${this.baseUri}/genre`);
  }
}