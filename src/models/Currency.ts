export type Currency = {
  value: string;
  label: string;
  valuePerOneDollar: number;
};

export type CurrencyListResponse = {
  currencies: { [key: string]: string };
  success: boolean;
};

export type CurrencyValueResponse = {
  base: string;
  date: string;
  rates: { [key: string]: number };
  success: boolean;
  timestamp: number;
};

export type CurrencyMap = {
  [key: string]: Currency;
};

export type CurrencyData = {
  list: Currency[];
  map: CurrencyMap;
}
