import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function ButtonAppBar(props) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Tierstra
                </Typography>
                <Button color="inherit" variant="outlined" onClick={props.handleExport}>Export</Button>
            </Toolbar>
        </AppBar>
    );
}