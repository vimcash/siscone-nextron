import { createAsyncThunk } from "@reduxjs/toolkit";
import getCurrUser from "../service/getCurrUser";

export const useGetCurrUser = createAsyncThunk(
  'service/getCurrUser',
  async () => {
    const resp = await getCurrUser()
    return resp.data
  }
)