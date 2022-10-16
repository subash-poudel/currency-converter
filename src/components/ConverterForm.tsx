import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { Box } from "@mui/system";

export function ConverterForm() {
  return (
    <Box>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
    </Box>
  );
}
