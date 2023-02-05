export const getNameByRowType = (rowType) => {
  switch (rowType) {
    case 'breakfast': {
      return 'Desayuno'
    }
    case 'lunch': {
      return 'Almuerzo'
    }
    case 'dinner': {
      return 'Cena'
    }
  }
}