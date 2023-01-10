import { createAsyncThunk } from "@reduxjs/toolkit";
import putAPISlide from "../services/putAPISlide";

export const usePutSlide = createAsyncThunk(
  'service/putAPISlide',
  async (queryWhere:string) => {
    const res = await putAPISlide({queryWhere})
    return res? res.data : undefined
  }
)