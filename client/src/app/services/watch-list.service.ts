import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/watchList';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {
  constructor(private http: HttpClient) { }
  private baseUri = "http://localhost:8080/todo";

  addTask(task: string) {
    let data = { task: task, completed: false };
    return this.http.post(this.baseUri, data, { observe: "response" });
  }

  getTaskList() {
    return this.http.get<Task[]>(this.baseUri);
  }

  toggleTask(task: string) {
    return this.http.put(`${this.baseUri}/${task}`, null, { observe: "response" });
  }

  removeTask(task: string) {
    return this.http.delete(`${this.baseUri}/${task}`, { observe: "response" });
  }
}
