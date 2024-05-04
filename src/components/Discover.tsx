import SearchBar from "./SearchBar";
import { Box, Typography } from "@mui/material";

function Discover() {
  return (<>
  <Box id="discoverBox" sx={{ mt:12, ml:5}}>
  <img id="discoverImg" src="src\assets\images\SectionOneImage.jpg" alt="Discover" />
   <Typography id="sectionDescription1">Great platform for the job seeker that 
                passionate about startups.
    </Typography>
    <SearchBar />
    <Typography id="sectionDescription">Popular: UI Designer, UX Researcher, Android, Admin</Typography> 
  </Box>
   
  </>
   
  )
}

export default Discover;