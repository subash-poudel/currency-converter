import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useApiCurrencyList } from "../network/useApiCurrencyList";
import Select, { SingleValue } from "react-select";
import { Loading } from "../widgets/Loading";
import { AppError } from "../widgets/Error";
import { Currency } from "../models/Currency";
import { useState } from "react";
import { convertCurrency } from "../utils/util";

export function ConverterForm() {
  const { error, data, loading } = useApiCurrencyList();
  const [to, setTo] = useState<Currency | null>(null);
  const [from, setFrom] = useState<Currency | null>(null);
  const [toVal, setToVal] = useState<number>(1);
  const [fromVal, fromToVal] = useState<number>(1);

  if (error) {
    return <AppError message={error.message} />;
  }

  if (loading) {
    return <Loading />;
  }

  const { list: currencyList, map: currencyMap } = data;

  function onFirstCurrencySelected(data: SingleValue<Currency>) {
    console.log("first", data);
    setTo(data);
    calculateCurrency(true);
  }

  function onSecondCurrencySelected(data: SingleValue<Currency>) {
    console.log("second", data);
    setFrom(data);
    calculateCurrency(false);
  }

  function calculateCurrency(firstChanged: boolean) {
    if (!(from && to)) {
      return;
    }
    const denomination = firstChanged ? fromVal : toVal;
    const converted = convertCurrency(from, to, denomination, currencyMap);
  }

  const message = `${toVal} ${to?.value} = ${fromVal} ${from?.value}`;

  return (
    <Box>
      <p>First</p>
      <Grid container>
        <TextField
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          value={toVal}
        />
        <Select options={currencyList} onChange={onFirstCurrencySelected} value={to} />
      </Grid>
      <p>Second</p>
      <Grid container>
        <TextField
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          value={fromVal}
        />
        <Select
          options={currencyList}
          onChange={onSecondCurrencySelected}
          value={from}
        />
      </Grid>
      <p>{message}</p>
    </Box>
  );
}
