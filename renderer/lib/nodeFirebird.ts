import Firebird from 'node-firebird'
import { FirebirdConn } from '../utils/interfaces/FirebirdConn'

  export const nodeFirebird = (query: string, dbHost="192.168.0.14") => {
    const connectionString:FirebirdConn = {
      host: dbHost,
      port: 3050,
      database: 'C:\\app\\CardSlide\\CARDSLIDE.FDB',
      user: 'SYSDBA',
      password: 'masterkey'
    }
    return new Promise((resolve, reject) => {
      Firebird.attach(connectionString,(err, db) => {
        if(err) {
          console.log(err)}

        db.query(query, undefined,(err, result) => err? reject(err) : resolve(result))
        db.detach()
      })
  })
}