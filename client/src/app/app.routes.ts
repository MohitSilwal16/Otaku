import { Routes } from '@angular/router';
import { SearchAnimeComponent } from './components/search-anime/search-anime.component';
import { SearchMangaComponent } from './components/search-manga/search-manga.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: "Search-Anime", component: SearchAnimeComponent },
    { path: "Search-Manga", component: SearchMangaComponent },
    { path: "Watchlist", component: WatchlistComponent },
    { path: "", redirectTo: "Search-Anime", pathMatch: "full" },
    { path: "**", component: PageNotFoundComponent },
];
