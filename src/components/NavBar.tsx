import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="sticky" sx={{ flexGrow: 1 }} color="default">
      <Toolbar>
        {/* <IconButton  color="inherit" aria-label="logo"> */}
          <img src="src/assets/images/JobHunty.jpg" alt="Logo" height="40px" /> 
        {/* </IconButton> */}
        <Typography variant="h6" >
          <Button color="inherit" component={Link} to="/">Find Jobs</Button>
        </Typography>
        <Typography variant="h6" >
          <Button color="inherit" component={Link} to="/browse-companies">Browse Companies</Button>
        </Typography>
        <Typography style={{ marginLeft: '40%' }}>
          <Button color="primary" component={Link} to="/login">Login</Button>
          <Button variant="contained" color="primary" component={Link} to="/signup">Sign up</Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
