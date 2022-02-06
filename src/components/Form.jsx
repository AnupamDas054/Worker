import { Box,Select ,MenuItem,TextField,Button} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { color } from "@mui/system";
import {useContext} from 'react';
import { Context } from "./DataProvider";

const useStyles= makeStyles({
    container:{
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center'

    },
    form:{
        width:'23px',
        
    },
    select:{
        width:155,
        height:40,
       // border: '1px solid #ced4da',
    },
    textfield:{
        width:'100%',
        marginLeft:[5,'!important']
    },
    button:{
        height:40,
        marginLeft:[5,'!important']
    }
})

const Form =({onSendClick})=>{
   
    const classes = useStyles();
   const {formData,setFormData} = useContext(Context);
    const handleChange = (e)=>{
         
        setFormData({...formData,type:e.target.value})
    }

    const urlChange = (e)=>{

        setFormData({...formData,url:e.target.value})
        console.log(formData);

    }
    

    return (
        <Box className={classes.container}>
            <Select
                value={formData.type}
                label="POST"
                onChange={(e)=>handleChange(e)}
                className={classes.select}
            >
                <MenuItem value={'POST'}>POST</MenuItem>
                <MenuItem value={'GET'}>GET</MenuItem>
            </Select>
            <TextField className={classes.textfield} id="outlined-basic"  variant="outlined"  size="small" onChange={(e)=>urlChange(e)}/>
            <Button className={classes.button} variant="contained" onClick={() => onSendClick()} >send</Button>
        </Box>
    );
}

export default Form;