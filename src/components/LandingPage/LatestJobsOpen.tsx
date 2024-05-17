import { ArrowForward } from '@mui/icons-material';
import { Grid, Card, CardContent, ListItem, ListItemAvatar, Avatar, ListItemText, Box, Typography,  Chip, Divider, Button } from '@mui/material';
import React from 'react';
import { jobs } from '../../utils/Data/latestData';

const LatestJobsOpen = () => {
      return (<>
      <Box sx={{ mt: 5, ml: 5 , p:6}}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, ml: 1 }}>
        <Typography variant="h3" id='section_h'>
        Latest <Typography id='section_h1' variant='h3' component="span" > jobs open</Typography>
        </Typography>
        <Button endIcon={<ArrowForward />} sx={{ textTransform: 'none' }}>Show all job</Button>
      </Box>
        <Grid container spacing={2}>
          {jobs.map((job, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card variant="outlined" sx={{  transition: '0.3s', '&:hover': { transform: 'scale(1.02)' },mb: 2, border: '1px solid #ddd', height: 'fit-content', borderRadius: 0 }}>
                <CardContent>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt={job.title} src={job.image} />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ ml: 2 }} // décaler le contenu vers la droite
                      primary={<Typography fontWeight="bold">{job.title}</Typography>}
                      secondary={
                        <Box sx={{ display: 'flex', alignItems: 'center', mt:-2 }}>
                          <Typography variant="body2" sx={{ textTransform: 'none', opacity: 0.6 }}>{job.company}</Typography>
                          <Typography variant="body2" sx={{ fontSize: '2.5rem', opacity: 0.6, position: 'relative', top: '-0.3em' }}>.</Typography>
                          <Typography variant="body2" sx={{ textTransform: 'none', opacity: 0.6 }}>{job.location}</Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: -3, ml: 10 }}>
                    {job.jobType.map((type:any, index:any) => {
                      let color = '';
                      let backgroundColor = '';
                      let borderColor = '';

                      if (type === 'Full-Time') {
                        color = 'lightgray';
                        backgroundColor = 'ashgray';
                      } else if (type === 'Marketing') {
                        color = 'orange';
                        borderColor = 'orange';
                      } else if (type === 'Design') {
                        color = 'blue';
                        borderColor = 'blue';
                      }

                      return (
                        <React.Fragment key={index}>
                          <Chip
                            label={type}
                            sx={{
                              backgroundColor: (index === 0) ? backgroundColor : 'transparent',
                              color: color,
                              fontWeight: 'bold',
                              mr: 1,
                              border: (index !== 0) ? `1px solid ${borderColor}` : '',
                            }}
                          />
                          {index === 0 && <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />}
                        </React.Fragment>
                      );
                    })}
                  </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
      </Box>
      
      </>
        
  );
};

export default LatestJobsOpen;