import useSWR from "swr";
import {
  Currency,
  CurrencyData,
  CurrencyListResponse,
  CurrencyMap,
  CurrencyValueResponse,
} from "../models/Currency";
import currencyList from "../sampleData/allCurrency.json";
import liveCurrency from "../sampleData/liveCurrency.json";

import { getCurrencyAsArray } from "../utils/util";
// data from the following api
// https://apilayer.com/marketplace/exchangerates_data-api?txn=free&live_demo=show
const listFetcher = (): Promise<any> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(currencyList);
    }, 3000);
  });
};

const currencyValueFetcher = (): Promise<any> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(liveCurrency);
    }, 3000);
  });
};

export function useApiCurrencyList() {
  const { data: listData, error: listError } = useSWR("/api/list", listFetcher);
  const { data: liveData, error: liveError } = useSWR(
    "/api/live",
    currencyValueFetcher
  );
  const error = listError || liveError;

  let currencies: CurrencyData = { list: [], map: {} };

  const fetchedData = listData && liveData;

  if (fetchedData) {
    const listResponse = listData as CurrencyListResponse;
    const valueResponse = liveData as CurrencyValueResponse;
    currencies = getCurrencyAsArray(
      listResponse.currencies,
      valueResponse.rates
    );
  }

  return { data: currencies, error, loading: !fetchedData };
}
