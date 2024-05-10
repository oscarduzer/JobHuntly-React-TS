import { AppBar, Box, Toolbar, Typography, Button, Divider, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar sx={{ boxShadow: "none", backgroundColor: scrollPosition > 50 ? 'white' : 'transparent' }}>
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item  sx={{ marginLeft: "80px" }}  display="flex" alignItems="center">
            <img id='im' src="src\assets\images\Frame 3.svg" alt="logo" style={{ marginRight:'5px' }} />

              <Typography  id="logotext" variant="h6">JobHuntly</Typography>
            </Grid>
            <Grid item  display="flex" justifyContent="space-around" sx={{ marginRight: '450px', marginTop: '-20px' }}>
            <Button id="anchor" component={Link} to="/first-link">Find Jobs</Button>
            <Button id="anchor" component={Link} to="#">Browse Companies</Button>
            </Grid>
            <Grid sx={{ marginRight: "50px" }} item  display="flex" justifyContent="flex-end">
              <Button component={Link} to="#" sx={{fontWeight:"Bold",textTransform:"none"}}>Login</Button>
              <Divider orientation="vertical" flexItem />
              <Box ml={1}>
                <Button variant="contained" component={Link} sx={{fontWeight:"Bold",textTransform:"none", borderRadius: 0, boxShadow:'none'}} to="#">Sign Up</Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
