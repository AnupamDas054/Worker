import { Box } from '@mui/material';
import Form from './Form'
import { makeStyles } from '@mui/styles';
import Tabsspace from './Tabspace';
import ResponseText from './ResponseText';
import { useContext,useState } from 'react';
import ErrorHandler from './ErrorHandler'
import { Context } from './DataProvider';
import {checkParams} from '../utils/Common'
import Snackbar from '../components/Snackbar'
import { getData } from '../service/api';
const useStyles = makeStyles({
    container:{
        width:'60%',
        alignItems:'center',
        justifyContent:'center',
        margin:'20px auto 0px auto'
    }
})

const Container = ()=> {

    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('')
    const [errorResponse, setErrorResponse] = useState(false);
    const [apiResponse, setApiResponse] = useState({})
   
    const classes = useStyles();
    const {formData,paramData,headerData,jsonText} = useContext(Context);
    const onSendClick = async () => {
        if(!checkParams(formData, jsonText, paramData, headerData, setErrorMsg)) {
            setError(true);
            return false;
        }

        let response = await getData(formData, jsonText, paramData, headerData);
        console.log(response);
        if (response === 'error') {
            setErrorResponse(true);
            return;
        }
        setErrorResponse(false);
        setApiResponse(response.data)
    }
    return(
        <>
      
       <Box className={classes.container}>
           <Form onSendClick={onSendClick}/>
           <Tabsspace/>
           {/* <ResponseText/> */}
           { errorResponse ? <ErrorHandler /> : <ResponseText data={apiResponse} /> }
       </Box>
           { error && <Snackbar errorMsg={errorMsg} error={error} setError={setError} /> }
        
           </>
    )
}

export default Container;