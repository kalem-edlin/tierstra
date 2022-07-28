import React from 'react';
import { Button, Menu, MenuItem } from "@mui/material";
import { exampleStarWars, exampleMusicGenres, exampleGifs } from '../../../helpers/Data';

const ExampleMenuButton = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const loadExampleTierlist = (example) => {
        sessionStorage.removeItem('tierlistData')
        props.reloadTierlist(example)
        handleClose()
    }

    return (
        <React.Fragment>
            <Button
                color="inherit"
                variant="outlined"
                onClick={handleClick}
                aria-controls={open ? 'example_menu_button' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                sx={props.sx}
            >
                Examples
            </Button>
            <Menu
                aria-labelledby="example_menu_button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {
                    loadExampleTierlist(exampleStarWars)
                }}>
                    Star Wars
                </MenuItem>
                <MenuItem onClick={() => {
                    loadExampleTierlist(exampleMusicGenres)
                }}>
                    Music Genres
                </MenuItem>
                <MenuItem onClick={() => {
                    loadExampleTierlist(exampleGifs)
                }}>
                    GIFs
                </MenuItem>
            </Menu>
        </React.Fragment>
    )
}

export default ExampleMenuButton
