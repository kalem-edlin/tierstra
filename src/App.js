import React, { useState, useLayoutEffect, useEffect } from "react";
import Navbar from "./components/Navbar";
import TierCanvas from "./components/Tierlist"
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

    // State objects needed for inter-child component information sharing
    const [dataForExports, setDataForExports] = useState({ref: React.createRef(), data: null, tileSize: null})
    const [payload, setPayload] = useState(null)

    // This function and subsequent useEffect hook will allow passing a reload tierlist function to the navbar and sending a payload to alter data
    const reloadTierlist = (newData) => {
        setPayload(newData)
    }

    useEffect(()=>{
        setPayload(null)
    }, [payload])

    const darkTheme = createTheme({
        palette: {
            mode: 'dark'
        }
    });

    return (
        <React.Fragment>
            <CssBaseline enableColorScheme />
            <ThemeProvider theme={darkTheme}>
                <Navbar dataForExports={dataForExports} reloadTierlist={reloadTierlist}/>
                <Routes>
                    <Route exact path="/tierstra" element={
                        <TierCanvas 
                            ref={dataForExports.ref}  // ref needed to identify screenshot component
                            payload={payload}
                            setDataForExports={setDataForExports}
                            dataForExports={dataForExports}
                        />
                    } />
                </Routes>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
