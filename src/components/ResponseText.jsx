import {Box, Typography, TextareaAutosize} from '@mui/material';

const textareaStyle = { 
    width: '100%', 
    padding: 10,  
    background: `url(http://i.imgur.com/2cOaJ.png)`,
    backgroundAttachment: 'local',
    backgroundRepeat: 'no-repeat',
    paddingLeft: 35,
    paddingTop: 10,
    borderColor: '#ccc' 
}


const ResponseText = () =>{

    return(
        <Box>
            <Typography style={{padding:'5',mb:"10"}}>Response</Typography>

            <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Response"
                style={textareaStyle}
                minRows={4}
                maxRows={100}
                disabled="disabled"
            />

        </Box>

    )


}

export default ResponseText;