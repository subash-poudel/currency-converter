import { Box, Grid } from "@mui/material";
import { ConverterForm } from "../components/ConverterForm";

function Main() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <ConverterForm />
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
