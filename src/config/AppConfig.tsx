import Config from "./utils/Config"

// ISSUE012

const APP_CONFIG_ITEMS = {

    // Changes the Tile length of the tiles, their housing rows and other tile size related components
    'tileLength': { default: 150 },

    // Decides which cropping mechanism to use
    'cropperType': { default: 'panZoom', options: ['panZoom', 'select'] },


}


class AppConfig extends Config {
    constructor() {
        super(APP_CONFIG_ITEMS)
    }
}

// ISSUE010
// Returns an updated Config Promise given a JSON response applying updates to current App Config state.
export const getRemoteConfig = async (): Promise<AppConfig> => {
    const response = await fetch('config.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const result: Record<string, any> = await response.json()
    const appConfig = new AppConfig()
    appConfig.apply(result)
    return appConfig
}

export default AppConfig
