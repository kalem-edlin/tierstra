import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Exports, Tierlist } from 'data-types';
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TierlistCanvas from "./components/Tierlist/Canvas";

function App() {

    // State objects needed for inter-child component information sharing
    const [exports, setExports] = useState<Exports>({screenshotRef: React.createRef(), data: null, tileLength: null})
    const [payload, setPayload] = useState<Tierlist | null>(null)

    // This function and subsequent useEffect hook will allow passing a reload tierlist function to the navbar and sending a payload to alter data
    const reloadTierlist = (newData: Tierlist | null) => {
        console.log(newData)
        setPayload(newData)
    }

    useEffect(()=>{
        setPayload(null)
    }, [payload])

    const updateExports = (newData: Tierlist, tileLength: number) => {
        setExports({
            ...exports,
            data: newData,
            tileLength: tileLength
        })
    }

    const darkTheme = createTheme({
        palette: {
            mode: 'dark'
        }
    });

    return (
        <React.Fragment>
            <CssBaseline enableColorScheme />
            <ThemeProvider theme={darkTheme}>
                <Navbar
                    exports={exports}
                    reloadTierlist={reloadTierlist}/>
                <TierlistCanvas 
                    ref={exports.screenshotRef}
                    payload={payload}
                    updateExports={updateExports}/>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
