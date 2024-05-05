import { Component, OnInit } from '@angular/core';
import { Anime } from '../../model/anime';
import { NgFor, NgIf } from '@angular/common';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-search-anime',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './search-anime.component.html',
  styleUrl: './search-anime.component.css',
  providers: [AnimeService]
})
export class SearchAnimeComponent implements OnInit {
  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animeService.getAnimeList().subscribe(
      res => this.animeList = res
    );

    this.animeService.getGenreList().subscribe(res => {
      this.genres.push("All");
      this.genres = this.genres.concat(res);
    });
  }
  animeList: Anime[] = [];
  genres: string[] = [];

  filterAnimeListByGenre(genre: string) {
    this.animeService.filterAnimeByGenre(genre).subscribe(
      res => this.animeList = res
    );
  }
}
