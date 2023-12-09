import axiosApiClient from "../services/axiosClient";

async function GET<T>(url: string): Promise<BaseResponse<T>> {
  return await axiosApiClient.get(url).then((response) => response.data);
}

async function POST<T>(url: string, param: any): Promise<BaseResponse<T>> {
  return await axiosApiClient
    .post(url, param)
    .then((response) => response.data);
}

async function PUT<T>(url: string, param: any): Promise<BaseResponse<T>> {
  return await axiosApiClient.put(url, param).then((response) => response.data);
}

export { GET, POST, PUT };
