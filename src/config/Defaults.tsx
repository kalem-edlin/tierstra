import Config, { AddTilePosition, CropType } from "config-types"

const DefaultAppConfig: Config = {
    
    // cropType: Decides which cropping mechanism to use
    cropType: CropType.panZoom,

    // addTilePosition: Decides where to position the add tile button
    addTilePosition: AddTilePosition.paletteDrop

}

export default DefaultAppConfig