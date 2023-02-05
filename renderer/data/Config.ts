let dbHost:any
export const setDbHost = (inDBHost) => inDBHost !== dbHost? dbHost = inDBHost : undefined
export const getDbHost = () => dbHost