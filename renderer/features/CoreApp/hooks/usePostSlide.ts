import { createAsyncThunk } from "@reduxjs/toolkit";
import postSlide from "../services/postSlide";

export const usePostSlide = createAsyncThunk(
  'service/postSlide',
  async (inCode:string) => {
    const res:any = await postSlide(inCode)
    return res 
  }
)