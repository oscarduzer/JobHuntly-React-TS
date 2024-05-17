import { AppBar, Box, Button, Divider, Toolbar, Typography} from "@mui/material";
import logo from "../assets/images/Frame 3.svg"

function Header() {

    return ( 
        <>
            <AppBar position="relative" sx={{display:"flex",justifyContent:"center",backgroundColor:"var(--white)",boxShadow:"none",pl:4,pr:4}}>
                <Toolbar disableGutters sx={{display:"flex",justifyContent:"space-between",marginTop:2}}>
                 <Box display={"flex"} alignItems={"center"}>
                        <Box display={"flex"} sx={{cursor:"pointer"}}>
                          <Box> <img src={logo} /></Box>
                          <Typography ml={1} sx={{color:"var(--black)",fontWeight:"semibold"}} variant="h5">JobHuntly</Typography>
                        </Box>
                        <Box sx={{display:{lg:"flex",md:"flex",xs:"none"}}} mb={2} ml={4}>
                            <Button sx={{color:"var(--gray)",fontSize:"1.2em",fontWeight:"light",textTransform:"capitalize",textDecoration:"underline",fontFamily:"Epilogue"}}>Find Jobs</Button>
                            <Button sx={{color:"var(--gray)",fontSize:"1.2em",fontWeight:"light",textTransform:"capitalize",fontFamily:"Epilogue"}}>Browse Companies</Button>
                        </Box>
                 </Box>
                 <Box display={"flex"}>
                      <Button sx={{textTransform:"capitalize",color:"var(--blue)",fontSize:"1em",fontWeight:"bold",p:2,m:1,fontFamily:"Epilogue"}}>Login</Button>
                      <Divider variant="middle"  orientation="vertical" flexItem/>
                      <Button sx={{textTransform:"capitalize",backgroundColor:"var(--blue)",fontSize:"1em",fontWeight:"bold",p:2,m:1,fontFamily:"Epilogue"}} variant="contained">Sing in</Button>
                 </Box>
                </Toolbar>
            </AppBar>
        </>
     );
}

export default Header;