import axios from "axios";

const axiosApiClient = axios.create({
  baseURL: "https://localhost:44374/api",
});

// 增加自訂擴展方法
axiosApiClient.interceptors.request.use(
  (config) => {
    // 在請求執行之前的邏輯，在此處增加標頭與權限的判斷
    return config;
  },
  (error) => {
    // 處理錯誤請求
    return Promise.reject(error);
  }
);

const axiosLocalClient = axios.create({
  baseURL: process.env.API_BASEURL,
});

export { axiosApiClient, axiosLocalClient };