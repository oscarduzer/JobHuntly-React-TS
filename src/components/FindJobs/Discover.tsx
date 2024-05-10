import CategoryJobsSection from "./CategoryJobsSection";
import FindJobSearchBar from "./FindJobSearchBar";
import { Box, Typography } from "@mui/material";

function Discover() {
  return (<>
  <Box id='dreamjob' sx={{height:'300px', mt:12, ml:5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
  <img id="FindYourDreamJobs" src="src\assets\images\FindsYourDreamJobs.jpg" alt="Discover" />
   <Typography id="DiscoverDesc">Find your next career at companies like HubSpot, Nike, and Dropbox
    </Typography>
    <Box id='searchJobsD'>
    <FindJobSearchBar/>
    </Box>
    
    <Typography id="SearchDesc">Popular: UI Designer, UX Researcher, Android, Admin</Typography> 
  </Box>
   <Box>
    <CategoryJobsSection/>
   </Box>
  </>
   
  )
}

export default Discover;