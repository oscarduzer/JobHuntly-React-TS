import { Box, Button,InputAdornment, FormControl, Select, MenuItem, Grid, FilledInput } from '@mui/material';
import { Search, LocationOn } from '@mui/icons-material';

const SearchBar = () => {
  return (
    <Box id="searchBox" sx={{ backgroundColor: 'white', p: 2, display: 'flex', alignItems: 'center', ml:6, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', marginTop: '50px', marginBottom: '20px'  }}>
      <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={4} sx={{ mt:-1}}>
  <FormControl variant="filled">
    <FilledInput 
      sx={{background: '#fff', border: 'none', borderBottom: '0.5 solid', height: '40px'}}
      startAdornment={
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      }
      placeholder="Job title or keyword"
    />
  </FormControl>
</Grid>
        <Grid item xs={12} sm={4}>
          <FormControl variant="standard" fullWidth>
            <Select
              value="Florence, Italy"
              startAdornment={
                <InputAdornment position="start">
                  <LocationOn />
                </InputAdornment>
              }
            >
              <MenuItem value="Florence, Italy">Florence, Italy</MenuItem>
              {/* Ajoutez d'autres MenuItem ici pour d'autres options dans le dropdown */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="contained" sx={{ borderRadius:0 }} color="primary" >Search </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBar;
