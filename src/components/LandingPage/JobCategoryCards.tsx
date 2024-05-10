import { ArrowForward,  DesignServices, BusinessCenter, MonetizationOn, Computer, Engineering, Assessment, PeopleAlt  } from '@mui/icons-material';
import { Box, Card, CardContent, Typography, Grid, Button } from '@mui/material';

const categories = ["Design", "Sales", "Marketing", "Finance", "Technology", "Engineering", "Business", "Human Resource"];
type JobCounts = {
    [key: string]: number;
};

const jobCounts: JobCounts = {
    "Design": 235,
    "Sales": 756,
    "Marketing": 140,
    "Finance": 325,
    "Technology": 436,
    "Engineering": 542,
    "Business": 211,
    "Human Resource": 346
};

function JobCategoryCards() {
  const categoryIcons = {
    "Design": <DesignServices sx={{ color:'blue' }} />,
    "Sales": <BusinessCenter sx={{ color:'blue' }} />,
    "Marketing": <Assessment sx={{ color:'blue' }} />,
    "Finance": <MonetizationOn sx={{ color:'blue' }} />,
    "Technology": <Computer sx={{ color:'blue' }} />,
    "Engineering": <Engineering sx={{ color:'blue' }} />,
    "Business": <BusinessCenter sx={{ color:'blue' }} />,
    "Human Resource": <PeopleAlt sx={{ color:'blue' }} />
  };
  return (
    <Box sx={{ mt: 5, ml: 5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 , ml:9}}>
        <Typography variant="h5" id='section_h'>
          Explore by <Typography id='section_h1' variant='h5' component="span" >category</Typography>
        </Typography>
        <Button endIcon={<ArrowForward  />} sx={{ textTransform:'none' }}>Show all job</Button>
      </Box>
      <Grid container spacing={0.5} justifyContent={'center'}>
        {categories.map((category) => (
          <Grid item key={category} sx={{ paddingBottom:2 }}>
            <Card sx={{ height: '200px', width: '200px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', ml: 3 , borderRadius:0}}>
              <CardContent>
                {categoryIcons[category as keyof typeof categoryIcons]}
                <Typography variant="h5" sx={{ mt: 2 }}>{category}</Typography>
                <Typography variant="body2" sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
                  {Object.prototype.hasOwnProperty.call(jobCounts, category) ? `${jobCounts[category]} jobs available` : 'No jobs available'}
                  <ArrowForward  sx={{ ml: 1 }} />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default JobCategoryCards;
