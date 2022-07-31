
declare module "config-types" {

    export type ConfigResponse = Dictionary<Value>
    
    export default interface Config {
        cropType: CropType,
        addTilePosition: AddTilePosition
    }

    export enum CropType { panZoom, select }
    export enum AddTilePosition { paletteDrop, paletteWithin, tierlistBelow }
}