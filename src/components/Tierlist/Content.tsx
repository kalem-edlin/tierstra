import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import { CropData } from 'data-types';
import { ContentProps } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useResizeDetector } from 'react-resize-detector';

const Wrapper = styled(Box)<ContentProps>`
    overflow: hidden;
    height: 100%;
    position: relative;
    width: ${(props) => (props.tileLength)}px;
`

const getScale = (tileLength: number, crop: CropData) => {
    return tileLength/(crop.height ?? tileLength)
}

const Content = (props: ContentProps) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [scale, setScale] = useState<number>(getScale(props.tileLength, props.crop))
    const { width, ref } = useResizeDetector();

    useEffect(() => {
        if (props.crop) {
            setScale(getScale(props.tileLength, props.crop))
        }
    }, [props.crop, props.tileLength])

    // ISSUE008
    return (
        <React.Fragment>
            <Wrapper {...props} >
                { loading && 
                    <CircularProgress 
                        color={'secondary'}
                        sx={{
                            top: (props.tileLength-(width ?? 0))/2, 
                            left: (props.tileLength-(width ?? 0))/2, 
                            position: 'absolute'
                        }}
                        ref={ref}
                    /> 
                }
                <div style={{
                    transform: `
                        translate(
                            ${-props.crop.x*scale}px, 
                            ${-props.crop.y*scale}px
                        ) 
                        scale(${scale})
                    `,
                    transformOrigin: '0 0'
                }}>
                    <img 
                        src={props.content} 
                        onLoad={() => setLoading(false)} />
                </div>
            </Wrapper>
        </React.Fragment>
    )
}

export default Content
