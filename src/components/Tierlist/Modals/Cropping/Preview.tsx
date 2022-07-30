import { Box, Button, Grid, Typography } from "@mui/material"
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { styled } from '@mui/material/styles'
import { CropPreviewProps } from 'prop-types'
import React, { useState } from 'react'
import Content from '../../Content'

const PreviewDisplayWrapper = styled(Box)`
    border-left: 1px solid black;
    border-right: 1px solid black;
    width: 150px;
    height: 150px;
`

const Wrapper = styled(Grid)`
    justify-content: center;
    height: 150px;
    width: 600px;
`

const ControlSection = styled(Box)`
    width: 150px;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledCheckbox = styled(Checkbox)`
    color: gray;
    &.Mui-checked {
        color: gray;
    }
`

const DoneButton = styled(Button)`
    margin-top: 24px; 
    color: white;
    background-color: gray;
`

const Preview = (props: CropPreviewProps) => {
    const [addMultiple, setAddMultiple] = useState(false)

    const onAddTileClick = () => {
        props.onAddTileClick()
        if ( !addMultiple ) {
            props.close()
        }
    }

    // ISSUE001
    const handleAddMultiple = (_:any, checked: boolean) => { 
        setAddMultiple(checked)
    }

    return (
        <Wrapper
            container
            direction="row" >
            <ControlSection>
                <Typography 
                    variant="h6" 
                    color="ButtonText" >
                    Tile:
                </Typography>
                <FormControlLabel 
                    checked={addMultiple}
                    onChange={handleAddMultiple}
                    control={
                        <StyledCheckbox />
                    } 
                    label="Add Multiple" />
            </ControlSection>
            <PreviewDisplayWrapper>
                <Content 
                    content={props.imageLink} 
                    tileLength={150} 
                    crop={props.crop} 
                    alt="preview"
                />
            </PreviewDisplayWrapper>
            <ControlSection>
                <Button 
                    onClick={onAddTileClick} 
                    variant="contained" 
                    color="success" 
                    sx={{color: "white"}} >
                    Add Tile
                </Button>
                {addMultiple &&
                    <DoneButton 
                        onClick={props.close} 
                        variant="contained" >
                        Done
                    </DoneButton>
                }
            </ControlSection>
        </Wrapper>
    )
}

export default Preview