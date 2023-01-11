import {readFile as run} from 'fs'
export const readFile = async () => {
  run("C:\\app\\CardSlide\\return.json",async (err, data) => {
    return new Promise(resolve => (event, response) => resolve());
  })
}



function asPromise(context, callbackFunction, ...args) {
  return new Promise((resolve, reject) => {
      args.push((err, data) => {
          if (err) {
              reject(err);
          } else {
              resolve(data);
          }
      });
      if (context) {
          callbackFunction.call(context, ...args);
      } else {
          callbackFunction(...args);
      }
  });
}

const Prueba = async () => {
  return await asPromise(this, api.on, 'someEvent');
}