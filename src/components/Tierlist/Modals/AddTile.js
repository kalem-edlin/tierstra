import React, { useState, useEffect } from 'react';
import { Backdrop, Box, Modal, Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Cropper from './Cropping/ZoomCrop'
import CropPreview from './Cropping/CropPreview'
import styled from '@emotion/styled';

// example image link for multiple images
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

const AddTileModal = (props) => {
    const [imageLink, setImageLink] = useState(null)
    const [searchValue, setSearchValue] = useState('')
    const [cropData, setCropData] = useState(null)

    const handleSubmit = () => {
        console.log(searchValue)
        setImageLink(searchValue)
    }

    const handleClose = () => {
        setSearchValue('')
        setImageLink(null)
        setCropData(null)
        props.close()
    }

    const handleAddTile = () => {
        props.addTile({
            ...cropData,
            content: imageLink, 
        })
    }

    //This may be overkill
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
                        <Cropper setCropData={setCropData} imageLink={imageLink} />
                    }
                </ModalSection>
                {cropData &&
                    <ModalSection>
                        <CropPreview close={handleClose} onAddTileClick={handleAddTile} cropData={cropData} imageLink={imageLink} />
                    </ModalSection>
                }
            </ModalWrapper>
        </Modal>
    )
}

export default AddTileModal