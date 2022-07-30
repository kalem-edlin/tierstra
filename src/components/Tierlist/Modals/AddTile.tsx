import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import { Backdrop, Box, IconButton, InputBase, Modal, Paper } from "@mui/material";
import { CropData } from 'data-types';
import { AddTileModalProps } from 'prop-types';
import React, { useEffect, useState } from 'react';
import Cropper from './Cropping/Cropper';
import CropPreview from './Cropping/CropPreview';

// example image link for multiple image addition
// https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png

const ModalWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const ModalSection = styled.div`
    background-color: white;
    width: 600px;
    border: 1px solid black;
    border-radius: 15px;
    box-shadow: 36px
    color: black;
    overflow: hidden;
    margin-bottom: 3%;
`

const AddTileModal = (props: AddTileModalProps) => {
    const [imageLink, setImageLink] = useState<string | null>(null)
    const [searchValue, setSearchValue] = useState<string>('')
    const [crop, setCrop] = useState<CropData | null>(null)

    const handleSubmit = () => {
        console.log(searchValue)
        setImageLink(searchValue)
    }

    const handleClose = () => {
        setSearchValue('')
        setImageLink(null)
        setCrop(null)
        props.onClose()
    }

    const handleAddTile = () => {
        if ( imageLink !== null ) {
            props.addTile({
                crop: {
                    ...crop,
                },
                content: imageLink, 
            })
        }
    }

    // This may be overkill but will hide the cropper when searchValue is nothing
    useEffect(() => {
        if (searchValue === '') {
            setImageLink(null)
        }
    }, [searchValue])

    return (
        <Modal
            open={props.open}
            onClose={handleClose}
            aria-labelledby={"add-tile-modal"}
            aria-describedby={"add-tile-modal-description"}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}>
            <ModalWrapper>
                <ModalSection>
                    <Box sx={{p: 3}}>
                        <Paper
                            sx={{ bgcolor: 'white', p: '2px 4px', display: 'flex', alignItems: 'center', width: 1 }}>
                            <InputBase
                                sx={{ ml: 1, flex: 1, color: 'black' }}
                                placeholder="Image Link"
                                inputProps={{ 'aria-label': 'image-link' }}
                                onChange={(e)=>{setSearchValue(e.target.value)}}
                                onKeyDown={(e)=>{if (e.key === 'Enter') {handleSubmit()}}}
                            />
                            <IconButton onClick={handleSubmit} sx={{ p: '10px', color: 'black' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Box>
                    {imageLink !== null &&
                        <Cropper 
                            imageLink={imageLink} 
                            setCrop={setCrop} />
                    }
                </ModalSection>
                {crop &&
                    <ModalSection>
                        <CropPreview 
                            crop={crop}
                            imageLink={imageLink!}
                            close={handleClose} 
                            onAddTileClick={handleAddTile} />
                    </ModalSection>
                }
            </ModalWrapper>
        </Modal>
    )
}

export default AddTileModal