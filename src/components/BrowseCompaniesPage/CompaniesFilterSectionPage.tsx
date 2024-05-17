import { ArrowForward, DesignServices,ElectricalServices,Web,BusinessCenter,Code} from "@mui/icons-material";
import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import wolffolins from "../../assets/images/wolffolins/82DbHuT__400x400.png";
import clay from "../../assets/images/clay/kyK0sl2A_400x400.png";
import mediamonks from "../../assets/images/mediamonks/images 1.png";
import packer from "../../assets/images/paoker/Packer.png";
import square from "../../assets/images/sqquare/Company Logo.png";
import divy from "../../assets/images/divy/Company Logo.png";
import webflow from "../../assets/images/webflow/Mask Group.png";
import pentagram from "../../assets/images/pentagram/Company Logo.png";

export default function CompaniesFilterSectionPage()
{

    return(
        <>
                <Container maxWidth={false} sx={{pt:5,bgcolor:"var(--bg-color)"}}>
                        <Grid id="companiesCategories"  container direction={"column"}>
                                <Grid item><Box display={"flex"}><Typography variant="h4"fontWeight={"bold"} fontFamily={"Epique"}>Companies by Category</Typography></Box>
                                </Grid>
                                <Grid container sx={{position:"relative",p:3} }>
                                    <Box sx={{position:"absolute",top:"45%",right:"0%",bgcolor:"var(--blue)",cursor:"pointer",p:1}}><ArrowForward sx={{color:"var(--white)",fontSize:"1.1em"}}/></Box>
                                    <Grid item display={"flex"} flexWrap={"nowrap"}>
                                        <Grid width={230} sx={{bgcolor:"var(--white)",m:3,p:2,":hover":{bgcolor:"var(--blue)",color:"white"}}}item>
                                            <Box display={"flex"} flexDirection={"column"} sx={{cursor:"pointer"}}>
                                                        <Box display={"flex"} ><DesignServices sx={{width:50,height:50,m:2,color:"var(--blue)"}} /></Box>
                                                        <Box><Typography variant="h4" fontWeight={"bold"} fontFamily={"Sans-serif"} fontSize={"1.2rem"} sx={{m:2}}>Design</Typography></Box>
                                            </Box>
                                        </Grid>
                                        <Grid width={230} sx={{bgcolor:"var(--white)",m:3,p:2,":hover":{bgcolor:"var(--blue)",color:"white"}}}item>
                                            <Box display={"flex"} flexDirection={"column"} sx={{cursor:"pointer"}}>
                                                        <Box display={"flex"} ><ElectricalServices sx={{width:50,height:50,m:2,color:"var(--blue)"}} /></Box>
                                                        <Box><Typography variant="h4" fontWeight={"bold"} fontFamily={"Sans-serif"} fontSize={"1.2rem"} sx={{m:2}}>Fintech</Typography></Box>
                                            </Box>
                                        </Grid>
                                        <Grid width={230} sx={{bgcolor:"var(--white)",m:3,p:2,":hover":{bgcolor:"var(--blue)",color:"white"}}}item>
                                            <Box display={"flex"} flexDirection={"column"} sx={{cursor:"pointer"}}>
                                                        <Box display={"flex"} ><Web sx={{width:50,height:50,m:2,color:"var(--blue)"}} /></Box>
                                                        <Box><Typography variant="h4" fontWeight={"bold"} fontFamily={"Sans-serif"} fontSize={"1.2rem"} sx={{m:2}}>Hosting</Typography></Box>
                                            </Box>
                                        </Grid>
                                        <Grid width={230} sx={{bgcolor:"var(--white)",m:3,p:2,":hover":{bgcolor:"var(--blue)",color:"white"}}}item>
                                            <Box display={"flex"} flexDirection={"column"} sx={{cursor:"pointer"}}>
                                                        <Box display={"flex"} ><BusinessCenter sx={{width:50,height:50,m:2,color:"var(--blue)"}} /></Box>
                                                        <Box><Typography variant="h4" fontWeight={"bold"} fontFamily={"Sans-serif"} fontSize={"1.2rem"} sx={{m:2}}>Business Service</Typography></Box>
                                            </Box>
                                        </Grid>
                                        <Grid width={230} sx={{bgcolor:"var(--white)",m:3,p:2,":hover":{bgcolor:"var(--blue)",color:"white"}}}item>
                                            <Box display={"flex"} flexDirection={"column"} sx={{cursor:"pointer"}}>
                                                        <Box display={"flex"} ><Code sx={{width:50,height:50,m:2,color:"var(--blue)"}} /></Box>
                                                        <Box><Typography variant="h4" fontWeight={"bold"} fontFamily={"Sans-serif"} fontSize={"1.2rem"} sx={{m:2}}>Developper</Typography></Box>
                                            </Box>
                                        </Grid>
                                       
                                        
                                    </Grid>
                                </Grid>
                        </Grid>
                        <Grid container direction="column">
                            <Grid item>
                                <Box display={"flex"} alignItems={"center"}><DesignServices sx={{color:"var(--blue)",bgcolor:"var(--white)",borderRadius:"50%",m:2,p:1,fontSize:"2rem"}}/>  <Typography variant="h4" fontWeight={"bold"} fontFamily={"Sans-serif"}>24 Results</Typography></Box>
                            </Grid>
                            <Grid container justifyContent={"center"} alignItems={"center"} direction={'row'} spacing={5}>
                                    <Grid width={300} item>
                                            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"var(--white)"}} p={1} >
                                                <img src={pentagram} alt="" />
                                                <Typography variant="h5">Pentagram</Typography>
                                                <Button sx={{color:"var(--blue)"}}><Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">Jobs</Typography></Button>
                                            </Box>
                                    </Grid>
                                    <Grid width={300} item>
                                            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"var(--white)"}} p={1} >
                                                <img src={wolffolins} alt="" />
                                                <Typography variant="h5">Wolff Olins</Typography>
                                                <Button sx={{color:"var(--blue)"}}><Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">Jobs</Typography></Button>
                                            </Box>
                                    </Grid>
                                    <Grid width={300} item>
                                            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"var(--white)"}} p={1} >
                                                <img src={clay} alt="" />
                                                <Typography variant="h5">Clay</Typography>
                                                <Button sx={{color:"var(--blue)"}}><Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">Jobs</Typography></Button>
                                            </Box>
                                    </Grid>
                                    <Grid width={300} item>
                                            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"var(--white)"}} p={1} >
                                                <img src={mediamonks} alt="" />
                                                <Typography variant="h5">MediaMonks</Typography>
                                                <Button sx={{color:"var(--blue)"}}><Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">Jobs</Typography></Button>
                                            </Box>
                                    </Grid>
                                    <Grid width={300} item>
                                            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"var(--white)"}} p={1} >
                                                <img src={packer} alt="" />
                                                <Typography variant="h5">Packer</Typography>
                                                <Button sx={{color:"var(--blue)"}}><Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">Jobs</Typography></Button>
                                            </Box>
                                    </Grid>
                                    <Grid width={300} item>
                                            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"var(--white)"}} p={1} >
                                                <img src={square} alt="" />
                                                <Typography variant="h5">Square</Typography>
                                                <Button sx={{color:"var(--blue)"}}><Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">Jobs</Typography></Button>
                                            </Box>
                                    </Grid>
                                    <Grid width={300} item>
                                            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"var(--white)"}} p={1} >
                                                <img src={divy} alt="" />
                                                <Typography variant="h5">Divy</Typography>
                                                <Button sx={{color:"var(--blue)"}}><Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">Jobs</Typography></Button>
                                            </Box>
                                    </Grid>
                                    <Grid width={300} item>
                                            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"var(--white)"}} p={1} >
                                                <img src={webflow} alt="" />
                                                <Typography variant="h5">WebFlow</Typography>
                                                <Button sx={{color:"var(--blue)"}}><Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">Jobs</Typography></Button>
                                            </Box>
                                    </Grid>
                            </Grid>
                            <Grid item mt={3} ml={9} sx={{cursor:"pointer",color:"var(--blue)"}}>
                                <Box display={"flex"} alignItems={"center"}>
                                    <Box m={1}>
                                        <Link underline="none" sx={{color:"var(--blue)",fontWeight:"bold"}} variant="subtitle1">View more Design companies </Link>
                                    </Box>
                                    <Box>
                                        <ArrowForward/>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                </Container>
        </>
    )
}