import { createAsyncThunk } from "@reduxjs/toolkit";
import putSlide from "../services/putSlide";
import putTotals from "../services/putTotals";

export const usePutSlide = createAsyncThunk(
  'service/putSlide',
  async ({queryWhere, category}:any) => {
    
    const slides = await putSlide(queryWhere, category)
    const totals = await putTotals(queryWhere, category)
    return {slides, totals: totals[0]}
  }
)