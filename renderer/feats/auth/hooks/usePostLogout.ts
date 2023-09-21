import { createAsyncThunk } from "@reduxjs/toolkit"
import postAPILogout from "../service/postAPILogout"

export const usePostLogout = createAsyncThunk(
  'service/postAPILogout',
  async () => {
    const resp = await postAPILogout()
    return resp.data
  }
)