import { Box, Card, CardContent, Typography, Grid, Button, Chip, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { jobs } from '../Data/jobsData';

// title: 'Email Marketing',
// company: 'Revolut',
// location: 'Madrid, Spain',
// image: 'src/assets/images/Image4.jpg',
// jobType: ['Full-Time', 'Marketing', 'Design']


function FeaturedSection() {
  const getChipStyle = (label: string) => {
    switch (label) {
      case 'Marketing':
        return { color: 'orange',  fontWeight: 'bold' };
      case 'Business':
        return { color: 'blue',  fontWeight: 'bold' };
      case 'Design':
        return { color: 'grey',  fontWeight: 'bold' };
      default:
        return { color: 'black', borderColor: 'black' };
    }
  };

  return (
    <Box sx={{ mt: 5, ml: 5 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',  mb: 3 }}>
      <Typography variant="h3" >
        <span style={{ fontWeight: 'bold', color: 'black' }}>Featured</span>
        <span style={{ fontWeight: 'bold', color: 'blue' }}> jobs</span>
      </Typography>
      <Button endIcon={<ArrowForward />} sx={{ textTransform:'none' }} color="primary">
        Show all jobs
      </Button>
    </Box>
      <Grid container spacing={1}>
        {jobs.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ width:'fit-content',height: 'fit-content', border:'1px solid',borderColor:'aqua', borderRadius: 0, transition: '0.3s', '&:hover': { transform: 'scale(1.02)' } }}>
              <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ListItemAvatar >
                      <Avatar alt={job.company} src={job.logo} />
                    </ListItemAvatar>
                  <Chip label={job.status} sx={{ color: 'blue', borderColor: 'blue', fontWeight: 'bold', backgroundColor: 'transparent', border: '1px solid blue', marginLeft: 9, borderRadius:0 }} />
                </Box>
                <Typography variant="h5" sx={{ mt: 2, fontWeight: 'bold', fontSize:'15px' }}>
                  {job.category}
                </Typography>
                <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: -2 }}>
                          <Typography variant="body2" sx={{ textTransform: 'none', opacity: 0.7 }}>{job.company}</Typography>
                          <Typography variant="body2" sx={{ fontSize: '2.5rem', opacity: 0.7, position: 'relative', top: '-0.3em' }}>.</Typography>
                          <Typography variant="body2" sx={{ textTransform: 'none', opacity: 0.7 }}>{job.location}</Typography>
                        </Box>
                      }
                    />
                <Typography variant="body1" sx={{ mt: 1, opacity: 0.6, fontSize:'15px' }}>
                  {job.description}
                </Typography>
                
                
                <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap' }}>
                  {job.tags.map((tag, index) => (
                    <Chip label={tag} key={index} sx={{ mr: 1, mt: 1, ...getChipStyle(tag) }}  />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FeaturedSection;
