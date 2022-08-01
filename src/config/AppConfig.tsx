
export enum CropType { panZoom, select }
export enum AddTilePosition { paletteDrop, paletteWithin, tierlistBelow }


export interface Config {

    // cropType: Decides which cropping mechanism to use
    cropType: CropType,

    // addTilePosition: Decides where to position the add tile button
    addTilePosition: AddTilePosition,
}

const defaults: Config = {
    cropType: CropType.panZoom,
    addTilePosition: AddTilePosition.paletteDrop
}   



// AppConfig Handling functions

const isConfig = (o: any): o is Config => {
    return Object.keys(defaults).every((property) => {
        return property in o
    })
}

const updated = (override?: Config): Promise<Config> => {
    if ( override ) { return Promise.resolve(override) }

    // ISSUE010
    return fetch('config.json', {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then((responseConfig) => {
        if ( isConfig(responseConfig) ) { return responseConfig }
        return defaults // Do something about this, record JSON to backend
    })
}

const defaultExports: any = {
    defaults,
    updated
}

export default defaultExports