import Config from "./utils/Config"

// ISSUE012

const APP_CONFIG_ITEMS = {
    // Decides which cropping mechanism to use
    'cropperType': { default: 'panZoom', options: ['panZoom', 'select'] },
    
    // Puts an Add Tile Button in the palette at the end of the tiles (shaped as a tile)
    'addTileButtonInPalette': {default: false }
}


class AppConfig extends Config {
    constructor() {
        super(APP_CONFIG_ITEMS)
    }
}

export default AppConfig
