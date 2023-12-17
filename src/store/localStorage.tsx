"use client";

const GetAccountID = () => {
  if (typeof localStorage !== "undefined") {
    const logindata = JSON.parse(localStorage.getItem("LoginStore")!);
    return logindata?.state?.loginData?.AccountID ?? "";
  }
  return "";
};

const GetToken = () => {
  if (typeof localStorage !== "undefined") {
    const logindata = JSON.parse(localStorage.getItem("LoginStore")!);
    return logindata?.state?.loginData?.Token ?? "";
  }
  return "";
};

export { GetAccountID, GetToken };
