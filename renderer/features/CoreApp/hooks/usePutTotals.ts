import { createAsyncThunk } from "@reduxjs/toolkit";
import putTotals from "../services/putTotals";

export const usePutTotals = createAsyncThunk(
  'service/putTotals',
  async ({queryWhere, category}:any) => {
    console.log(category)
    const res:any = await putTotals(queryWhere, category)
    console.log(res[0])
    return res[0]
  }
)