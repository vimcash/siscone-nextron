import { createAsyncThunk } from "@reduxjs/toolkit";
import getAPIYears from "../services/getAPIYears";

export const useGetYears = createAsyncThunk(
  'service/getAPIYears',
  async () => {
    const res = await getAPIYears()
    return res? res.data : undefined
  }
)