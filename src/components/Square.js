import React from 'react'
import Button from '@mui/material/Button'
import CloseIcon from '@material-ui/icons/Close';
import CircleOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
const Square = ({ value, onClick }) => {
    if (value === "X"){
        return(
            <Button 
                variant="outlined" 
                size="large" 
                sx={{
                    width:"33.333%",
                    height:100
                }}
                onClick={onClick}>
                <CloseIcon fontSize=""
                    style={{ fontSize: 40,
                            color: 'red'
                    }}
                >
                {value}
                </CloseIcon>
            </Button>
        )
    }else if (value === "O"){
        return(
            <Button 
                variant="outlined" 
                size="large" 
                sx={{
                    width:"33.333%",
                    height:100
                }}
                onClick={onClick}>
                <CircleOutlinedIcon
                    style={{ fontSize: 40,
                          color: 'green'
                    }}
                >
                    {value}
                </CircleOutlinedIcon>
            </Button>
        )
    }else{
        return (
            <Button 
                variant="outlined" 
                size="large" 
                sx={{
                    width:"33.333%",
                    height:100
                }}
                onClick={onClick}>
                {value}
            </Button>
        )
    }
}

export default Square;