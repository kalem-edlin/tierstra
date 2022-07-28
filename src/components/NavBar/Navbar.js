import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { exportJSON, exportScreenshot } from '../../helpers/Export'
import { handleImport, loadEmptyTierlist } from '../../helpers/Import'
import ExportMenuButton from "./Buttons/ExportMenuButton";
import ExampleMenuButton from './Buttons/ExampleMenuButton';
import HelpMenuButton from "./Buttons/HelpMenuButton";


export default function Navbar(props) {

    const handleNew = () => {
        sessionStorage.removeItem('tierlistData')
        props.reloadTierlist(loadEmptyTierlist())
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
                    onClick={handleNew}>
                    New
                </Button>
                <ExampleMenuButton
                    sx={{ ml: 1 }}
                    reloadTierlist={props.reloadTierlist}/>
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


