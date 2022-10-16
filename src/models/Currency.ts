export type Currency = {
  value: string;
  label: string;
};

export type CurrencyListResponse = {
  currencies: { [key: string]: string };
  success: boolean;
};
