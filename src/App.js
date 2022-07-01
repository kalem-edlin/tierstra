import React from "react";
import Navbar from "./components/Navbar";
import TierCanvas from "./components/Tierlist"
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark'
        }
    });

    const handleExport = () => {
        alert("will export file")
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <ThemeProvider theme={darkTheme}>
                <Navbar handleExport={handleExport}/>
                <Routes>
                    <Route path="/tierstra" element={<TierCanvas />} />
                </Routes>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
