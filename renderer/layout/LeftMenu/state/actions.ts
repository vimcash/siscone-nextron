import { PayloadAction } from "@reduxjs/toolkit";

const actions = {
  setToggle: (state) => {
    state.toogleMenu = !state.toogleMenu
  }
}

export default actions