import { useState,useContext } from "react";
import { Box,Tabs,Tab } from "@mui/material";
import Tables from './Table';
import CreateJsonText from "./CreateJsonText";
import {Context} from "./DataProvider";

const Tabsspace = ()=>{

    const [value, setValue] = useState(0);
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

   const { paramData,setParamData, headerData, setHeaderData} = useContext(Context);
   
    return (
        <Box sx={{ width: '100%' ,marginTop:1}}>

          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
              <Tab label="Params" />
              <Tab label="Headers"  />
              <Tab label="Body"  />
            </Tabs>
          </Box> 

           <Box
            role="tabpanel"
            hidden={value !== 0}
            id={`simple-tabpanel-${0}`}
            aria-labelledby={`simple-tab-${0}`}
            >
           <Tables text="params" data={paramData} setData={setParamData}/>
           {/*  */}
          </Box> 
         <Box

            role="tabpanel"
            hidden={value !== 1}
            id={`simple-tabpanel-${1}`}
            aria-labelledby={`simple-tab-${1}`}
            >
          <Tables text="Headers" data={headerData} setData={setHeaderData}/>
        </Box> 
         <Box
            role="tabpanel"
            hidden={value !== 2}
            id={`simple-tabpanel-${2}`}
            aria-labelledby={`simple-tab-${2}`}
            >
            <CreateJsonText/>
        </Box> 
    </Box>
      );


}
export default Tabsspace;