const actions = {
  setReady: (state:any) => {
    state.appReady = true
  },
  unsetReady: (state:any) => {
    state.appReady = false
  }
}