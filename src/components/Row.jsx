import { useState } from "react";
import { TableRow,TableCell,TextField ,Checkbox} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles= makeStyles({
    
    textfield:{
        width:'100%',
        height:'10'
    },
    uppertablecell:{
        width:'10px'
    }
})

const Row = ({setRows,rowId, data, setData})=>{

    const classes= useStyles();
    const [checked, setChecked] = useState(false);

    const handleChange = (e)=>{
        let result = data.filter(entry => entry.id === Number(e.target.name))[0];
        if(!checked)
        {
            setChecked(true);
            setRows(oldArr => [...oldArr, rowId]);
            result = { ...result, id: rowId, check: true }

        }
        else
        {
            setChecked(false);
            result = { ...result, id: rowId, check: false }
        }
        let index = data.findIndex((value) => value.id === Number(e.target.name));
        if (index === -1) {
            setData(oldArr => [...oldArr, result]);
        } else {
            const newArray = Object.assign([...data], {
                [index]: result
            });
            setData(newArray)    
        }

    }
    // console.log(data);

    const onTextChange = (e) => {
        let result = data.filter(entry => entry.id === rowId)[0];
        result = { ...result, id: rowId, [e.target.name]: e.target.value }

        let index = data.findIndex((value) => value.id === rowId);
        
        if (index === -1) {
            setData(oldArr => [...oldArr, result]);
        } 
        else {
            const newArray = Object.assign([...data], {
                [index]: result
            });
            setData(newArray)    
        }
    }

    return (

        <TableRow> 
        <TableCell className={classes.uppertablecell}>
            <Checkbox
            checked={checked} 
            size="large"
            className="classes.checkbox"
            onChange={(e)=>handleChange(e)}
              />
        </TableCell>

        <TableCell className={classes.tablecell}>
            <TextField inputProps={{style:{height:30,padding:'0px 5px'}}} className={classes.textfield} onChange={(e)=>onTextChange(e)} name="key"></TextField>
        </TableCell>

        <TableCell className={classes.tablecell}>
        <TextField inputProps={{style:{height:30,padding:'0px 5px'}}} className={classes.textfield} onChange={(e)=>onTextChange(e)} name="value"></TextField>
        </TableCell>
      </TableRow>

    )

}

export default Row;