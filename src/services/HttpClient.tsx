import { axiosApiClient } from "../services/axiosClient";

async function GET<T>(url: string): Promise<BaseResponse<T>> {
  return await axiosApiClient.get(url).then((response) => response.data);
}

export { GET };

// _get(url : string): Promise<T> {
//   return this.http.get<T>(url : string);
// }

// get<T>(url : string, domain = ""): Promise<T> {
//   return this.http.get<T>(environment.apiUrl + url);
// }
// getStatic<T>(url : string): Promise<T> {
//   return this.http.get<T>(url : string);
// }

// post(url : string, data = null, options = {}): Promise<T> {
//   return this.http.post(environment.apiUrl + url, data, options);
// }
// put(url : string, data = null): Promise<T> {
//   return this.http.put(environment.apiUrl + url, data);
// }

// delete(url : string): Promise<T> {
//   return this.http.delete(environment.apiUrl + url);
// }
// getFile(url : string, options): Promise<T> {
//   return this.http.get<T>(environment.apiUrl + url, options);
// }
// sso_get<T>(url : string, domain = ""): Promise<T> {
//   return this.http.get<T>(environment.SSOAPI + url);
// }
// sso_put<T>(url : string, data = null): Promise<T> {
//   return this.http.put(environment.SSOAPI + url, data);
// }
