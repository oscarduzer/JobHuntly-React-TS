import { Box, Typography, Link, TextField, Button, Divider, Grid, IconButton } from '@mui/material';
import { Facebook, X, Instagram, LinkedIn  } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box id="boxfooter" sx={{ backgroundColor: 'grey.800', color: 'grey.300', p: 2, alignItems:"center", bottom: 0, width: '100%' }}>
      <Grid container spacing={2} sx={{ marginTop: "30px", margin: 'auto', maxWidth: '90%' }}>
        <Grid item xs={12} sm={3}>
          <Box id="firstfooterid" display={"flex"} alignItems={"center"} >
          <img id='im' src="src\assets\images\Frame 3.svg" alt="logo" />
            <Typography id="firstHeader" sx={{ marginLeft: "10px" }} variant="h6">JobHuntly</Typography>
          </Box>
          <Typography sx={{ marginTop: "20px" }} id="footerDescription">
            Great platform for the job seeker that 
            passionate about startups.Find your dream job
            easier.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" id="firstHeader">About</Typography>
          <Link id="liensFooter" href="#" display="block" underline='none' sx={{ mb: 1 }}> Companies</Link>
          <Link id="liensFooter" href="#" display="block" underline='none' sx={{ mb: 1 }}>Pricing</Link>
          <Link id="liensFooter" href="#" display="block" underline='none' sx={{ mb: 1 }}>Terms</Link>
          <Link id="liensFooter" href="#" display="block" underline='none' sx={{ mb: 1 }}>Advice</Link>
          <Link id="liensFooter" href="#" display="block" underline='none' sx={{ mb: 1 }}>Privacy Policy</Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" id="firstHeader">Resources</Typography>
          <Link id="liensFooter" href="#" display="block" underline='none' sx={{ mb: 1 }}> Helps Docs</Link>
          <Link id="liensFooter" href="#" display="block" underline='none' sx={{ mb: 1 }}>Guide</Link>
          <Link id="liensFooter" href="#" display="block" underline='none' sx={{ mb: 1 }}>Updates</Link>
          <Link id="liensFooter" href="#" display="block" underline='none' sx={{ mb: 1 }}>Contact Us</Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" id="firstHeader">Get Job Notifications</Typography>
          <Typography id="footerDescription">The latest job news, articles, sent to your inbox weekly.</Typography>
          <Box display="flex" mt={2}>
            <TextField
              fullWidth type="email" 
              sx={{ backgroundColor:"aliceblue",
                borderRadius: 0, 
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',  // Supprime la bordure intérieure du champ
                },
              }} 
              variant="outlined"
              size="small"
              placeholder=" Email Address" />
            <Button variant="contained" color="primary"  style={{ marginLeft: '8px', textTransform:"none", borderRadius: 0}}>Subscribe</Button>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ my: 2, backgroundColor: 'aliceblue' }} />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography id="copyright">© {new Date().getFullYear()} @JobHuntly. All Right Reserved.</Typography>
        <Box>
          <IconButton id="icon" >
            <Facebook />
          </IconButton>
          <IconButton  id="icon" >
            <Instagram />
          </IconButton>
          <IconButton id="icon" >
            <LinkedIn />
          </IconButton>
          <IconButton id="icon" >
            <X />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
