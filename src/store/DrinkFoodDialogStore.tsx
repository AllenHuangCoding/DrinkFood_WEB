import { create } from "zustand";
import { ViewDrinkFood } from "../models/models";

type DrinkFoodDialogStore = {
  visible: boolean;
  selectedDrinkFood: ViewDrinkFood | null;
  orderID: string | undefined;

  setVisible: (newValue: boolean) => void;
  setSelectedDrinkFood: (newValue: ViewDrinkFood | null) => void;
  setOrderID: (newValue: string) => void;
};

const useDrinkFoodDialogStore = create<DrinkFoodDialogStore>()((set) => ({
  visible: false,
  selectedDrinkFood: null,
  orderID: undefined,

  setVisible: (newValue: boolean) => {
    set({ visible: newValue });
  },
  setSelectedDrinkFood: (newValue: ViewDrinkFood | null) => {
    set({ selectedDrinkFood: newValue });
  },
  setOrderID: (newValue: string) => {
    set({ orderID: newValue });
  },
}));

export default useDrinkFoodDialogStore;
