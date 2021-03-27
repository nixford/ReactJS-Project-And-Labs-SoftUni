import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Property from './Property/Property';
import useStyles from '../../styles';


const Properties = ({ setCurrentId }) => {
  const properties = useSelector((state) => state.properties);
  const classes = useStyles();


  return (
    !properties.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {properties.map((property) => (
          <Grid key={property._id} item xs={12} sm={6} md={6}>
            <Property property={property} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Properties;