import { createAsyncThunk } from "@reduxjs/toolkit";
import { readConfig } from "../utils";

export const useReadConfig = createAsyncThunk(
  'utils/readConfig',
  async () => {
    const config:any = await readConfig()
    return config
  }
)