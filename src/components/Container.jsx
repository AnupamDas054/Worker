import { Box } from '@mui/material';
import Form from './Form'
import { makeStyles } from '@mui/styles';
import Tabsspace from './Tabspace';
import ResponseText from './ResponseText';
import { useContext } from 'react';
import ErrorHandler from './ErrorHandler'
import { Context } from './DataProvider';
const useStyles = makeStyles({
    container:{
        width:'60%',
        alignItems:'center',
        justifyContent:'center',
        margin:'20px auto 0px auto'
    }
})

const Container = ()=> {
   
    const classes = useStyles();
    const {formData,paramData,headerData,jsonText} = useContext(Context);
    return(
       <Box className={classes.container}>
           <Form onSendClick={onSendClick}/>
           <Tabsspace/>
           {/* <ResponseText/> */}
           <ErrorHandler/>
       </Box>
    )
}

export default Container;