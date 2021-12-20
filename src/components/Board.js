import React from 'react'
import Square from './Square'
import Box from '@mui/material/Box'
export default function Board({squares, onClick}) {
    return (
        <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: "90%",
            p: 0,
            m: 1,
            bgcolor: 'background.paper',
            maxWidth: 300,
            minWidth: 200,
            backgroundColor: '#ACC0C2'
           
        }}
      >
        {squares.map((square, i) =>(
                <Square key={i} value={square} onClick={() => onClick(i)} />
            ))}
      </Box>
        // <div>
        //     {squares.map((square, i) =>(
        //         <Square key={i} value={square} onClick={() => onClick(i)} />
        //     ))}
        // </div>
    )
}
