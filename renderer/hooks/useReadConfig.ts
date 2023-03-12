import { createAsyncThunk } from "@reduxjs/toolkit";
import { setDbHost } from "../data";
import { readConfig } from "../utils";

export const useReadConfig = createAsyncThunk(
  'utils/readConfig',
  async () => {
    const config:any = await readConfig()
    setDbHost(config.dbHost)
    return config
  }
)