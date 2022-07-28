import { Backdrop, Box, Button, Modal, Typography } from "@mui/material";
import React from 'react';

const HelpModal = (props) => {
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
            }}>
            <Box sx={style}>
                <Typography
                    id={"help-" + props.number + "-modal-title"}
                    variant="h5"
                    component="h2"
                    fontWeight={"bold"}>
                    {props.title}
                </Typography>
                <Typography
                    id={"help-" + props.number + "-modal-description"}
                    sx={{mt: 2}}>
                    {props.description}
                </Typography>
                <Button
                    sx={{mt: 4}}
                    color="inherit"
                    variant="outlined"
                    onClick={props.next}>
                    {props.nextButtonText}
                </Button>
            </Box>
        </Modal>
    )
}

export default HelpModal
