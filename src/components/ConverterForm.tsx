import { FormControl, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useApiCurrencyList } from "../network/useApiCurrencyList";
import Select, { SingleValue } from "react-select";
import { Loading } from "../widgets/Loading";
import { AppError } from "../widgets/Error";
import { Currency } from "../models/Currency";

export function ConverterForm() {
  const { error, data } = useApiCurrencyList();

  if (error) {
    return <AppError message={error.message} />;
  }

  if (!data || data.length === 0) {
    return <Loading />;
  }

  function onFirstCurrencySelected(data: SingleValue<Currency>) {
    console.log("first", data);
  }

  function onSecondCurrencySelected(data: SingleValue<Currency>) {
    console.log("first", data);
  }

  return (
    <Box>
      <FormControl>
        <p>First</p>
        <Grid container>
          <TextField inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} />
          <Select options={data} onChange={onFirstCurrencySelected} />
        </Grid>
        <p>Second</p>
        <Grid container>
          <TextField inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} value={1}/>
          <Select options={data} onChange={onSecondCurrencySelected} />
        </Grid>
      </FormControl>
    </Box>
  );
}
