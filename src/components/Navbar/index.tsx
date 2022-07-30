import HelpIcon from '@mui/icons-material/Help';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { NavbarButtonProps, NavbarProps } from 'prop-types';
import React, { useState } from 'react';
import { exampleGifs, exampleMusicGenres, exampleStarWars } from '../../helpers/Data';
import { exportJSON, exportScreenshot } from '../../helpers/Export';
import { handleImport, loadEmptyTierlist } from '../../helpers/Import';
import NavbarHelp from './Help';
import NavbarMenu from './Menu';



export default function Navbar(props: NavbarProps) {
    const [examplesMenuAnchorEl, setExamplesMenuAnchorEl] = useState<Element | null>(null)
    const [exportMenuAnchorEl, setExportMenuAnchorEl] = useState<Element | null>(null)
    const [helpMenuDisplay, setHelpMenuDisplay] = useState<boolean>(false)

    const handleNew = () => {
        sessionStorage.removeItem('tierlistData')
        props.reloadTierlist(loadEmptyTierlist())
    }

    const navbarButtonProps: NavbarButtonProps = {
        sx: { ml: 1 },
        color: "inherit",
        variant: "outlined",
    }

    // ISSUE005
    const examplesMenuItems = [
        { text: "Star Wars", onClick: () => props.reloadTierlist(JSON.parse(JSON.stringify(exampleStarWars))) },
        { text: "Classic Gifs", onClick: () => props.reloadTierlist(JSON.parse(JSON.stringify(exampleGifs))) },
        { text: "Music Genres", onClick: () => props.reloadTierlist(JSON.parse(JSON.stringify(exampleMusicGenres))) },
    ]
    
    const exportMenuItems = [
        { text: "as JSON", onClick: () => exportJSON(props.exports.data) },
        { text: "as JPEG", onClick: () => exportScreenshot(props.exports) },
    ]

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}>
                    Tierstra
                </Typography>

                <Button {...navbarButtonProps} onClick={handleNew}>
                    New
                </Button>

                <Button
                    {...navbarButtonProps}
                    // aria-controls={open ? 'example_menu_button' : undefined}
                    aria-haspopup="true"
                    // aria-expanded={open ? 'true' : undefined}
                    onClick={(event) => {setExamplesMenuAnchorEl(event.target as Element)}}>
                    Examples
                </Button>

                <Button {...navbarButtonProps} component="label">
                    Import
                    <input
                        type="file"
                        name="tierlist"
                        hidden
                        onChange={event => handleImport(event, props.reloadTierlist)} />
                </Button>

                <Button
                    {...navbarButtonProps}
                    // aria-controls={) ? 'example_menu_button' : undefined}
                    aria-haspopup="true"
                    // aria-expanded={open ? 'true' : undefined}
                    onClick={(event) => setExportMenuAnchorEl(event.target as Element)}>
                    Export
                </Button>

                <Button {...navbarButtonProps} onClick={() => setHelpMenuDisplay(true)}>
                    <HelpIcon/>
                </Button>
            </Toolbar>
            <NavbarMenu 
                anchorEl={examplesMenuAnchorEl}
                onClose={() => setExamplesMenuAnchorEl(null)} 
                items={examplesMenuItems} />
            <NavbarMenu 
                anchorEl={exportMenuAnchorEl}
                onClose={() => setExportMenuAnchorEl(null)} 
                items={exportMenuItems} />
            <NavbarHelp 
                open={helpMenuDisplay} 
                onClose={() => setHelpMenuDisplay(false)} />
        </AppBar>
    );
}