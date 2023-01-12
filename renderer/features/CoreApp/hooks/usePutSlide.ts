import { createAsyncThunk } from "@reduxjs/toolkit";
import putSlide from "../services/putSlide";

export const usePutSlide = createAsyncThunk(
  'service/putSlide',
  async (queryWhere:string) => {
    const res:any = await putSlide(queryWhere)
    return res
  }
)