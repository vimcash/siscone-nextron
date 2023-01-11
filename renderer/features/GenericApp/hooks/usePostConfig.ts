import { createAsyncThunk } from "@reduxjs/toolkit";
import { Config } from "../data/interfaces";
import { postConfig } from "../services/postConfig";

export const usePostConfig = createAsyncThunk(
  'service/postConfig',
  async (inConfig:Config) => {
    const config = await postConfig(inConfig)
    return config
  }
)