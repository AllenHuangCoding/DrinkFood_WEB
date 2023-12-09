import axios from "axios";
import { GetToken } from "../store/localStorage";

const axiosApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
});

// 增加自訂擴展方法
axiosApiClient.interceptors.request.use(
  (config) => {
    // 在請求執行之前的邏輯，在此處增加標頭與權限的判斷
    config.headers.Authorization = GetToken();
    return config;
  },
  (error) => {
    // 處理錯誤請求
    return Promise.reject(error);
  }
);

export default axiosApiClient;
