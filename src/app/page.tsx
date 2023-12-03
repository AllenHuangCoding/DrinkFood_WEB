"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "primereact/button";
import { Login } from "../services/admin/AccountService";
import { useForm } from "react-hook-form";
import ControlTextInput from "../components/form/ControlTextInput";
import ControlPassword from "../components/form/ControlPassword";
import { RequestLoginModel } from "../models/models";

const LoginPage = () => {
  const router = useRouter();

  const defaultValues: RequestLoginModel = {
    Email: "",
    Password: "",
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = (formData: RequestLoginModel) => {
    Login(formData).then((data) => {
      localStorage.setItem("AccountID", data.AccountID);
      localStorage.setItem("Token", data.Token!);
      reset();
      router.push("/main");
    });
  };
  return (
    <div className="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden p-input-filled">
      <div className="flex flex-column align-items-center justify-content-center">
        {/* <img
          src={`/layout/images/logo-light.svg`}
          alt="Sakai logo"
          className="mb-5 w-6rem flex-shrink-0"
        /> */}
        <div
          style={{
            borderRadius: "56px",
            padding: "0.3rem",
            background:
              "linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)",
          }}
        >
          <div
            className="w-full surface-card py-8 px-5 sm:px-8"
            style={{ borderRadius: "53px" }}
          >
            <div className="text-center mb-5">
              <img
                src="/demo/images/login/avatar.png"
                alt="Image"
                height="50"
                className="mb-3"
                width="50"
              />
              <div className="text-900 text-3xl font-medium mb-3">Welcome</div>
              <span className="text-600 font-medium">趕快登入點餐</span>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-column gap-3"
            >
              <label
                htmlFor="email"
                className="block text-900 text-xl font-medium mb-2"
              >
                信箱
              </label>

              <ControlTextInput
                name={"Email"}
                control={control}
                rules={{
                  required: "必填欄位",
                }}
                placeholder="@chase.com.tw"
                errorKey={errors.Email}
                className="w-full md:w-30rem p-3"
              />

              <label
                htmlFor="password"
                className="block text-900 font-medium text-xl mb-2"
              >
                密碼
              </label>
              <ControlPassword
                name={"Password"}
                control={control}
                rules={{
                  required: "必填欄位",
                }}
                placeholder="你的密碼"
                errorKey={errors.Password}
                className="w-full"
                inputClassName="w-full p-3 md:w-30rem"
              />

              <div className="flex align-items-center justify-content-between mb-5 gap-5">
                {/* <div className="flex align-items-center">
                  <Checkbox
                    inputId="rememberme1"
                    checked={checked}
                    onChange={(e) => setChecked(e.checked ?? false)}
                    className="mr-2"
                  ></Checkbox>
                  <label htmlFor="rememberme1">記住我</label>
                </div>
                <a
                  className="font-medium no-underline ml-2 text-right cursor-pointer"
                  style={{ color: "var(--primary-color)" }}
                >
                  忘記密碼?
                </a> */}
              </div>

              <Button
                type="submit"
                label="登入"
                className="w-full p-3 text-xl"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
