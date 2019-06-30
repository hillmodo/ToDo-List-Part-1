import { Component } from '@angular/core';

interface ToDo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoListLab1';
  toDoComponent : ToDo[] = [
    {
      task: "Reserve a Uhaul",
      completed: true,
    },
    {
      task: "Rent a storage unit",
      completed: true,
    },
    {
      task: "Pack my books",
      completed: true,
    },
    {
      task: "Organize my art",
      completed: false,
    },
    {
      task: "Donate old clothes",
      completed: false,
    },
    {
      task: "Clear out the linen cabinet",
      completed: false,
    },
    {
      task: "Call city for a special pick-up",
      completed: false,
    }
  ]


}
