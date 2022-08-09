import { Tierlist, TileToAdd } from 'data-types';
import { DraggableLocation, DropResult } from 'react-beautiful-dnd';

// ISSUE004
const DELETE_TILE_DROPPABLE_ID = 'tile-delete'
const PALETTE_ID = 'palette'
const TIER_TYPE = 'tier'

const getPalette = (data: Tierlist) => {
    return data.tiers[PALETTE_ID]
}

export const addTile = (data: Tierlist, tile: TileToAdd) => {
    const palette = getPalette(data)
    const newTileId = `${Date.now()}`
    return {
        ...data,
        tiles: {
            ...data.tiles,
            [newTileId]: {
                ...tile,
                id: newTileId,
                alt: 'added tile', // ISSUE003
            },
        },
        tiers: {
            ...data.tiers,
            [palette.id]: {
                ...palette,
                tileIds: [...palette.tileIds, newTileId],
            },
        },
    }
}

export const deleteTile = (data: Tierlist, source: DraggableLocation) => {
    let tier = data.tiers[source.droppableId]
    let newTileIds = Array.from(tier.tileIds)
    let tileId = newTileIds.splice(source.index, 1);
    
    let tiles =  data.tiles
    delete tiles[tileId[0]]
    return {
        ...data,
        tiers: {
            ...data.tiers,
            [source.droppableId]: {
                ...tier,
                tileIds: newTileIds,
            },
        },
        tiles: tiles,
    }
    
}

export const resetToPalette = (data: Tierlist) => {
    let tiers = data.tiers
    data.tierOrder.map((tierId) => (
        tiers[tierId].tileIds = []
    ))
    let palette = getPalette(data)
    return {
        ...data,
        tiers: {
            ...tiers,
            [palette.id]: {
                ...palette,
                tileIds: Object.keys(data.tiles),
            },
        },
    }
}

/**
 *  implementation of the Schwartzian transform
 *  > time complexity = O(N log N)
 *  > space complexity = O(N)
 *  not as efficient as other shuffling algorithms at scale but, for now, palettes should never hold more than 3 digits of ids
 * 
 *  uses a random bias for the comparator sort
 */
export const shufflePalette = (data: Tierlist) => {
    let palette = getPalette(data)
    let paletteTileIds = Array.from(palette.tileIds)

    let shuffledPaletteTileIds = paletteTileIds
        .map(tileId => ({
            tileId,
            bias: Math.random()
        }))
        .sort((a, b) => a.bias - b.bias)
        .map(({tileId}) => tileId)

    return {
        ...data,
        tiers: {
            ...data.tiers,
            [palette.id]: {
                ...palette,
                tileIds: shuffledPaletteTileIds,
            },
        },
    }
}


// Handler functions to return the new tierlist data to persist the changes
export const handleDragEnd = (data: Tierlist, result: DropResult) => {
    const { destination, source, type, draggableId} = result
    if ( !destination ) { 
        return null
    }
    if ( destination.droppableId === DELETE_TILE_DROPPABLE_ID ) {
        return deleteTile(data, source)
    }
    const sameDestination = destination.droppableId === source.droppableId
    if ( sameDestination && destination.index === source.index) { 
        return null
    }
    if ( type === TIER_TYPE ) {
        return handleTierChange(data, source, destination, draggableId)
    } else {
        return handleTileChange(data, source, destination, draggableId, sameDestination)
    }
}

export const handleTierChange = (
    data: Tierlist, 
    source: DraggableLocation, 
    destination: DraggableLocation, 
    draggableId: string
) => {
    const newTierOrder = Array.from(data.tierOrder)
    newTierOrder.splice(source.index, 1)
    newTierOrder.splice(destination.index, 0, draggableId)
    return {
        ...data,
        tierOrder: newTierOrder,
    }
}

export const handleTileChange = (
    data: Tierlist, 
    source: DraggableLocation, 
    destination: DraggableLocation, 
    draggableId: string, 
    destinationSame: boolean
) => {
    const sourceTier = data.tiers[source.droppableId]
    const newSourceTileIds = Array.from(sourceTier.tileIds)
    let destinationTier = null
    newSourceTileIds.splice(source.index, 1)
    if (destinationSame) {
        newSourceTileIds.splice(destination.index, 0, draggableId)
    } else {
        destinationTier = data.tiers[destination.droppableId]
        const newDestinationTileIds = Array.from(destinationTier.tileIds)
        newDestinationTileIds.splice(destination.index, 0, draggableId)
        destinationTier = {[destinationTier.id]: {
            ...destinationTier,
            tileIds: newDestinationTileIds,
        }}
    }
    return {
        ...data,
        tiers: {
            ...data.tiers,
            [sourceTier.id]: {
                ...sourceTier,
                tileIds: newSourceTileIds,
            },
            ...(destinationTier !== null && destinationTier),
        }
    }
}

const Mutate = {
    addTile,
    deleteTile,
    handleDragEnd,
    handleTierChange,
    handleTileChange,
    resetToPalette,
    shufflePalette
}

export default Mutate


// Will be needed for code reduction in a future PR

// export const moveSameDroppable = (list, fromIndex, toIndex) => {
//     const result = Array.from(list);
//     const [removed] = result.splice(fromIndex, 1);
//     result.splice(toIndex, 0, removed);
//     return result;
// };

// export const moveTile = ({ list, source, destination }) => {
//     const current = [...list[source.droppableId]];
//     const next = [...list[destination.droppableId]];
//     const target = current[source.index];
  
//     // moving to same list
//     if (source.droppableId === destination.droppableId) {
//       const reordered = moveSameDroppable(current, source.index, destination.index)
//       const result = {
//         ...list,
//         [source.droppableId]: reordered,
//       }
//       return result;
//     }
  
//     // moving to different list
//     current.splice(source.index, 1)
//     next.splice(destination.index, 0, target)
  
//     return {
//       ...list,
//       [source.droppableId]: current,
//       [destination.droppableId]: next,
//     }
// };

