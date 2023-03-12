import { createAsyncThunk } from "@reduxjs/toolkit";
import getConfig from "../services/getConfig";

export const useGetConfig = createAsyncThunk(
  'service/getConfig',
  async () => {
    const config:any = await getConfig()
    return config
  }
)