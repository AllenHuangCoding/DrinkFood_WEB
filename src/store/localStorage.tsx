const GetAccountID = () => {
  const logindata = JSON.parse(localStorage.getItem("LoginStore")!);
  return logindata?.state?.loginData?.AccountID ?? "";
};

const GetToken = () => {
  const logindata = JSON.parse(localStorage.getItem("LoginStore")!);
  return logindata?.state?.loginData?.Token ?? "";
};

export { GetAccountID, GetToken };
