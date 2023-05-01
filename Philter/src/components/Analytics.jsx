import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import './css/Analytics.css';
import BarChart from './Charts/BarChart';
import GeoChart from './Charts/GeoChart';
import PieChart from './Charts/PieChart';

function Analytics() {
    return (
      // style={{ boxShadow: '1px 2px 9px #F4AAB9', borderRadius: 10 }}
        <div className="container pb-5 col-md-10 bgcolor" >

            <div className='mt-5 pt-5'>
                <h2 className='text-center mb-1' style={{ textTransform: 'uppercase', color: 'purple', fontWeight: 'bold' }}>Analytics</h2>

                <Box height={30} />
                <Box sx={{ display: 'flex' }} >
                    <Box component='main' sx={{ flexGrow: 1, p: 3 }} >
                        <div className='FlexPos'>
                          <Grid container spacing={2}>
                              <Stack spacing={2} >
                                  <Grid item xs={5}>
                                  <Box >
                                      <Stack spacing={2} direction='row'>
                                          <Card sx={{ maxWidth: 100 + '%', height: 140 }}>

                                              <CardContent>
                                                  <Typography gutterBottom variant="h5" component="div">
                                                      Lizard 1
                                                  </Typography>

                                                  <Typography variant="body2" color="text.secondary">
                                                      Lizards are a widespread group of squamate reptiles, with over 6,000
                                                      species, ranging across all continents except Antarctica
                                                  </Typography>

                                              </CardContent>

                                          </Card>

                                          <Card sx={{ maxWidth: 100 + '%', height: 140 }}>

                                              <CardContent>
                                                  <Typography gutterBottom variant="h5" component="div">
                                                      Lizard 2
                                                  </Typography>

                                                  <Typography variant="body2" color="text.secondary">
                                                      Lizards are a widespread group of squamate reptiles, with over 6,000
                                                      species, ranging across all continents except Antarctica
                                                  </Typography>

                                              </CardContent>

                                          </Card>
                                      </Stack>
                                      </Box>
                                  </Grid>

                                  <Grid item xs={5}>
                                      <Stack spacing={2} direction='row'>
                                          <Card sx={{ maxWidth: 100 + '%', height: 140 }}>

                                              <CardContent>
                                                  <Typography gutterBottom variant="h5" component="div">
                                                      Lizard 3
                                                  </Typography>

                                                  <Typography variant="body2" color="text.secondary">
                                                      Lizards are a widespread group of squamate reptiles, with over 6,000
                                                      species, ranging across all continents except Antarctica
                                                  </Typography>

                                              </CardContent>

                                          </Card>

                                          <Card sx={{ maxWidth: 100 + '%', height: 140 }}>

                                              <CardContent>
                                                  <Typography gutterBottom variant="h5" component="div">
                                                      Lizard 4
                                                  </Typography>

                                                  <Typography variant="body2" color="text.secondary">
                                                      Lizards are a widespread group of squamate reptiles, with over 6,000
                                                      species, ranging across all continents except Antarctica
                                                  </Typography>

                                              </CardContent>

                                          </Card>
                                      </Stack>
                                


                                  </Grid>



                              </Stack>

                          </Grid>
                            <Card sx={{ height: 40 + 'vh' , width:'100%'}}>

                                <CardContent>
                                    <BarChart />
                                </CardContent>

                            </Card>
                        </div>

                        <Box height={16} />
                        <Stack spacing={2} direction='row' sx={{ marginLeft: -15 + 'px' }} >
                            <Grid container spacing={2}>

                                <Grid item xs={8}>
                                    <Card sx={{ height: 40 + 'vh' }}>
                                        <CardContent><GeoChart /></CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={4}>
                                    <Card sx={{ height: 40 + 'vh' }}>
                                        <CardContent><PieChart /></CardContent>
                                    </Card>
                                </Grid>

                            </Grid>
                        </Stack>

                    </Box>
                </Box>

            </div>
        </div>

    )
}

export default Analytics;