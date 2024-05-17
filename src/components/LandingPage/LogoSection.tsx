
import { Box, Typography, Grid } from '@mui/material';

function LogoSection() {
  return (
    <Box sx={{ mt: 5, ml: 12 }}>
      <Typography variant="h4" sx={{mt:-10, mb: 2, fontSize: '19px', opacity: 0.5, ml:1, fontFamily: "-moz-initial" }}>Companies we helped grow</Typography>
      <Grid container spacing={10}>
        <Grid item><img src="src\assets\images\Vodafone.jpg" alt="Vodafone" /></Grid>
        <Grid item><img src="src\assets\images\Intel.jpg" alt="Intel" /></Grid>
        <Grid item><img src="src\assets\images\Tesla.jpg" alt="Tesla" /></Grid>
        <Grid item><img src="src\assets\images\AMD.jpg" alt="AMD" /></Grid>
        <Grid item><img src="src\assets\images\Talkit.jpg" alt="Talkit" /></Grid>
      </Grid>
    </Box>
  );
}

export default LogoSection;
