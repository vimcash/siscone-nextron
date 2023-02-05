export const getCheckBoxByTemp = (temporality) => {
  const returnCheckBox = {
    year: false,
    month: false,
    day: false
  }
  switch(temporality){
    case 'Year':{
      returnCheckBox.year = true
      break
    }
    case 'Month':{
      returnCheckBox.month = true
      break
    }
    case 'Day':{
      returnCheckBox.day = true
      break
    }
  }
  return returnCheckBox
}