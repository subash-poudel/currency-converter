import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Currency } from "../models/Currency";

interface CurrencyFormState {
  from: Currency;
  setFrom: (c: Currency) => void;
  to: Currency;
  setTo: (c: Currency) => void;
  fromValue: number;
  setFromValue: (n: number) => void;
  toValue: number;
  setToValue: (n: number) => void;
}

interface UiState {
  fromCurrencyList: Currency[];
  toCurrencyList: Currency[];
  allCurrencyList: Currency[];
}

// const useAppStore = create<BearState>()(
//   devtools(
//     persist(
//       (set) => ({
//         bears: 0,
//         increase: (by) => set((state) => ({ bears: state.bears + by })),
//       }),
//       {
//         name: "bear-storage",
//       }
//     )
//   )
// );
