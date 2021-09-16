import 'colors'
import { inquirerMenu, doPause, getInputTask } from './helpers/inquirer.js'
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
        console.log(tasks.listOfTasks)
      break
    }

    saveDB( tasks.listOfTasks )
    
    await doPause()
    
  } while(opt !== '0')
}

main()