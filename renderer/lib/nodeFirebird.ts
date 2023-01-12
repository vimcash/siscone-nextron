import Firebird from 'node-firebird'
import { FirebirdConn } from '../utils/interfaces/FirebirdConn'
import { getDbHost } from '../data'

export const nodeFirebird = (query: string):any => {
  const dbHost = getDbHost()
  const connectionString:FirebirdConn = {
    host: `${dbHost}`,
    port: 3050,
    database: 'C:\\app\\CardSlide\\CARDSLIDE.FDB',
    user: 'SYSDBA',
    password: 'masterkey'
  }
  return new Promise((resolve, reject) => {
    Firebird.attach(connectionString,(err, db) => {
      if(err) {
        console.log(err, dbHost)
        return
      }

      db.query(query, [],(err, result) => err? console.log(err) : resolve(result))
      db.detach()
    })
  })
}
