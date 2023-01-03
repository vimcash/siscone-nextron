import axios from "../lib/axios";
import { RequestType } from "../utils/RequestType";

export const useFetch = (type:RequestType, url:string, data:any = null) => axios({type, url, data})