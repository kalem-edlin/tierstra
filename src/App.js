import React, { useState, useLayoutEffect } from "react";
import Navbar from "./components/Navbar";
import TierCanvas from "./components/Tierlist"
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

    // State objects needed for inter-child component information sharing
    const [refForExports] = useState(React.createRef())
    const [dataForExports, setDataForExports] = useState()

    const darkTheme = createTheme({
        palette: {
            mode: 'dark'
        }
    });

    return (
        <React.Fragment>
            <CssBaseline />
            <ThemeProvider theme={darkTheme}>
                <Navbar dataForExports={dataForExports} refForExports={refForExports}/>
                <Routes>
                    <Route exact path="/tierstra" element={<TierCanvas setDataForExports={setDataForExports} ref={refForExports}/>} />
                </Routes>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
