import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import { CropData } from 'data-types';
import { ContentProps } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useResizeDetector } from 'react-resize-detector';

const Wrapper = styled(Box)<{tileLength: number}>`
    overflow: hidden;
    height: 100%;
    position: relative;
    width: 150px;
    width: ${props => props.tileLength}px;
`

const getScale = (tileLength: number, crop: CropData) => {
    return tileLength/(crop.height ?? tileLength)
}

const Content = (props: ContentProps) => {
    const { crop, tileLength, content, alt} = props
    const [loading, setLoading] = useState<boolean>(true)
    const [scale, setScale] = useState<number>(getScale(tileLength, crop))
    const { width, ref } = useResizeDetector();

    useEffect(() => {
        if (crop) {
            setScale(getScale(tileLength, crop))
        }
    }, [crop, tileLength])

    // ISSUE008
    return (
        <React.Fragment>
            <Wrapper tileLength={tileLength}>
                { loading && 
                    <CircularProgress 
                        color="secondary"
                        sx={{
                            top: (tileLength-(width ?? 0))/2, 
                            left: (tileLength-(width ?? 0))/2, 
                            position: 'absolute'
                        }}
                        ref={ref} /> 
                }
                <div style={{
                    transform: `
                        translate(
                            ${-crop.x*scale}px, 
                            ${-crop.y*scale}px
                        ) 
                        scale(${scale})
                    `,
                    transformOrigin: '0 0'
                }}>
                    <img 
                        src={content} 
                        alt={alt}
                        onLoad={() => setLoading(false)} />
                </div>
            </Wrapper>
        </React.Fragment>
    )
}

export default Content
