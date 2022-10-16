import { Currency, CurrencyData, CurrencyMap } from "../models/Currency";

export function getCurrencyAsArray(
  currencyNames: {
    [key: string]: string;
  },
  currencyValues: { [key: string]: number }
): CurrencyData {
  const list: Currency[] = [];
  const map: CurrencyMap = {};
  for (let [k, v] of Object.entries(currencyNames)) {
    const valuePerOneDollar = currencyValues[k];
    const currency = { label: v, value: k, valuePerOneDollar };
    map[k] = currency;
    list.push(currency);
  }
  return { list, map };
}

export function convertCurrency(
  from: Currency,
  to: Currency,
  denomination: number,
  rates: CurrencyMap
) {}
