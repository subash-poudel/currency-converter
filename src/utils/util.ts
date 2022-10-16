import { Currency } from "../models/Currency";

export function getCurrencyAsArray(
  currencyNames: {
    [key: string]: string;
  },
  currencyValues: { [key: string]: number }
): Currency[] {
  const list: Currency[] = [];
  for (let [k, v] of Object.entries(currencyNames)) {
    const valuePerOneDollar = currencyValues[k];
    list.push({ label: v, value: k, valuePerOneDollar });
  }
  return list;
}
