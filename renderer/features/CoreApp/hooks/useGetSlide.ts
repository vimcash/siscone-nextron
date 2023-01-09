import { createAsyncThunk } from "@reduxjs/toolkit";
import getAPISlide from "../services/getAPISlide";

export const useGetSlide = createAsyncThunk(
  'service/getAPISlide',
  async (queryWhere:string) => {
    const res = await getAPISlide({queryWhere})
    return res? res.data : undefined
  }
)