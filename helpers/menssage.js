import 'colors'
import readline from "readline";

export const showMainMenu = () => {

  return new Promise(resolve=>{

    console.clear()
    console.log('============================='.red)
    console.log('    seleccione una opción'.green)
    console.log('============================='.red)
    console.log(`${'1.'.green} Crear tareas`)
    console.log(`${'2.'.green} Listar todas las tareas`)
    console.log(`${'3.'.green} Listart tareas completadas`)
    console.log(`${'4.'.green} Listar tareas pendientes`)
    console.log(`${'5.'.green} Completar Tarea(s)`)
    console.log(`${'6.'.green} Borrar tarea`)
    console.log(`${'0.'.green} Salir \n`)
  
    const mainMenu = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  
    mainMenu.question('Seleccione una opción: ', opt => {
      resolve(opt)
      mainMenu.close()
    } )
  })
}

export const showPause = () => {

  return new Promise(resolve => {
    const pause = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  
    pause.question(`\nPresiona ${'ENTER'.green} para continuar\n`, () => {
      pause.close()
      resolve()
    } )
  })
}