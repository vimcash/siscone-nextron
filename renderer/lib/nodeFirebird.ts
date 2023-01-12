import Firebird from 'node-firebird'
import { FirebirdConn } from '../utils/interfaces/FirebirdConn'
import { useAppSelector } from '../hooks'
import { selectDbHost } from '../states/globalState/globalState'

export const nodeFirebird = async(query: string) => {
  const dbHost = useAppSelector(selectDbHost)
 
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