
import { Box, Card, CardContent, Typography, Grid, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const categories = ["Design", "Sales", "Marketing", "Finance", "Technology", "Engineering", "Business", "Human Resource"];
type JobCounts = {
    [key: string]: number;
  };
  
  const jobCounts: JobCounts = {
    "Design": 200,
    "Sales": 150,
    "Marketing": 300,
    "Finance": 250,
    "Technology": 400,
    "Engineering": 350,
    "Business": 100,
    "Human Resource": 50
  };
  
  
function JobCategoryCards() {
  return (
    <Box sx={{ mt: 5, ml: 5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 , ml:9}}>
        <Typography variant="h5" id='section_h'>
          Explore by <Typography id='section_h1' variant='h5' component="span" >category</Typography>
        </Typography>
        <Button endIcon={<ArrowForwardIosIcon />} sx={{ textTransform:'none' }}>Show all job</Button>
      </Box>
      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={category}>
            
            <Card sx={{ height: '200px', width: '200px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', ml: 3 }}>
              <CardContent>
                {/* Remplacez "chemin/vers/icone.png" par le chemin vers l'icône de la catégorie */}
                <img src="chemin/vers/icone.png" alt={`${category} icon`} />
                <Typography variant="h5" sx={{ mt: 2 }}>{category}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
  {Object.prototype.hasOwnProperty.call(jobCounts, category) ? `${jobCounts[category]} jobs available` : 'No jobs available'}
  <ArrowForwardIosIcon sx={{ mt: 1 }} />
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
