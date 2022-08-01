import { Exports, ReloadTierlist } from "data-types";

declare module "prop-types" {
    
    export interface TierlistCanvasProps {
        appConfig: Config;
        payload: Tierlist | null;
        updateExports: (data: Tierlist, tileLength: number) => void;
    }

    interface BaseTierlistProps {
        data: Tierlist;
        tileLength: number;
        dragging: string | null;
        appConfig: Config
    }

    export interface PaletteProps extends BaseTierlistProps {
        addTile: (tile: TileToAdd) => void;
        shuffleTiles: () => void;
        resetTiles: () => void;
    }

    export interface TierlistProps extends BaseTierlistProps {}

    export interface TierProps extends BaseTierlistProps {
        tier: Tier;
        index: number;
    }

    export interface ListProps extends BaseTierlistProps {
        listId: string;
        tiles: Tile[];
    }

    export interface TileProps extends BaseTierlistProps {
        tile: Tile;
        index: number;
    }

    export interface ContentProps {
        content: string;
        alt: string;
        tileLength: number;
        crop: CropData;
    }


    // Actions

    export interface PaletteActionsProps extends PaletteProps {
        onAddClick: () => void;
    }

    export interface DragActionsProps extends BaseTierlistProps {}


    // Modals

    export interface ModalProps {
        open: boolean;
        onClose: () => void;
    }

    export interface MenuProps {
        anchorEl: Element | null;
        onClose: () => void;
    }

    export interface AddTileModalProps extends PaletteProps, ModalProps {}


    // Cropping

    interface BaseCropProps {
        imageLink: string;
    }

    export interface CropPreviewProps extends BaseCropProps {
        onAddTileClick: () => void;
        close: () => void;
        crop: CropData;
    }

    export interface CropperProps extends BaseCropProps {
        setCrop: (crop: CropData | null) => void
    }


    // Navbar

    export interface NavbarProps {
        screenshotRef: RefObject<HTMLElement>;
        exports: Exports;
        reloadTierlist: ReloadTierlist;
    }

    export interface NavbarButtonProps {
        sx: const;
        color?: ButtonProps.color;
        variant?: ButtonProps.variant;
    }

}


