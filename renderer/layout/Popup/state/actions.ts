const actions = {
  hidePopup: (state) => {
    state.popupType = 'hide'
  },
  showAddProduct: (state) => {
    state.popupType = 'show'
  }
}

export default actions