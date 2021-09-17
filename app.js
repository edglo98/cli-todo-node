import 'colors'
import { inquirerMenu, doPause, getInputTask, listOfTasksCanDelete, confirm, checkListOfTasks } from './helpers/inquirer.js'
import { readDB, saveDB } from './helpers/saveData.js'
import Tasks from './models/tasks.js'

const main = async() => {
  let opt = ''
  const tasks  = new Tasks()

  const taskFromDB = readDB()

  if( taskFromDB ) {
    tasks.generateTasksFromArray(taskFromDB)
  }

  do{
    opt = await inquirerMenu()
    
    switch (opt) {
      case '1':
        const taskInfo = await getInputTask('Descripción: ')
        tasks.setTask(taskInfo)
      break
    
      case '2':
        tasks.getAllTasks({finished: true, pending: true})
      break

      case '3':
        tasks.getAllTasks({finished: true})
      break

      case '4':
        tasks.getAllTasks({pending: true})
      break

      case '5':
        const ids = await checkListOfTasks( tasks.listOfTasks )
        tasks.toggleTasksStatus( ids )
      break

      case '6':
        const id = await listOfTasksCanDelete( tasks.listOfTasks )
        const ok = await confirm('¿Está seguro que desea eliminar esta tarea?')

        if( ok ){
          tasks.deleteTask( id )
          console.log('Tarea Borrada.'.green)
        }
      break
    }

    saveDB( tasks.listOfTasks )

    await doPause()
    
  } while(opt !== '0')
}

main()