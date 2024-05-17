import { Grid, Box, List, ListItemButton, ListItemText,Checkbox, FormControlLabel, Typography, Button, Pagination, PaginationItem} from '@mui/material';
import { ExpandMore,ViewAgenda,GridView} from '@mui/icons-material';
import stripe from "../../assets/images/stripe/Company Logo.png";
import divvy from "../../assets/images/divy/Company Logo.png";
import revolut from "../../assets/images/Revolut/Company Logo.png";
import kraken from "../../assets/images/kraken/Company Logo.png";
import robinhood from "../../assets/images/Robinhood/Company Logo.png";
import coinbase from "../../assets/images/coinbase/Company Logo.png";
import truebill from "../../assets/images/truebill/Company Logo.png";
import square from '../../assets/images/sqquare/Company Logo.png'


export default function SearchCompaniesFilterSectionPage(){

  
  return (
    <Grid container justifyContent={"center"} mt={3} p={5} direction={"row"}>

      <Grid item>
        <Box sx={{ width: '200px' }}>
          <List>
            <ListItemButton>
              <ListItemText primary={<b style={{ fontSize: '1.3em', whiteSpace: 'nowrap' }}>Industry</b>} />
            </ListItemButton>
              <List component="div" disablePadding>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '0.9em', whiteSpace: 'nowrap' }}>Advertising(13)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '0.9em', whiteSpace: 'nowrap' }}>Business Service (4)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '0.9em', whiteSpace: 'nowrap' }}>Blockchain (5)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '0.9em', whiteSpace: 'nowrap' }}>Cloud (15)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '0.9em', whiteSpace: 'nowrap' }}>Consumer Tech (5)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '0.9em', whiteSpace: 'nowrap' }}>Education (34)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '0.9em', whiteSpace: 'nowrap' }}>Fintech (45)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '0.9em', whiteSpace: 'nowrap' }}>Gaming (33)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '0.9em', whiteSpace: 'nowrap' }}>Food & Berevage (5)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '0.9em', whiteSpace: 'nowrap' }}>Healthcare (3)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '0.9em', whiteSpace: 'nowrap' }}>Hostinng (5)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '0.9em', whiteSpace: 'nowrap' }}>Media (4)</span>} />
                </ListItemButton>
              </List>
            <ListItemButton>
              <ListItemText primary={<b style={{ fontSize: '1.3em', whiteSpace: 'nowrap' }}>Company Size</b>} />
            </ListItemButton>
              <List component="div" disablePadding>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '0.9em', whiteSpace: 'nowrap' }}> 1-50 (25)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '0.9em', whiteSpace: 'nowrap' }}> 51-150 (57)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '0.9em', whiteSpace: 'nowrap' }}> 151-250 (45)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '0.9em', whiteSpace: 'nowrap' }}> 501-1000 (43)</span>} />
                </ListItemButton>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '0.9em', whiteSpace: 'nowrap' }}> 1000-above (23)</span>} />
                </ListItemButton>
              </List>

          </List>
        </Box>
      </Grid>
      <Grid width={"72%"} item m={1}>
            <Grid item>
                <Box display={"flex"} justifyContent={"space-between"}>
                    <Box>
                        <Typography variant='h4' fontWeight={"bold"} fontSize={"2rem"}>All Jobs</Typography>
                        <Typography variant='caption' fontSize={"0.8em"}>Showing 73 results</Typography>
                    </Box>
                    <Box display={"flex"}>
                        <Box display={"flex"} alignItems={"center"}>
                            <Box display={"flex"} alignItems={"center"} mr={1}> <Typography fontSize={"1rem"}>Sort By:</Typography> </Box>
                            <Box display={"flex"} alignItems={"center"}> <Typography fontWeight={"semibold"}>Most relevant</Typography> <ExpandMore sx={{cursor:"pointer"}}/></Box>
                        </Box>
                        <Box display={"flex"} alignItems={"center"}>
                            <Box display={"flex"} alignItems={"center"} > <Button><GridView/></Button></Box>
                            <Box display={"flex"} alignItems={"center"}> <Button> <ViewAgenda/></Button> </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid item mt={2} display={"flex"} justifyContent={"space-around"} flexWrap={"wrap"}>
                    <Grid item width={380} sx={{border:"solid var(--bg-color)"}} m={1}>
                            <Box p={2}>
                                <Box display={"flex"} justifyContent={"space-between"}>
                                  <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
                                    <img src={stripe} width={80} alt="" />
                                    <Typography variant='h5' mt={1} mr={1} fontWeight={"bold"}>Stripe</Typography>
                                  </Box>
                                  <Box>
                                    <Button sx={{color:"var(--blue)"}}> <Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">7Jobs</Typography> </Button>
                                  </Box>
                                </Box>
                                <Box display={"flex"} mt={1} sx={{color:"var(--gray)"}}>
                                    <Typography fontSize={"1.1rem"} paragraph>
                                            Stripe is a software platform for starting and 
                                            running internet businesses. Millions of 
                                            businesses rely on Stripe s software tools..
                                    </Typography>
                                </Box>
                                <Box>
                                    <Button sx={{textDirection:"start",textTransform:"capitalize",color:"var(--green)",border:"solid var(--green) 1px",borderRadius:"2rem",mr:2}}>Business</Button>
                                    <Button sx={{textDirection:"start",textTransform:"capitalize",color:"var(--blue)",fontWeight:"bold",border:"solid var(--blue) 1px",bgcolor:"var(--light1-blue)",borderRadius:"2rem",ml:2}}>Payment gateway</Button>
                                </Box>
                            </Box>
                    </Grid>
                    <Grid item width={380} sx={{border:"solid var(--bg-color)"}} m={1}>
                            <Box p={2}>
                                <Box display={"flex"} justifyContent={"space-between"}>
                                  <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
                                    <img src={truebill} width={80} alt="" />
                                    <Typography variant='h5' mt={1} mr={1} fontWeight={"bold"}>Truebill</Typography>
                                  </Box>
                                  <Box>
                                    <Button sx={{color:"var(--blue)"}}> <Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">7Jobs</Typography> </Button>
                                  </Box>
                                </Box>
                                <Box display={"flex"} mt={1} sx={{color:"var(--gray)"}}>
                                    <Typography fontSize={"1.1rem"} paragraph>
                                    Take control of your money. Truebill develops 
                                    a mobile app that helps consumers take 
                                    control of their financial...
                                    </Typography>
                                </Box>
                                <Box>
                                    <Button sx={{textDirection:"start",textTransform:"capitalize",color:"var(--green)",border:"solid var(--green) 1px",borderRadius:"2rem",mr:2}}>Business</Button>
                                </Box>
                            </Box>
                    </Grid>
                    <Grid item width={380} sx={{border:"solid var(--bg-color)"}} m={1}>
                            <Box p={2}>
                                <Box display={"flex"} justifyContent={"space-between"}>
                                  <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
                                    <img src={square} width={80} alt="" />
                                    <Typography variant='h5' mt={1} mr={1} fontWeight={"bold"}>Square</Typography>
                                  </Box>
                                  <Box>
                                    <Button sx={{color:"var(--blue)"}}> <Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">7Jobs</Typography> </Button>
                                  </Box>
                                </Box>
                                <Box display={"flex"} mt={1} sx={{color:"var(--gray)"}}>
                                    <Typography fontSize={"1.1rem"} paragraph>
                                    Square builds common business tools in 
                                    unconventional ways so more people can 
                                    start, run, and grow their businesses.
                                    </Typography>
                                </Box>
                                <Box>
                                    <Button sx={{textDirection:"start",textTransform:"capitalize",color:"var(--green)",border:"solid var(--green) 1px",borderRadius:"2rem",mr:2}}>Business</Button>
                                    <Button sx={{textDirection:"start",textTransform:"capitalize",color:"var(--orange)",fontWeight:"bold",border:"solid var(--orange) 1px",borderRadius:"2rem",ml:2}}>Blockchain</Button>
                                </Box>
                            </Box>
                    </Grid>
                    <Grid item width={380} sx={{border:"solid var(--bg-color)"}} m={1}>
                            <Box p={2}>
                                <Box display={"flex"} justifyContent={"space-between"}>
                                  <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
                                    <img src={coinbase} width={80} alt="" />
                                    <Typography variant='h5' mt={1} mr={1} fontWeight={"bold"}>Coinbase</Typography>
                                  </Box>
                                  <Box>
                                    <Button sx={{color:"var(--blue)"}}> <Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">7Jobs</Typography> </Button>
                                  </Box>
                                </Box>
                                <Box display={"flex"} mt={1} sx={{color:"var(--gray)"}}>
                                    <Typography fontSize={"1.1rem"} paragraph>
                                    Coinbase is a digital currency wallet and 
                                    platform where merchants and consumers 
                                    can transact with new digital currencies
                                    </Typography>
                                </Box>
                                <Box>
                                    <Button sx={{textDirection:"start",textTransform:"capitalize",color:"var(--green)",border:"solid var(--green) 1px",borderRadius:"2rem",mr:2}}>Business</Button>
                                    <Button sx={{textDirection:"start",textTransform:"capitalize",color:"var(--orange)",fontWeight:"bold",border:"solid var(--orange) 1px",borderRadius:"2rem",ml:2}}>Blockchain</Button>
                                </Box>
                            </Box>
                    </Grid>
                    <Grid item width={380} sx={{border:"solid var(--bg-color)"}} m={2}>
                            <Box p={2}>
                                <Box display={"flex"} justifyContent={"space-between"}>
                                  <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
                                    <img src={robinhood} width={80} alt="" />
                                    <Typography variant='h5' mt={1} mr={1} fontWeight={"bold"}>Robinhood</Typography>
                                  </Box>
                                  <Box>
                                    <Button sx={{color:"var(--blue)"}}> <Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">7Jobs</Typography> </Button>
                                  </Box>
                                </Box>
                                <Box display={"flex"} mt={1} sx={{color:"var(--gray)"}}>
                                    <Typography fontSize={"1.1rem"} paragraph>
                                    Robinhood is lowering barriers, removing 
                                    fees, and providing greater access to 
                                    financial information.
                                    </Typography>
                                </Box>
                                <Box>
                                    <Button sx={{textDirection:"start",textTransform:"capitalize",color:"var(--green)",border:"solid var(--green) 1px",borderRadius:"2rem",mr:2}}>Business</Button>
                                </Box>
                            </Box>
                    </Grid>
                    <Grid item width={380} sx={{border:"solid var(--bg-color)"}} m={2}>
                            <Box p={2}>
                                <Box display={"flex"} justifyContent={"space-between"}>
                                  <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
                                    <img src={kraken} width={80} alt="" />
                                    <Typography variant='h5' mt={1} mr={1} fontWeight={"bold"}>Kraken</Typography>
                                  </Box>
                                  <Box>
                                    <Button sx={{color:"var(--blue)"}}> <Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">7Jobs</Typography> </Button>
                                  </Box>
                                </Box>
                                <Box display={"flex"} mt={1} sx={{color:"var(--gray)"}}>
                                    <Typography fontSize={"1.1rem"} paragraph>
                                            Based in San Francisco, Kraken is the world s 
                                            largest global bitcoin exchange in euro 
                                            volume and liquidity.
                                    </Typography>
                                </Box>
                                <Box>
                                    <Button sx={{textDirection:"start",textTransform:"capitalize",color:"var(--green)",border:"solid var(--green) 1px",borderRadius:"2rem",mr:2}}>Business</Button>
                                    <Button sx={{textDirection:"start",textTransform:"capitalize",color:"var(--orange)",fontWeight:"bold",border:"solid var(--orange) 1px",borderRadius:"2rem",ml:2}}>Blockchain</Button>
                                </Box>
                            </Box>
                    </Grid>
                    <Grid item width={380} sx={{border:"solid var(--bg-color)"}} m={2}>
                            <Box p={2}>
                                <Box display={"flex"} justifyContent={"space-between"}>
                                  <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
                                    <img src={revolut} width={80} alt="" />
                                    <Typography variant='h5' mt={1} mr={1} fontWeight={"bold"}>Revolut</Typography>
                                  </Box>
                                  <Box>
                                    <Button sx={{color:"var(--blue)"}}> <Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">7Jobs</Typography> </Button>
                                  </Box>
                                </Box>
                                <Box display={"flex"} mt={1} sx={{color:"var(--gray)"}}>
                                    <Typography fontSize={"1.1rem"} paragraph>
                                    When Revolut was founded in 2015, we had a 
                                    vision to build a sustainable, digital 
                                    alternative to traditional big banks.
                                    </Typography>
                                </Box>
                                <Box>
                                    <Button sx={{textDirection:"start",textTransform:"capitalize",color:"var(--green)",border:"solid var(--green) 1px",borderRadius:"2rem",mr:2}}>Business</Button>
                                </Box>
                            </Box>
                    </Grid>
                    <Grid item width={380} sx={{border:"solid var(--bg-color)"}} m={2}>
                            <Box p={2}>
                                <Box display={"flex"} justifyContent={"space-between"}>
                                  <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
                                    <img src={divvy} width={80} alt="" />
                                    <Typography variant='h5' mt={1} mr={1} fontWeight={"bold"}>Divvy</Typography>
                                  </Box>
                                  <Box>
                                    <Button sx={{color:"var(--blue)"}}> <Typography fontSize={"1rem"} textTransform={"capitalize"} variant="h6">7Jobs</Typography> </Button>
                                  </Box>
                                </Box>
                                <Box display={"flex"} mt={1} sx={{color:"var(--gray)"}}>
                                    <Typography fontSize={"1.1rem"} paragraph>
                                    Divvy is a secure financial platform for 
                                    businesses to manage payments and 
                                    subscriptions.
                                    </Typography>
                                </Box>
                                <Box>
                                    <Button sx={{textDirection:"start",textTransform:"capitalize",color:"var(--green)",border:"solid var(--green) 1px",borderRadius:"2rem",mr:2}}>Business</Button>
                                    <Button sx={{textDirection:"start",textTransform:"capitalize",color:"var(--orange)",fontWeight:"bold",border:"solid var(--orange) 1px",borderRadius:"2rem",ml:2}}>Blockchain</Button>
                                </Box>
                            </Box>
                    </Grid>
            </Grid>
      </Grid>
      <Pagination sx={{ ml: 19 }} count={33} color="primary"
            renderItem={(item) => (
              <PaginationItem
                {...item}
                sx={{
                  '&.Mui-selected': {
                    borderRadius: 1,
                    backgroundColor: 'blue',
                    color: 'white',
                  },
                }}
              />
            )} />
    </Grid>
  );
};