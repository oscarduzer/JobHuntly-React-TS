import { Box, Button, InputAdornment, FormControl, Select, MenuItem, Grid, FilledInput, Divider, Typography } from '@mui/material';
import { Search, Room, KeyboardArrowDownRounded } from '@mui/icons-material';
import LogoSection from './LogoSection';
import JobCategoryCards from './JobCategoryCards';
import AfterCardItem from './AfterCardItem';
import FeaturedSection from '../FeaturedSection';
import LatestJobsOpen from './LatestJobsOpen';




// La première page est celle ci la page 0
//LandingPage anciennement SearchJobs


const LandingPage = () => {

  return (<>
    <Box id="discoverBox" sx={{ mt: 12, ml: 5 }}>
      <img id="discoverImg" src="src\assets\images\SectionOneImage.jpg" alt="Discover" />
      <Typography id="sectionDescription1">Find your next career at companies like HubSpot, Nike, and Dropbox</Typography>
      <Box id="searchBox" sx={{ backgroundColor: 'white', p: 2, display: 'flex', alignItems: 'center', ml: 6, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', marginTop: '50px', marginBottom: '20px' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4} sx={{ mt: -1 }}>
            <FormControl variant="filled">
              <FilledInput
                sx={{ background: '#fff', border: 'none', borderBottom: '0.5 solid', height: '40px', width: '200px', paddingBottom: '10px', ml: 3 }}
                startAdornment={
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                }
                placeholder="Job title or keyword"
              />
            </FormControl>
          </Grid>
          <Grid item>
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item marginLeft={' 20px'} >
            <FormControl variant="standard" fullWidth>
              <Select
                IconComponent={KeyboardArrowDownRounded}
                sx={{ paddingRight: '50px' }}
                value="Florence, Italy"
                startAdornment={
                  <InputAdornment position="start">
                    <Room />
                  </InputAdornment>
                }
              >
                <MenuItem value="Florence, Italy">Florence, Italy</MenuItem>
                {/* Ajoutez d'autres MenuItem ici pour d'autres options dans le dropdown */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item  >
            <Button variant="contained" sx={{ borderRadius: 0, boxShadow: 'none', textTransform: 'none', fontWeight: 'bold' }} color="primary" >Search my jobs</Button>
          </Grid>
        </Grid>
      </Box>
      <Typography id="sectionDescription">Popular: UI Designer, UX Researcher, Android, Admin</Typography>
    </Box>
    <Box sx={{ p: 10 }}>
    </Box>
    <LogoSection />
    <JobCategoryCards />
    <Box sx={{ p: 2, alignItems: 'center', ml: 10 }}>
      <AfterCardItem />
    </Box>
    <Box sx={{ p: 2 }}>
      <FeaturedSection />
    </Box>
    <Box sx={{ p:2 }}>
        <LatestJobsOpen/>
    </Box>
  </>

  );
};

export default LandingPage;
