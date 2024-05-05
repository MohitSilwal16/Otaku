import { Component, OnInit } from '@angular/core';
import { WatchListService } from '../../services/watch-list.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { Task } from '../../model/watchList';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css',
  providers:[WatchListService],
})
export class WatchlistComponent implements OnInit{
constructor(private watchListService: WatchListService) { }
  taskList: Task[] = [];

  ngOnInit(): void {
    this.watchListService.getTaskList().subscribe(taskList => {
      this.taskList = taskList;
    });
  }

  task = "";

  addTask() {
    this.watchListService.addTask(this.task).subscribe(resonse => {
      if (resonse.status === 200) {
        this.taskList.push({ task: this.task, completed: false });
        this.task = "";
      }
    });
  }

  searchTask(task: string): Task {
    let temp: Task | any;
    this.taskList.forEach(t => {
      if (t.task == task) {
        temp = t;
        return;
      }
    });
    return temp;
  }

  toggleTask(taskName: string) {
    this.watchListService.toggleTask(taskName).subscribe(res => {
      if (res.status === 200) {
        let task = this.searchTask(taskName);
        task.completed = !task.completed;
      }
    }
    );
  }

  removeTask(taskName: string) {
    this.watchListService.removeTask(taskName).subscribe(res => {
      if (res.status === 200) {
        for (let i = 0; i < this.taskList.length; ++i) {
          if (this.taskList[i].task === taskName) {
            this.taskList.splice(i, 1);
          }
        }
      }
    }
    );
  }
}
