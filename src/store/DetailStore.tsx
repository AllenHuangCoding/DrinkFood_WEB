import { create } from "zustand";

type DetailStore = {
  selectedDetailID: string;
  paymentVisible: boolean;
  OrderRefetch: () => void;

  setSelectedDetailID: (newData: string) => void;
  setPaymentVisible: (newData: boolean) => void;
  setOrderRefetch: (newData: () => void) => void;
};

const useDetailStore = create<DetailStore>()((set) => ({
  selectedDetailID: "",
  paymentVisible: false,
  OrderRefetch: () => {},

  setSelectedDetailID: (newValue: string) => {
    set({ selectedDetailID: newValue });
  },
  setPaymentVisible: (newValue: boolean) => {
    set({ paymentVisible: newValue });
  },
  setOrderRefetch: (newFunc: () => void) => {
    set({ OrderRefetch: newFunc });
  },
}));

export default useDetailStore;
