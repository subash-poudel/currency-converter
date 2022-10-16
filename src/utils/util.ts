import { Currency } from "../models/Currency";

export function getCurrencyAsArray(currencies: {
  [key: string]: string;
}): Currency[] {
  const list: Currency[] = [];
  for (let [k, v] of Object.entries(currencies)) {
    list.push({ label: v, value: k });
  }
  return list;
}
