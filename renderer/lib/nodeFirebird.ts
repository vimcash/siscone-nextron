import Firebird from 'node-firebird'
import { FirebirdConn } from '../utils/interfaces/FirebirdConn'

export const nodeFirebird = (query: string) => {
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

    db.query(query, undefined, (err, result) => {
      db.detach()
      return err ? undefined : result
    })
  })
}