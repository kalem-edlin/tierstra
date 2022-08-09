import Config from "./utils/Config"

// ISSUE012

const APP_CONFIG_ITEMS = {

    // Changes the Tile length of the tiles, their housing rows and other tile size related components
    'tileLength': { default: 150 },

    // Decides which cropping mechanism to use
    'cropperType': { default: 'panZoom', options: ['panZoom', 'select'] },
    
    // Puts an Add Tile Button in the palette at the end of the tiles (shaped as a tile)
    'addTileButtonInPalette': { default: false }
}


class AppConfig extends Config {
    constructor() {
        super(APP_CONFIG_ITEMS)
    }
}

export default AppConfig
