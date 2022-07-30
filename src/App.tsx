import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Exports, Tierlist } from 'data-types';
import React, { RefObject, useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TierlistCanvas from "./components/Tierlist/Canvas";

function App() {

    // State objects needed for inter-child component information sharing
    const screenshotRef: RefObject<HTMLElement> = React.createRef()
    const [exports, setExports] = useState<Exports>({data: null, tileLength: null})
    const [payload, setPayload] = useState<Tierlist | null>(null)

    // This function and subsequent useEffect hook will allow passing a reload tierlist function to the navbar and sending a payload to alter data
    const reloadTierlist = (newData: Tierlist | null) => {
        setPayload(newData)
    }

    useEffect(()=>{
        setPayload(null)
    }, [payload])

    // ISSUE009
    const updateExports = useCallback((newData: Tierlist, tileLength: number) => {
        setExports({
            data: newData,
            tileLength: tileLength
        })
    }, [])

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
                    screenshotRef={screenshotRef}
                    reloadTierlist={reloadTierlist}/>
                <TierlistCanvas 
                    ref={screenshotRef}
                    payload={payload}
                    updateExports={updateExports}/>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
