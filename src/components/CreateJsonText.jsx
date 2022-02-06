import { Typography,TextareaAutosize } from "@mui/material";
import { useContext } from "react";
import {Context} from './DataProvider';

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


const CreateJsonText =()=>{
  const {setJsonText} = useContext(Context);
  
  const valueChange = (e)=>{
    setJsonText(e.target.value);
  }
 
  return(
      <>

        <Typography mt={2} mb={2}>
             JSON
        </Typography>
        <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Empty"
            style={textareaStyle}
            minRows={10}
            maxRows={100}
            onChange={(e)=>valueChange(e)}
        />
      </>
  );
}

export default CreateJsonText;