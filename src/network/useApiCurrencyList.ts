import useSWR from "swr";
import currencyList from "../sampleData/allCurrency.json";

const fetcher = (): Promise<any> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(currencyList);
    }, 3000);
  });
};

export function useApiCurrencyList() {
  const { data, error } = useSWR("/api/list", fetcher);
  const loading = !data;
  console.log(data);
  return { loading, data, error };
}
