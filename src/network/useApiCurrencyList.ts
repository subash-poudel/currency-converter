import useSWR from "swr";
import { Currency, CurrencyListResponse } from "../models/Currency";
import currencyList from "../sampleData/allCurrency.json";
import { getCurrencyAsArray } from "../utils/util";

const fetcher = (): Promise<any> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(currencyList);
    }, 3000);
  });
};

export function useApiCurrencyList() {
  const { data, error } = useSWR("/api/list", fetcher);
  let currencies: Currency[] = [];
  if (data) {
    const response = data as CurrencyListResponse;
    currencies = getCurrencyAsArray(response.currencies);
    console.log(currencies);
  }
  return { data: currencies, error };
}
