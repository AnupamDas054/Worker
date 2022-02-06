import React, {createContext,useState} from 'react';

export const Context = createContext(null);

const DataProvider = ({children})=>{

    const [formData,setFormData] = useState({url: '', type:'POST'})
    const [paramData,setParamData] =  useState([])
    const [headerData,setHeaderData] =  useState([])
    const [jsonText, setJsonText] = useState('');

    return(

       <Context.Provider value={{
           formData,
           setFormData,
           paramData,
           setParamData,
           headerData,
           setHeaderData,
           jsonText,
           setJsonText
       }}>

           {children}

       </Context.Provider>
    )
}

export default DataProvider;