import React from 'react';
import { Button, Menu, MenuItem } from "@mui/material";

export const ExportMenuButton = (props) => {

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
                sx={props.sx}
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
                }}>
                    as JPEG
                </MenuItem>
                <MenuItem onClick={() => {
                    props.exportJSON()
                    handleClose()
                }}>
                    as JSON
                </MenuItem>
            </Menu>
        </React.Fragment>
    )
}

export default ExportMenuButton
