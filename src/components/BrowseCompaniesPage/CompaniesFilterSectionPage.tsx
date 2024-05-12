import { DesignServices} from "@mui/icons-material";
import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";


export default function CompaniesFilterSectionPage()
{

    return(
        <>
                <Container maxWidth={false} sx={{pt:5,bgcolor:"var(--bg-color)"}}>
                        <Grid id="companiesCategories"  container direction={"column"}>
                                <Grid item><Box display={"flex"}><Typography variant="h4"fontWeight={"bold"} fontFamily={"Sans-serif"}>Companies by Category</Typography></Box>
                                </Grid>
                                <Grid container sx={{p:3} }>
                                    <Grid item display={"flex"} flexWrap={"nowrap"}>
                                        <Grid width={230} sx={{bgcolor:"var(--white)",m:3,p:2,":hover":{bgcolor:"var(--blue)",color:"white"}}}item>
                                            <Box display={"flex"} flexDirection={"column"} sx={{cursor:"pointer"}}>
                                                        <Box display={"flex"} ><DesignServices sx={{width:50,height:50,m:2,color:"var(--blue)"}} /></Box>
                                                        <Box><Typography variant="h4" fontWeight={"bold"} fontFamily={"Sans-serif"} fontSize={"1.5rem"} sx={{m:2}}>Design</Typography></Box>
                                            </Box>
                                        </Grid>
                                        <Grid width={230} sx={{bgcolor:"var(--white)",m:3,p:2,":hover":{bgcolor:"var(--blue)",color:"white"}}}item>
                                            <Box display={"flex"} flexDirection={"column"} sx={{cursor:"pointer"}}>
                                                        <Box display={"flex"} ><DesignServices sx={{width:50,height:50,m:2,color:"var(--blue)"}} /></Box>
                                                        <Box><Typography variant="h4" fontWeight={"bold"} fontFamily={"Sans-serif"} fontSize={"1.5rem"} sx={{m:2}}>Design</Typography></Box>
                                            </Box>
                                        </Grid>
                                        <Grid width={230} sx={{bgcolor:"var(--white)",m:3,p:2,":hover":{bgcolor:"var(--blue)",color:"white"}}}item>
                                            <Box display={"flex"} flexDirection={"column"} sx={{cursor:"pointer"}}>
                                                        <Box display={"flex"} ><DesignServices sx={{width:50,height:50,m:2,color:"var(--blue)"}} /></Box>
                                                        <Box><Typography variant="h4" fontWeight={"bold"} fontFamily={"Sans-serif"} fontSize={"1.5rem"} sx={{m:2}}>Design</Typography></Box>
                                            </Box>
                                        </Grid>
                                        <Grid width={230} sx={{bgcolor:"var(--white)",m:3,p:2,":hover":{bgcolor:"var(--blue)",color:"white"}}}item>
                                            <Box display={"flex"} flexDirection={"column"} sx={{cursor:"pointer"}}>
                                                        <Box display={"flex"} ><DesignServices sx={{width:50,height:50,m:2,color:"var(--blue)"}} /></Box>
                                                        <Box><Typography variant="h4" fontWeight={"bold"} fontFamily={"Sans-serif"} fontSize={"1.5rem"} sx={{m:2}}>Design</Typography></Box>
                                            </Box>
                                        </Grid>
                                        <Grid width={230} sx={{bgcolor:"var(--white)",m:3,p:2,":hover":{bgcolor:"var(--blue)",color:"white"}}}item>
                                            <Box display={"flex"} flexDirection={"column"} sx={{cursor:"pointer"}}>
                                                        <Box display={"flex"} ><DesignServices sx={{width:50,height:50,m:2,color:"var(--blue)"}} /></Box>
                                                        <Box><Typography variant="h4" fontWeight={"bold"} fontFamily={"Sans-serif"} fontSize={"1.5rem"} sx={{m:2}}>Design</Typography></Box>
                                            </Box>
                                        </Grid>
                                        <Grid width={230} sx={{bgcolor:"var(--white)",m:3,p:2,":hover":{bgcolor:"var(--blue)",color:"white"}}}item>
                                            <Box display={"flex"} flexDirection={"column"} sx={{cursor:"pointer"}}>
                                                        <Box display={"flex"} ><DesignServices sx={{width:50,height:50,m:2,color:"var(--blue)"}} /></Box>
                                                        <Box><Typography variant="h4" fontWeight={"bold"} fontFamily={"Sans-serif"} fontSize={"1.5rem"} sx={{m:2}}>Design</Typography></Box>
                                            </Box>
                                        </Grid>
                                        <Grid width={230} sx={{bgcolor:"var(--white)",m:3,p:2,":hover":{bgcolor:"var(--blue)",color:"white"}}}item>
                                            <Box display={"flex"} flexDirection={"column"} sx={{cursor:"pointer"}}>
                                                        <Box display={"flex"} ><DesignServices sx={{width:50,height:50,m:2,color:"var(--blue)"}} /></Box>
                                                        <Box><Typography variant="h4" fontWeight={"bold"} fontFamily={"Sans-serif"} fontSize={"1.5rem"} sx={{m:2}}>Design</Typography></Box>
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
                                                <Typography variant="h5">Pentagram</Typography>
                                                <Button sx={{color:"var(--blue)"}}><Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">Jobs</Typography></Button>
                                            </Box>
                                    </Grid>
                                    <Grid width={300} item>
                                            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"var(--white)"}} p={1} >
                                                <Typography variant="h5">Pentagram</Typography>
                                                <Button sx={{color:"var(--blue)"}}><Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">Jobs</Typography></Button>
                                            </Box>
                                    </Grid>
                                    <Grid width={300} item>
                                            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"var(--white)"}} p={1} >
                                                <Typography variant="h5">Pentagram</Typography>
                                                <Button sx={{color:"var(--blue)"}}><Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">Jobs</Typography></Button>
                                            </Box>
                                    </Grid>
                                    <Grid width={300} item>
                                            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"var(--white)"}} p={1} >
                                                <Typography variant="h5">Pentagram</Typography>
                                                <Button sx={{color:"var(--blue)"}}><Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">Jobs</Typography></Button>
                                            </Box>
                                    </Grid>
                                    <Grid width={300} item>
                                            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"var(--white)"}} p={1} >
                                                <Typography variant="h5">Pentagram</Typography>
                                                <Button sx={{color:"var(--blue)"}}><Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">Jobs</Typography></Button>
                                            </Box>
                                    </Grid>
                                    <Grid width={300} item>
                                            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"var(--white)"}} p={1} >
                                                <Typography variant="h5">Pentagram</Typography>
                                                <Button sx={{color:"var(--blue)"}}><Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">Jobs</Typography></Button>
                                            </Box>
                                    </Grid>
                                    <Grid width={300} item>
                                            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"var(--white)"}} p={1} >
                                                <Typography variant="h5">Pentagram</Typography>
                                                <Button sx={{color:"var(--blue)"}}><Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">Jobs</Typography></Button>
                                            </Box>
                                    </Grid>
                                    <Grid width={300} item>
                                            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"var(--white)"}} p={1} >
                                                <Typography variant="h5">Pentagram</Typography>
                                                <Button sx={{color:"var(--blue)"}}><Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">Jobs</Typography></Button>
                                            </Box>
                                    </Grid>
                            </Grid>
                            <Grid item mt={3} ml={9} sx={{cursor:"pointer",color:"var(--blue)"}}>
                                <Link underline="none" sx={{color:"var(--blue)",fontWeight:"bold"}} variant="subtitle1">View more Design companies</Link>
                            </Grid>
                        </Grid>
                </Container>
        </>
    )
}