import { createAsyncThunk } from "@reduxjs/toolkit";
import postAPISlide from "../services/postAPISlide";

export const usePostSlide = createAsyncThunk(
  'service/postAPISlide',
  async (inCode:string) => {
    const res = await postAPISlide({inCode})
    return res? res.data : undefined
  }
)