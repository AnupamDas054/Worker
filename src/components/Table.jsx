import {Box, Typography,Table,TableHead,TableCell,TableRow,TableBody,Checkbox, TextField} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {useState} from 'react';
import Row from './Row';
const useStyles= makeStyles({

    tablecell:{
        padding: ['7px 5px', '!important'],
        border:"1px solid rgba(224,224,224,1)",
        borderCollapse:'collapse'
    },
    checkbox:{
        padding:['2px 5px','!important'],
        margingLeft:'130px',
        width:'10%'
    },
    


})

const Tables = ({text,data,setData})=>{
  const classes= useStyles();
  const [rows,setRows] = useState([0]);
  return (
   <Box>
     <Typography mt={2} ml={2}>{text}</Typography>

     <Table sx={{ minWidth: '100%',border:'1px solid rgba(224,224,234,1)' }} aria-label="simple table">
        <TableHead>
          <TableRow>
       
            <TableCell className={classes.tablecell} ></TableCell>
            <TableCell className={classes.tablecell} >key</TableCell>
            <TableCell className={classes.tablecell} >value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
             {
                rows.map((row,index)=>(
                   
                   <Row setRows={setRows} rowId={index} key={index} data={data} setData={setData}/>
                   
                ))

             }
              
         {console.log('hello')}
        </TableBody>
      </Table>
   </Box>
  );

} 

export default Tables;