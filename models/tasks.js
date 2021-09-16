import Task from "./task.js"

export default class Tasks {
  _list = {}

  get listOfTasks() {
    const tasks = Object.values(this._list)
    return tasks
  }

  constructor(){
    this._list = {}
  }

  setTask(description = '') {
    const task = new Task(description)
    this._list[task.id] = task
  }

  generateTasksFromArray( tasks = [] ) {
    tasks.forEach(task => this._list[task.id] = task)
  }
}