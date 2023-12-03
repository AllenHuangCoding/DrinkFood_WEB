import axios from "axios";

const axiosApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
  headers: {
    Authorization:
      "Bearer f0e38c50eb7b4696.MfnWtmYpJO5b3nHtNY6GHQB/0Cs70q6xIAS4/eeVZ5M9YdrXkWHHZs8WM/vgLf0eaP7afYfonoDE5wrMLz67g3nagb8IlTFXUl07D5WO3IE2ByCEMHT3KO9OUyFZHDJqMNCm5Rjx07gK/MZlkrfAHw5mv+uaQ+GF6ILLl6TZkr6nrgiAXf8U035MLb2WjBY/.C3FAB225523304FDBEB7672EB9BB1017E22663A767FBCF8EF427B1ED15368279",
  },
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
  headers: {
    Authorization:
      "Bearer f0e38c50eb7b4696.MfnWtmYpJO5b3nHtNY6GHQB/0Cs70q6xIAS4/eeVZ5M9YdrXkWHHZs8WM/vgLf0eaP7afYfonoDE5wrMLz67g3nagb8IlTFXUl07D5WO3IE2ByCEMHT3KO9OUyFZHDJqMNCm5Rjx07gK/MZlkrfAHw5mv+uaQ+GF6ILLl6TZkr6nrgiAXf8U035MLb2WjBY/.C3FAB225523304FDBEB7672EB9BB1017E22663A767FBCF8EF427B1ED15368279",
  },
});

export { axiosApiClient, axiosLocalClient };
