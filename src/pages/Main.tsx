import { Box, Grid } from "@mui/material";
import { ConverterForm } from "../components/ConverterForm";

function Main() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <p style={{ backgroundColor: "red" }}>one</p>
        </Grid>
        <Grid item xs={8}>
          <p style={{ backgroundColor: "blue" }}>two</p>
          <ConverterForm />
        </Grid>
        <Grid item xs={2}>
          <p style={{ backgroundColor: "grey" }}>three</p>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
