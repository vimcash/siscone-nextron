import Firebird from 'node-firebird'
import { FirebirdConn } from '../utils/interfaces/FirebirdConn'
const config = require("C:\\app\\CardSlide\\config.json")
export const nodeFirebird = async(query: string) => {
 
  const connectionString:FirebirdConn = {
    host: config.dbHost,
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