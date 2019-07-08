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

  constructor(){
    const toDoComponent =[
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
        completed: true,
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
    this.toDoComponent = toDoComponent;
    this.filterToDos = toDoComponent;
  }


  addItem(newTask){
    let input = {
      task: newTask,
      completed: false,
    }
    this.toDoComponent.push(input);
  }

  removeTask(i){
    this.toDoComponent.splice(i, 1);
  }

  completeTask(i){
    this.toDoComponent[i].completed = true;
  }

  toDoComponent : ToDo[];
  filterToDos : ToDo[];

}
