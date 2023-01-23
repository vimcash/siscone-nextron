import { createAsyncThunk } from "@reduxjs/toolkit";
import putSlide from "../services/putSlide";

export const usePutSlide = createAsyncThunk(
  'service/putSlide',
  async ({queryWhere, category}:any) => {
    console.log(category)
    const res:any = await putSlide(queryWhere, category)
    return res
  }
)