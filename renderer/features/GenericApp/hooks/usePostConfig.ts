import { createAsyncThunk } from "@reduxjs/toolkit";
import { Config } from "../data/interfaces";
import postAPIConfig from "../services/postAPIConfig";

export const usePostConfig = createAsyncThunk(
  'service/postAPIConfig',
  async (inConfig:Config) =>{
    const res = await postAPIConfig(inConfig)
    return res? res.data : undefined
  }
)