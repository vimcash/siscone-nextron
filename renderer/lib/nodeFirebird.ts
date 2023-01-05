import Firebird from 'node-firebird'
import { FirebirdConn } from '../utils/interfaces/FirebirdConn'

export const nodeFirebird = (query: string, callback: Function) => {
  const connectionString:FirebirdConn = {
    host: '127.0.0.1',
    port: 3050,
    database: 'C:\\app\\CardSlide\\CARDSLIDE.FDB',
    user: 'SYSDBA',
    password: 'masterkey'
  }
  
  Firebird.attach(connectionString,(err, db) => {
    if(err)
      console.log(err)
    db.query(query, undefined,(err, result) => callback(err ? err : result))
    db.detach()
  })
}