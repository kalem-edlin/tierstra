import React from 'react'
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Modal, Box, Backdrop } from '@mui/material'
import { exportScreenshot, exportJSON } from '../data/Export'
import { handleImport, loadDefaultTierlist } from '../data/Import'
import HelpIcon from '@mui/icons-material/Help';

export default function Navbar(props) {
    
    // Will clear the session storage and reload the tierlist component
    const handleReset = () => {
        sessionStorage.removeItem('tierlistData')
        props.reloadTierlist(loadDefaultTierlist())
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Tierstra
                </Typography>
                
                <Button sx={{ ml: 1 }} color="inherit" variant="outlined" onClick={handleReset}>Reset</Button>
                <Button sx={{ ml: 1 }} color="inherit" variant="outlined" component="label">Import<input type="file" name="tierlist" hidden onChange={event => handleImport(event, props.reloadTierlist)} /></Button>
                <ExportMenuButton exportJSON={() => exportJSON(props.dataForExports.data)} exportScreenshot={() => exportScreenshot(props.dataForExports)}/>
                <HelpMenuButton />
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
                sx={{ ml: 1 }}
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


function HelpMenuButton() {

    const [firstOpen, setFirstOpen] = React.useState(false)
    const [secondOpen, setSecondOpen] = React.useState(false)
    const [thirdOpen, setThirdOpen] = React.useState(false)
    const openSecond = () => {
        setSecondOpen(true)
        setFirstOpen(false)
    }
    const openThird = () => {
        setThirdOpen(true)
        setSecondOpen(false)
    }

    return (
        <React.Fragment>
            <Button sx={{ ml: 1}} color="inherit" variant="outlined" onClick={() => setFirstOpen(true)}>  
                <HelpIcon />
            </Button>
            <HelpModal
                number={1}
                open={firstOpen}
                close={()=> setFirstOpen(false)}
                next={openSecond}
                nextButtonText={"next"}
                title={"tierstra help"}
                description={"Tierstra is (currently) a tierlist with reset, import and export capabilities."}
            />
            <HelpModal
                number={2}
                open={secondOpen}
                close={()=> setSecondOpen(false)}
                next={openThird}
                nextButtonText={"next"}
                title={"scrolling rows"}
                description={"When rows become full, they will become horizontally scrollable. A future goal for tierstra will be for each tier to have multiple draggable lines to keep everything in view."}
            />

            <HelpModal
                number={3}
                open={thirdOpen}
                close={()=> setThirdOpen(false)}
                next={()=> setThirdOpen(false)}
                nextButtonText={"close"}
                title={"reset, import, and export"}
                description={"Regardless of the row's capacity, an image export will bring everything into view in a JPEG image. JSON exports are importable for preliminary file sharing. Resetting (or first time loading) will provide a basic default dataset to try the tierlist out. Adding and removing content will come in a future version."}
            />
        </React.Fragment>
    )
}

function HelpModal(props) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 36,
        color: "#FFFFFF",
        p: 6,
    };

    return (
        <Modal
            open={props.open}
            onClose={props.close}
            aria-labelledby={"help-" + props.number + "-modal"}
            aria-describedby={"help-" + props.number + "-modal-description"}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Box sx={style}>
                <Typography id={"help-" + props.number + "-modal-title"} variant="h5" component="h2" fontWeight={"bold"}>
                    {props.title}
                </Typography>
                <Typography id={"help-" + props.number + "-modal-description"} sx={{ mt: 2 }}>
                    {props.description}
                </Typography>
                <Button sx={{ mt: 4}} color="inherit" variant="outlined" onClick={props.next}>  
                    {props.nextButtonText}
                </Button>
            </Box>
        </Modal>
    )
}


