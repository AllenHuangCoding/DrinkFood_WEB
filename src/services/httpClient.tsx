import axiosApiClient from "../services/axiosClient";
// import useLoginStore from "../store/LoginStore";

// const GetZustandToken = () => {
//   const { loginData } = useLoginStore();
//   return loginData?.Token;
// };

async function GET<T>(url: string): Promise<BaseResponse<T>> {
  return await axiosApiClient.get(url).then((response) => response.data);
}

async function POST<T>(url: string, param: any): Promise<BaseResponse<T>> {
  return await axiosApiClient
    .post(url, param, {
      headers: {
        Authorization: "",
      },
    })
    .then((response) => response.data);
}

async function PUT<T>(url: string, param: any): Promise<BaseResponse<T>> {
  return await axiosApiClient
    .put(url, param, {
      headers: {
        Authorization: "",
      },
    })
    .then((response) => response.data);
}

export { GET, POST, PUT };
