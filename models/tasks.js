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

  getAllTasks({pending = false, finished = false}) {
    if(!pending && finished) {
      this.listOfTasks
        .filter(task => Boolean(task.finallyDate))
        .forEach((task, i) => console.log(`\n${`${i+1}`.green}. ${task.description}   ..::${ task.finallyDate ? `Finalizada (${task.finallyDate})`.green : 'Pendiente'.red }`) )
    }else if(pending && !finished){
      this.listOfTasks
        .filter(task => !Boolean(task.finallyDate))
        .forEach((task, i) => console.log(`\n${`${i+1}`.green}. ${task.description}   ..::${ task.finallyDate ? 'Finalizada'.green : 'Pendiente'.red }`) )
    }else{
      this.listOfTasks.forEach((task, i) => console.log(`\n${`${i+1}`.green}. ${task.description}   ..::${ task.finallyDate ? 'Finalizada'.green : 'Pendiente'.red }`) )
    }
  }

  deleteTask( id ) {
    if(this._list[id]){
      delete this._list[id]
    }
  }

  toggleTasksStatus( ids = [] ) {

    ids.forEach( id => {
      const task = this._list[id]

      if( !task.finallyDate ){
        task.finallyDate = new Date().toISOString()
      }
    })

    this.listOfTasks.forEach( task => {

      if( !ids.includes(task.id) ) {
        this._list[task.id].finallyDate = null
      }

    })

  }
}