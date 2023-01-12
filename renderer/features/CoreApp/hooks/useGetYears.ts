import { createAsyncThunk } from "@reduxjs/toolkit";
import getYears from "../services/getYears";

export const useGetYears = createAsyncThunk(
  'service/getYears',
  async () => {
    const res:any = await getYears()
    return res
  }
)