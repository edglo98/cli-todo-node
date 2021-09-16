import inquirer from 'inquirer'
import 'colors'

const menuQuestion = [
  {
    type: 'list',
    name: 'option',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: '1',
        name: `${'1.'.green} Crear tarea.`
      },
      {
        value: '2',
        name: `${'2.'.green} Listar tareas.`
      },
      {
        value: '3',
        name: `${'3.'.green} Listar tareas tareas completadas.`
      },
      {
        value: '4',
        name: `${'4.'.green} Listar tareas pendientes.`
      },
      {
        value: '5',
        name: `${'5.'.green} Completar tarea(s).`
      },
      {
        value: '6',
        name: `${'6.'.green} Borrar tarea.`
      },
      {
        value: '0',
        name: `${'0.'.green} Salir`
      }
    ]
  }
]

const doPauseProps = [
  {
    type: 'input',
    name: 'pause',
    message: `Preciones ${'ENTER'.green} para continuar.`,
    // validate: async input => input === 'enter' 
  }
]

export const inquirerMenu = async() => {
  console.clear() 
  console.log('============================='.red)
  console.log('    seleccione una opción'.white)
  console.log('============================='.red)

  const { option } = await inquirer.prompt(menuQuestion)
  return option 
}

export const doPause = async() => {
  console.log('\n')
  await inquirer.prompt(doPauseProps)
}

export const getInputTask = async(message) => {
  const inputTaskProps = [
    {
      type: 'input',
      name: 'taskInput',
      message,
      validate (value) {
        if(value.length === 0){
          return 'Por favor ingrese un valor'
        }
        return true
      }
    }
  ]
  const { taskInput } = await inquirer.prompt(inputTaskProps)
  
  return taskInput
}