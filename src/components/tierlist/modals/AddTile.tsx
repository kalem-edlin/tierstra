import SearchIcon from '@mui/icons-material/Search';
import { Alert, Backdrop, Box, IconButton, InputBase, Modal, Paper, Snackbar } from "@mui/material";
import { styled } from '@mui/material/styles';
import { CropData } from 'data-types';
import { AddTileModalProps } from 'prop-types';
import React, { useState } from 'react';
import Cropper from '../cropping/Cropper';
import Preview from '../cropping/Preview';

// example image link for multiple image addition
// https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png

const ModalWrapper = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const ModalSection = styled(Box)`
    background-color: white;
    width: 600px;
    border: 1px solid black;
    border-radius: 15px;
    box-shadow: 36px
    color: black;
    overflow: hidden;
    margin-bottom: 3%;
`

const SearchBar = styled(Paper)`
    padding: 2px 4px;
    display: flex;
    align-items: center; 
    background-color: white;
    width: 100%;
`

const isImageUrl = (url: string) => {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)/.test(url)
}

const AddTileModal = (props: AddTileModalProps) => {
    const [imageLink, setImageLink] = useState<string | null>(null)
    const [searchValue, setSearchValue] = useState<string>('')
    const [crop, setCrop] = useState<CropData | null>(null)
    const [searchWarning, setSearchWarning] = useState<string | null>(null)

    const handleSubmit = () => {
        if ( searchValue === '' ){
            setSearchWarning('Please enter an image URL')
        }
        else if ( !isImageUrl(searchValue) ) {
            setSearchWarning('Not a valid image URL')
        }
        else {
            setImageLink(searchValue)
        }
    }

    const handleClose = () => {
        setSearchValue('')
        setImageLink(null)
        setCrop(null)
        setSearchWarning(null)
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

    // This may be overkill but will hide the cropper when searchValue is nothing or when search changed and imageLink previously set
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
        if (searchValue === '' || Boolean(imageLink)) {
            setImageLink(null)
        }
    }

    return (
        <Modal
            open={props.open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            sx={{zIndex: 10}} // ISSUE017
            BackdropProps={{
                timeout: 500,
            }}
        >
            <React.Fragment>
                <ModalWrapper>
                    <ModalSection>
                        <Box sx={{p: 3}}>
                            <SearchBar>
                                <InputBase
                                    placeholder="Image Link"
                                    inputProps={{ 'aria-label': 'image-link' }}
                                    onChange={handleSearchChange}
                                    onKeyDown={(e)=>{if (e.key === 'Enter') {handleSubmit()}}}
                                    sx={{ ml: 1, flex: 1, color: 'black' }} />
                                <IconButton onClick={handleSubmit} sx={{ p: '10px', color: 'black' }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </SearchBar>
                        </Box>
                        {imageLink !== null &&
                            <Cropper imageLink={imageLink} setCrop={setCrop} />
                        }
                    </ModalSection>
                    {crop &&
                        <ModalSection>
                            <Preview 
                                crop={crop}
                                imageLink={imageLink!}
                                close={handleClose} 
                                onAddTileClick={handleAddTile} />
                        </ModalSection>
                    }
                </ModalWrapper>
                <Snackbar
                        open={Boolean(searchWarning)}
                        autoHideDuration={4000}
                        onClose={() => setSearchWarning(null)}
                        sx={{position: 'absolute', left: 0, bottom: 0}}
                >
                    <Alert 
                        onClose={() => setSearchWarning(null)} 
                        severity="error" 
                        sx={{ width: '100%' }}
                    >
                        {searchWarning}
                    </Alert>
                </Snackbar>
            </React.Fragment>
        </Modal>
    )
}

export default AddTileModal