export const v2301291 = {
  id: '2301291',
  query: `
    ALTER TABLE CONFIG
      ADD DB_VERSION VARCHAR(8)
      DEFAULT '2301291' 
      NOT NULL; 
  `
}