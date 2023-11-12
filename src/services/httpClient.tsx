import { axiosApiClient } from "../services/axiosClient";

async function GET<T>(url: string): Promise<BaseResponse<T>> {
  return await axiosApiClient.get(url).then((response) => response.data);
}

export { GET };
