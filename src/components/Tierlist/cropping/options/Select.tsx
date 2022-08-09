import { CropperProps } from 'prop-types';
import React, { useEffect, useState } from 'react';
import ReactCrop, { centerCrop, Crop, makeAspectCrop, PixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';


interface SelectCropperProps extends CropperProps {
    setHeight: (crop: number) => void
}

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
  width: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: 'px',
        width: width*0.8,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
}

const SelectCropper = (props: SelectCropperProps) => {
    const { imageLink, cropAreaLength, cropAreaAspect, setHeight, setCrop} = props
    const [currentCrop, setCurrentCrop] = useState<Crop>()
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
    const [scale, setScale] = useState<number>(1)
    const [imageWidth, setImageWidth] = useState<number>(0)
    

    // needed to handle sizing logic within the cropper, making sure the window dosent grow too big (needs to fit whole image compared to panZoom cropper)
    function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
        const image = new Image()
        image.src = imageLink
        const imageAspect = image.height / image.width
        const { width, height } = imageAspect > 1 
            ?   {width: cropAreaLength/imageAspect, height: cropAreaLength}
            :   {width: cropAreaLength, height: cropAreaLength*imageAspect}
        setImageWidth(width)
        setHeight(height)
        setScale(image.height/height)
        setCurrentCrop(centerAspectCrop(width, height, cropAreaAspect, width))
    }

    // on unmounting of this component, reset the height incase changing to other cropper type
    useEffect(() => {
        return () => {
            console.log('resetting height')
            setHeight(cropAreaLength)
        }
    }, [setHeight, cropAreaLength])

    // needs to apply the scale found when sizing the image to the crop results (converting this back when editing crop may be difficult)
    useEffect(() => {
        completedCrop &&
        setCrop({
            x: completedCrop.x*scale,
            y: completedCrop.y*scale,
            width: completedCrop.width*scale,
            height: completedCrop.height*scale
        })
    }, [completedCrop, setCrop, scale])

  return (
    <ReactCrop
        crop={currentCrop}
        onChange={(c) => setCurrentCrop(c)}
        onComplete={(c) => setCompletedCrop(c)}
        aspect={cropAreaAspect}
    >
        <img
            alt="Gotta see it to crop it lol"
            src={imageLink}
            onLoad={onImageLoad}
            width={imageWidth}
        />
    </ReactCrop>
  )
}

export default SelectCropper
