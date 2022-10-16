import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import { useApiCurrencyList } from "../network/useApiCurrencyList";
import Select from "react-select";
import { Loading } from "../widgets/Loading";
import { AppError } from "../widgets/Error";

export function ConverterForm() {
  const { error, data } = useApiCurrencyList();

  if (error) {
    return <AppError message={error.message} />;
  }

  if (!data || data.length === 0) {
    return <Loading />;
  }

  return (
    <Box>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
        <Select options={data} />
      </FormControl>
    </Box>
  );
}
