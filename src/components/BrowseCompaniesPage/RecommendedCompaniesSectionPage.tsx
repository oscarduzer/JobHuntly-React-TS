import { Box,Button,Container ,Grid,Typography,Card,CardContent} from "@mui/material";
import nomad from "../../assets/images/nomad/Nomad.png";
import maze from "../../assets/images/maze/-7tuadqI_400x400.png"
import udacity from "../../assets/images/Udacity/_1M3hz0d_400x400.png";
import webflow from "../../assets/images/webflow/Mask Group.png";
import foundation from "../../assets/images/Foundation/2ali5jb7_400x400.png";
import discord from "../../assets/images/discord.jpeg";


export default function RecommendedCompaniesSectionPage()
{
    return (
        <>
            <Container  sx={{width:"100%",pt:17}}>
                <Grid container flexDirection={"column"} margin={3}>
                    <Grid item>
                        <Box display={"flex"}><Typography variant="h4" fontWeight={"bold"} fontFamily={"Sans-serif"}>Recommended Companies</Typography></Box>
                        <Box display={"flex"} mt={1}><Typography variant="h6" fontSize={"1.05rem"} sx={{color:"var(--gray)"}} >Based on your profile, company preferences, and recent activity</Typography></Box>
                    </Grid>
                    <Grid item marginTop={3}>
                            <Grid container display={"flex"} justifyContent={"space-between"} spacing={2}>
                                    <Grid width={370} item>
                                        <Card sx={{borderRadius:"0%",cursor:"pointer"}}>
                                            <CardContent>
                                                    <Box display="flex" justifyContent="space-between">
                                                            <Box>
                                                                <img width={100} height={100} src={nomad}/>
                                                                <Typography>Nomad</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Button sx={{textTransform:"capitalize"}}>3 Jobs</Button>
                                                            </Box>
                                                    </Box>
                                                    <Box display="flex" flexDirection="column">
                                                            <Box>
                                                                <Typography paragraph fontSize={15}>Nomad is located in Paris, France.Nomad has generates $728,000 in sales (USD).</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Button sx={{textDirection:"start",textTransform:"capitalize",color:"var(--orange)",border:"solid var(--orange) 1px",borderRadius:"2rem"}}>Business Service</Button>
                                                            </Box>
                                                    </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid width={370} item>
                                        <Card sx={{borderRadius:"0%",cursor:"pointer"}}>
                                            <CardContent>
                                                    <Box display="flex" justifyContent="space-between">
                                                            <Box>
                                                                <img width={100} height={100} src={discord}/>
                                                                <Typography>Discord</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Button sx={{textTransform:"capitalize"}}>3 Jobs</Button>
                                                            </Box>
                                                    </Box>
                                                    <Box display="flex" flexDirection="column">
                                                            <Box>
                                                                <Typography paragraph fontSize={15}>We'd love to work with someone like you. We care about creating a delightful experience.</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Button sx={{textDirection:"start",textTransform:"capitalize",color:"var(--orange)",border:"solid var(--orange) 1px",borderRadius:"2rem"}}>Business Service</Button>
                                                            </Box>
                                                    </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid width={370} item>
                                        <Card sx={{borderRadius:"0%",cursor:"pointer"}}>
                                            <CardContent>
                                                    <Box display="flex" justifyContent="space-between">
                                                            <Box>
                                                                <img width={100} height={77} src={maze}/>
                                                                <Typography>Maze</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Button sx={{textTransform:"capitalize"}}>3 Jobs</Button>
                                                            </Box>
                                                    </Box>
                                                    <Box display="flex" flexDirection="column">
                                                            <Box>
                                                                <Typography paragraph fontSize={15}>We're a passionate bunch working from all over the world to build the future of rapid testing together.</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Button sx={{textDirection:"start",textTransform:"capitalize",color:"var(--orange)",border:"solid var(--orange) 1px",borderRadius:"2rem"}}>Business Service</Button>
                                                            </Box>
                                                    </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid width={370} item>
                                        <Card sx={{borderRadius:"0%",cursor:"pointer"}}>
                                            <CardContent>
                                                    <Box display="flex" justifyContent="space-between">
                                                            <Box>
                                                                <img width={100} height={100} src={udacity}/>
                                                                <Typography>Udacity</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Button sx={{textTransform:"capitalize"}}>3 Jobs</Button>
                                                            </Box>
                                                    </Box>
                                                    <Box display="flex" flexDirection="column">
                                                            <Box>
                                                                <Typography paragraph fontSize={15}>Udacity is a new type of online university that teaches the actual programming skills.</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Button sx={{textDirection:"start",textTransform:"capitalize",color:"var(--orange)",border:"solid var(--orange) 1px",borderRadius:"2rem"}}>Business Service</Button>
                                                            </Box>
                                                    </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid width={370} item>
                                        <Card sx={{borderRadius:"0%",cursor:"pointer"}}>
                                            <CardContent>
                                                    <Box display="flex" justifyContent="space-between">
                                                            <Box>
                                                                <img width={100} height={100} src={webflow}/>
                                                                <Typography>Webflow</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Button sx={{textTransform:"capitalize"}}>3 Jobs</Button>
                                                            </Box>
                                                    </Box>
                                                    <Box display="flex" flexDirection="column">
                                                            <Box>
                                                                <Typography paragraph fontSize={15}>Webflow is the first design and hosting platform built from the ground up for the mobile age.</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Button sx={{textDirection:"start",textTransform:"capitalize",color:"var(--orange)",border:"solid var(--orange) 1px",borderRadius:"2rem",m:1}}>Business Service</Button>
                                                                <Button sx={{textDirection:"start",textTransform:"capitalize",bgcolor:"var(--custom-pink)",color:"red",border:"solid pink 1px",borderRadius:"2rem"}}>Technology</Button>
                                                            </Box>
                                                    </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid width={370} item>
                                        <Card sx={{borderRadius:"0%",cursor:"pointer"}}>
                                            <CardContent>
                                                    <Box display="flex" justifyContent="space-between">
                                                            <Box>
                                                                <img width={100} height={77} src={foundation} />
                                                                <Typography>Foundation</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Button sx={{textTransform:"capitalize"}}>3 Jobs</Button>
                                                            </Box>
                                                    </Box>
                                                    <Box display="flex" flexDirection="column">
                                                            <Box>
                                                                <Typography paragraph fontSize={15}>Foundation helps creators mint and auction their digital artworks as NFTs on the Ethereum blockchain.</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Button sx={{textDirection:"start",textTransform:"capitalize",color:"var(--orange)",border:"solid var(--orange) 1px",borderRadius:"2rem",m:1}}>Business Service</Button>
                                                                <Button sx={{textDirection:"start",textTransform:"capitalize",bgcolor:"var(--light1-blue)",color:"var(--blue)",border:"solid var(--blue) 1px",borderRadius:"2rem"}}>Crypto</Button>
                                                            </Box>
                                                    </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                            </Grid>
                            
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}