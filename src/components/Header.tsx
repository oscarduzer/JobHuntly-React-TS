import { AppBar, Box, Button, Divider, Toolbar, Typography ,Link} from "@mui/material";
import logo from "../assets/images/Frame 3.svg"

function Header() {
window.location.href
    return ( 
        <>
            <AppBar position="relative" sx={{display:"flex",justifyContent:"center",backgroundColor:"var(--white)",boxShadow:"none",pl:4,pr:4}}>
                <Toolbar disableGutters sx={{display:"flex",justifyContent:"space-between",marginTop:2}}>
                 <Box display={"flex"} alignItems={"center"}>
                        <Box display={"flex"} sx={{cursor:"pointer"}}>
                          <Box> <img src={logo} /></Box>
                          <Link href="/" underline="none"><Typography ml={1} sx={{color:"var(--black)",fontWeight:"semibold"}} variant="h5">JobHuntly</Typography></Link>
                        </Box>
                        <Box sx={{display:{lg:"flex",md:"flex",xs:"none"}}} mb={2} ml={4}>
                            <Link href="/FindJobs" sx={{ textDecoration:window.location.href=="http://localhost:5173/FindJobs"?"underline":"none",color:window.location.href=="http://localhost:5173/FindJobs"?"var(--blue)":"black",textUnderlineOffset:30,fontSize:"1.2em",fontWeight:"bold",textTransform:"capitalize",fontFamily:"Epilogue",m:1}} >Find Jobs</Link>
                            <Link  href="/BrowseCompanies" sx={{textDecoration:window.location.href=="http://localhost:5173/BrowseCompanies"?"underline":"none",color:window.location.href=="http://localhost:5173/BrowseCompanies"?"var(--blue)":"black",textUnderlineOffset:30,fontSize:"1.2em",fontWeight:"bold",textTransform:"capitalize",fontFamily:"Epilogue",m:1}}>Browse Companies</Link>
                        </Box>
                 </Box>
                 <Box display={"flex"}>
                      <Button sx={{borderRadius:"0%",textTransform:"capitalize",color:"var(--blue)",fontSize:"1em",fontWeight:"bold",p:2,m:1,fontFamily:"Epilogue"}}>Login</Button>
                      <Divider variant="middle"  orientation="vertical" flexItem/>
                      <Button sx={{borderRadius:"0%",textTransform:"capitalize",backgroundColor:"var(--blue)",fontSize:"1em",fontWeight:"bold",p:2,m:1,fontFamily:"Epilogue"}} variant="contained">Sing in</Button>
                 </Box>
                </Toolbar>
            </AppBar>
        </>
     );
}

export default Header;