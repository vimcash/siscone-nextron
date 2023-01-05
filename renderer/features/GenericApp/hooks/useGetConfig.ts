import { createAsyncThunk } from "@reduxjs/toolkit";
import getAPIConfig from "../services/getAPIConfig";

export const useGetConfig = createAsyncThunk(
  'service/getAPIConfig',
  async () =>{
    const res = await getAPIConfig()
    return res.data
  }
)