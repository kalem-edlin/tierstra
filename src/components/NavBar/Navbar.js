import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { exportJSON, exportScreenshot } from '../../data/Export'
import { handleImport, loadDefaultTierlist } from '../../data/Import'
import '../../tierlist.css';
import { ExportMenuButton } from "./ExportMenuButton";
import { HelpMenuButton } from "./HelpMenuButton";

export default function Navbar(props) {

    // Will clear the session storage and reload the tierlist component
    const handleReset = () => {
        sessionStorage.removeItem('tierlistData')
        props.reloadTierlist(loadDefaultTierlist())
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}>
                    Tierstra
                </Typography>
                <Button
                    sx={{ ml: 1 }}
                    color="inherit"
                    variant="outlined"
                    onClick={handleReset}>
                    Reset
                </Button>
                <Button
                    sx={{ ml: 1 }}
                    color="inherit"
                    variant="outlined"
                    component="label">
                    Import
                    <input
                        type="file"
                        name="tierlist"
                        hidden
                        onChange={event => handleImport(event, props.reloadTierlist)} />
                </Button>
                <ExportMenuButton
                    sx={{ ml: 1 }}
                    exportJSON={() => exportJSON(props.dataForExports.data)}
                    exportScreenshot={() => exportScreenshot(props.dataForExports)}/>
                <HelpMenuButton
                    sx={{ ml: 1 }} />
            </Toolbar>
        </AppBar>
    );
}


