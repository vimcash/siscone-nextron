import Firebird from 'node-firebird'
import { FirebirdConn } from '../utils/interfaces/FirebirdConn'

export const nodeFirebird = async(query: string) => {
  const connectionString:FirebirdConn = {
    host: '192.168.0.14',
    port: 3050,
    database: 'C:\\app\\CardSlide\\CARDSLIDE.FDB',
    user: 'SYSDBA',
    password: 'masterkey'
  }
  
  return new Promise((resolve, reject) => {
    Firebird.attach(connectionString,(err, db) => {
      if(err)
        reject(err)

      db.query(query, undefined,(err, result) => err? reject(err) : resolve(result))
      db.detach()
    })
  })
}