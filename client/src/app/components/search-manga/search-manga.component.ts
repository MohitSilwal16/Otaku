import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Manga } from '../../model/manga';
import { MangaService } from '../../services/manga.service';

@Component({
  selector: 'app-search-manga',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './search-manga.component.html',
  styleUrl: './search-manga.component.css',
  providers: [MangaService]
})
export class SearchMangaComponent implements OnInit {
  constructor(private mangaService: MangaService) { }

  ngOnInit(): void {
    this.mangaService.getMangaList().subscribe(
      res => this.mangaList = res
    );

    this.mangaService.getGenreList().subscribe(res => {
      this.genres.push("All");
      this.genres = this.genres.concat(res);
    });
  }
  mangaList: Manga[] = [];
  genres: string[] = [];

  filterMangaListByGenre(genre: string) {
    this.mangaService.filterMangaByGenre(genre).subscribe(
      res => this.mangaList = res
    );
  }
}
