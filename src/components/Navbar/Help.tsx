import { Backdrop, Box, Button, Modal, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { ModalProps } from 'prop-types';
import React from 'react';

const Wrapper = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background-color: black;
    border: 2px solid #000;
    boxShadow: 36px;
    color: white;
    padding: 60px;
`

export const NavbarHelp = (props: ModalProps) => {

    return (
        <React.Fragment>
            <Modal
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="help-modal"
                aria-describedby="help-modal-description"
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Wrapper>
                    <Typography
                        variant="h5"
                        component="h2"
                        fontWeight="bold">
                        Title
                    </Typography>
                    <Typography sx={{mt: 2}}>
                        Tierstra is (currently) a tierlist with reset, import and export capabilities.
                    </Typography>
                    <Typography sx={{mt: 2}}>
                        When rows become full, they will become horizontally scrollable. A future goal for tierstra will be for each tier to have multiple draggable lines to keep everything in view. Change row order by dragging tier name.
                    </Typography>
                    <Typography sx={{mt: 2}}>
                        Regardless of the row's capacity, an image export will bring everything into view in a JPEG image. JSON exports are importable for preliminary file sharing. Resetting (or first time loading) will provide a basic default dataset to try the tierlist out. Adding and removing content will come in a future version.
                    </Typography>
                    <Button
                        sx={{mt: 4}}
                        color="inherit"
                        variant="outlined"
                        onClick={props.onClose}>
                        Close
                    </Button>
                </Wrapper>
            </Modal>
        </React.Fragment>
    )
}

export default NavbarHelp