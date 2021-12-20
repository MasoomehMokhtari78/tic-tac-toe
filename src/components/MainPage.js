import React from 'react'
import {Link} from "react-router-dom"
import {Container, Box, Button, Typography} from '@mui/material'
import Navbar from './Navbar'
import Toolbar from '@mui/material/Toolbar';
export default function MainPage() {
    const buttonStyle = {
        display: "block",
        height: 70,
        padding: 3,
        width: "100%",
        maxWidth: "100%",
        border: "2px black solid",
        backgroundColor: '#ACC0C2'
        
    }
    return (
        <Container
            sx={{
                display:'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 30
            }}
        >       
               
                <Typography variant="h1" fontFamily='"Segoe UI"' 
                    sx={{marginTop: -25,
                         marginBottom: 15,
                         fontSize:"min(12vw, 100px)", 
                         borderBottom: "3px black solid"}}>
                             Tic Tac Toe
                </Typography>
                <Box
                    sx={{
                        width: "90%",
                        height: 300,
                        maxWidth: 500,
                        border: "2px black solid",
                        display:'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 1,
                        backgroundColor: '#DFF8FA'
                    }}
                >
                    
                        <Link style={{textDecoration:"none",}} to="/multiplayer">
                            <Button sx={buttonStyle}>
                                <Typography id="option" fontFamily='"Segoe UI"' color="black" sx={{fontSize:"min(3.5vw, 20px)" }}>Multiplayer</Typography>
                            </Button>
                        </Link>
                    
                    <br></br>
                    
                        <Link id="option" style={{textDecoration:"none"}} to="/singleplayer">
                            <Button sx={buttonStyle}>
                                <Typography  fontFamily='"Segoe UI"' color="black" 
                                    sx={{fontSize:"min(3.5vw, 20px)", }}>
                                        Singleplayer
                                </Typography>
                            </Button>
                        </Link>
                    
                </Box>
        </Container>
    )
}
