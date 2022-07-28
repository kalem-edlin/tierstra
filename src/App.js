import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar/Navbar";
import TierCanvas from "./components/Tierlist/Canvas"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

    // State objects needed for inter-child component information sharing
    const [dataForExports, setDataForExports] = useState({ref: React.createRef(), data: null, tileLength: null})
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
        <Router>
            <React.Fragment>
                <CssBaseline enableColorScheme />
                <ThemeProvider theme={darkTheme}>
                    <Navbar
                        dataForExports={dataForExports}
                        reloadTierlist={reloadTierlist}/>
                    <Routes>
                        <Route exact path="/tierstra" element={
                            <TierCanvas 
                                ref={dataForExports.ref}  // ref needed to identify screenshot component
                                payload={payload}
                                setDataForExports={setDataForExports}
                                dataForExports={dataForExports} />
                        }/>
                    </Routes>
                </ThemeProvider>
            </React.Fragment>
        </Router>
    );
}

export default App;
