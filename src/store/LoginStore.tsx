import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { devtools } from "zustand/middleware";

import { ResponseLoginModel } from "../models/models";

type LoginStore = {
  loginData: ResponseLoginModel | null;
  setLoginData: (newData: ResponseLoginModel) => void;
};

const useLoginStore = create<LoginStore>()(
  devtools(
    persist(
      (set) => ({
        loginData: null,
        setLoginData: (newData) => {
          set({ loginData: newData });
        },
      }),
      {
        name: "LoginStore",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default useLoginStore;
