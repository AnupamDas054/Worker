import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles= makeStyles({
   logo:{
       mt:'2',
       padding:20,
       fontStyle: 'italic',
       fontWeight:'bold',
       color:'black'
       
   }
}) 

const Header=()=>{
  
   const classes= useStyles();
  return (
      <>
          <Typography variant="h5" className={classes.logo}>Worker</Typography>
      </>
    
  )
}

export default Header ;