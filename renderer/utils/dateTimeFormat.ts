export const dateTimeFormat = (inDateTime: Date):string => inDateTime ? `${String(inDateTime.getHours()).padStart(2, '0')}:${String(inDateTime.getMinutes()).padEnd(2, '0')}`: ""