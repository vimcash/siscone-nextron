export const randomDate = (start:string, end:string) => {
  if (start.length != 10 || end.length != 10)
    throw 'bad input'
  const startDate = new Date(start);
  const endDate = new Date(end);
  const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
  return new Date(randomTime);
}