let dbHost:any
export const Config = {
  setDbHost: (dbHost:string) => {
    dbHost = dbHost
  },
  getDbHost: () => {
    return dbHost
  }
}