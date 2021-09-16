import fs, { existsSync, readFileSync } from 'fs'

const dbPath = './db/data.json'

export const saveDB = ( data ) => {  
  fs.writeFileSync( dbPath, JSON.stringify( data ) )
}

export const readDB = () => {
  if( !fs.existsSync(dbPath) ){
    return null
  }

  const info = fs.readFileSync(dbPath, { encoding: 'utf-8' })
  return JSON.parse( info )
}