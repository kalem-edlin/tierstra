import React from 'react'
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material'
import { exportScreenshot, exportJSON } from '../data/Export'
import { handleImport } from '../data/Import'

export default function ButtonAppBar(props) {
    
    const handleReset = () => {
        sessionStorage.removeItem('tierlistData')
        window.location.reload();
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Tierstra
                </Typography>
                <Button sx={{ mr: 1 }} color="inherit" variant="outlined" onClick={handleReset}>Reset</Button>
                <Button sx={{ mr: 1 }} color="inherit" variant="outlined" component="label">Import<input type="file" name="tierlist" hidden onChange={handleImport} /></Button>
                <ExportMenuButton exportJSON={() => exportJSON(props.dataForExports)} exportScreenshot={() => exportScreenshot(props.refForExports)}/>
            </Toolbar>
        </AppBar>
    );
}

function ExportMenuButton(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <Button 
                id="export_menu_button" 
                color="inherit" 
                variant="outlined" 
                onClick={handleClick}
                aria-controls={open ? 'export_menu_button' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            > 
                Export
            </Button>
            <Menu
                id="export_menu"
                aria-labelledby="export_menu_button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {
                    props.exportScreenshot()
                    handleClose()
                }} >
                    as JPEG
                </MenuItem>
                <MenuItem onClick={ () => {
                    props.exportJSON()
                    handleClose()
                }} >
                    as JSON
                </MenuItem>
            </Menu>
        </React.Fragment>
    )
}

