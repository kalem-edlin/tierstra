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

const CropPreview = (props: CropPreviewProps) => {
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
        <Grid
            container
            direction="row"
            justifyContent="center"
            sx={{height: 150, width: 600}}>
            <Box sx={{width: 150, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant="h6" color="ButtonText">Tile:</Typography>
                <FormControlLabel 
                    checked={addMultiple}
                    onChange={handleAddMultiple}
                    control={
                        <Checkbox sx={{
                            color: 'gray',
                            '&.Mui-checked': {
                              color: 'gray',
                            },
                        }}/>
                    } 
                    label="Add Multiple"/>
            </Box>
            <PreviewDisplayWrapper>
                <Content 
                    content={props.imageLink} 
                    tileLength={150} 
                    crop={props.crop} 
                />
            </PreviewDisplayWrapper>
            <Box sx={{width: 150, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Button onClick={onAddTileClick} variant="contained" color="success" sx={{color: 'white'}}>
                    Add Tile
                </Button>
                {addMultiple &&
                    <Button onClick={props.close} variant="contained" sx={{mt: 3, color: 'white'}}>
                        Done
                    </Button>
                }
            </Box>
        </Grid>
    )
}

export default CropPreview