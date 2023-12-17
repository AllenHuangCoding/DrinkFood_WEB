import { create } from "zustand";
import { ViewDrinkFood } from "../models/models";

type DrinkFoodDialogStore = {
  visible: boolean;
  selectedDrinkFood: ViewDrinkFood | null;

  setVisible: (newValue: boolean) => void;
  setSelectedDrinkFood: (newValue: ViewDrinkFood | null) => void;
};

const useDrinkFoodDialogStore = create<DrinkFoodDialogStore>()((set) => ({
  visible: false,
  selectedDrinkFood: null,
  setVisible: (newValue: boolean) => {
    set({ visible: newValue });
  },
  setSelectedDrinkFood: (newValue: ViewDrinkFood | null) => {
    set({ selectedDrinkFood: newValue });
  },
}));

export default useDrinkFoodDialogStore;
