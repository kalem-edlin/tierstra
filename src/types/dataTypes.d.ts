
declare module "data-types" {
    export interface Dictionary<T> {
        [key: string]: T;
    }

    export interface CropData {
        width?: number|undefined;
        height?: number|undefined;
        x?: number|undefined;
        y?: number|undefined;
    }

    export interface Tile {
        id: string;
        content: string;
        alt: string;
        crop: CropData;
    }

    export interface Tier {
        id: string;
        title: string;
        tileIds: string[];
    }

    export interface Tierlist {
        tiles: Dictionary<Tile>;
        tiers: Dictionary<Tier>;
        tierOrder: string[];
    }

    export interface Exports {
        data: Tierlist | null;
        tileLength: number | null;
    }

    export type ReloadTierlist = (data: Tierlist | null) => void;

    export type TileToAdd = {content: string, crop: CropData};
}