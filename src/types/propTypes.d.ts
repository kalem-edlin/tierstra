import { Exports, ReloadTierlist } from "data-types";
declare module "prop-types" {
    
    export interface TierlistCanvasProps {
        payload: Tierlist | null;
        setExports: (data: Tierlist, tileLength: number) => void;
    }

    interface BaseTierlistProps {
        data: Tierlist;
        dragging: string | null;
        tileLength: number;
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

    export interface DeleteActionProps extends BaseTierlistProps {}


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

    export interface DebugDrawerProps extends ModalProps {}


    // Cropping

    interface BaseCropProps {
        imageLink: string;
        setCrop: (crop: CropData | null) => void;
    }

    export interface CropPreviewProps {
        imageLink: string;
        onAddTileClick: () => void;
        close: () => void;
        crop: CropData;
    }

    export interface CropperProps extends BaseCropProps {
        cropAreaAspect: number;
        cropAreaLength: number;
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


