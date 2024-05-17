import { Search,LocationOnOutlined} from "@mui/icons-material";
import { Container, Grid, Typography,Box, FormControl, Divider, TextField, Autocomplete,Button, FormHelperText} from "@mui/material";
import datas from "../../utils/data.json"


export default function SearchCompaniesMainSectionPage()
{
    let data:Array<Object>
    data=datas.job_offers.map(item=>item.jobs.map(i=>i.category))
    return (
        <>
            <Container sx={{width:"100%"}} id="SearchCompaniesMainSectionPage" component={"section"} disableGutters >
                    <Grid container flexDirection={"column"} justifyContent={"center"} spacing={6}>
                            <Grid item> 
                                <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"} mt={4}>
                                        <Box mr={1}><Typography fontFamily={"Epique"} fontWeight={"bold"} variant="h3">Find Your </Typography></Box>
                                        <Box ml={1}><Typography fontFamily={"Epique"} fontWeight={"bold"} variant="h3" sx={{color:"var(--light-blue)",textDecoration:"underline",textUnderlineOffset:13,textDecorationStyle:"double"}}>dream companies</Typography></Box>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box display={"flex"} justifyContent={"center"}>
                                    <Typography paragraph sx={{color:"var(--gray)"}}>Find the dream companies you dream work for</Typography>
                                </Box>
                            </Grid>
                            <Grid item display={"flex"} justifyContent={"center"} lg={12}>
                                <FormControl component={"form"}>
                                        <Grid container flexDirection={"row"} flexWrap={"wrap"} spacing={3} sx={{boxShadow:"0px 20px 50px var(--bg-color)",p:4}}>
                                            <Grid item display={"flex"} alignItems={"center"}><Search/></Grid>
                                            <Grid item>
                                                <TextField type="search" sx={{fontFamily:"Epique",width:{lg:400,md:300,xs:200}}}  variant="standard" value={"Fintech"} inputProps={{
                                                
                                                }}/>
                                            </Grid>
                                            <Grid item display={"flex"}><Divider sx={{color:"var(--gray)"}} orientation="vertical" flexItem/></Grid>
                                            <Grid item display={"flex"} alignItems={"center"}><LocationOnOutlined /></Grid>
                                            <Grid item display={"flex"} alignItems={"center"} marginBottom={0.5}>
                                                <Autocomplete
                                                disablePortal
                                                disableClearable
                                                 sx={{fontFamily:"Epique",width:{lg:400,md:300,xs:200}}} 
                                                 options={data}
                                                 
                                                 renderInput={(params) => <TextField {...params} variant="standard"/>}
                                                 />
                                            </Grid>
                                            <Grid item display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                                <Button sx={{bgcolor:'var(--blue)',fontWeight:"bold",textTransform:"capitalize",borderRadius:"0"}} variant="contained">Search</Button>
                                            </Grid>
                                        </Grid>
                                        <FormHelperText sx={{mt:4,ml:-2,fontSize:"1em",fontFamily:"Epique"}}>Popular : Twitter ,Microsoft ,Apple ,Facebook</FormHelperText>
                                </FormControl>
                            </Grid>
                    </Grid>
            </Container>
        </>
    );
}