import inquirer from 'inquirer'
import 'colors'

const menuQuestion = [
  {
    type: 'list',
    name: 'option',
    menssage: '¿Qué desea hacer?',
    choices: [
      'option1',
      'option2',
      'option3',
    ]
  }
]
export const inquirerMenu = async() => {
  console.clear()
  console.log('============================='.red)
  console.log('    seleccione una opción'.green)
  console.log('============================='.red)

  const opt = await inquirer.prompt(menuQuestion)
  return opt 
}