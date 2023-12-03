import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { ResponseLoginModel } from "../models/models";

type LoginStore = {
  loginData: ResponseLoginModel | null;
  setLoginData: (newData: ResponseLoginModel) => void;
};

const useLoginStore = create<LoginStore>()(
  devtools((set) => ({
    loginData: null,
    setLoginData: (newData) => {
      set({ loginData: newData });
    },
  }))
);

export default useLoginStore;
