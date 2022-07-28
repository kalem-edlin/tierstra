
const getPalette = (data) => {
    return data.rows['palette']
}

export const addTile = (data, tile) => {
    const palette = getPalette(data)
    const newTileId = `${Date.now()}`
    return {
        ...data,
        tiles: {
            ...data.tiles,
            [newTileId]: {
                ...tile,
                id: newTileId,
                alt: 'added tile', //should be NAME in future
            },
        },
        rows: {
            ...data.rows,
            [palette.id]: {
                ...palette,
                tileIds: [...palette.tileIds, newTileId],
            },
        },
    }
}

export const deleteTile = (data, source) => {
    let row = data.rows[source.droppableId]
    let rowTiles = Array.from(row.tileIds)
    let tileId = rowTiles.splice(source.index, 1); // probably needs an index 0 for tileID result
    
    let tiles =  data.tiles // optional for future cases (when tiles are universal items stored on DB)
    delete tiles[tileId]
    return {
        ...data,
        rows: {
            ...data.rows,
            [source.droppableId]: {
                ...row,
                tileIds: rowTiles,
            },
        },
        tiles: tiles,
    }
    
}

export const resetToPalette = (data) => {
    let rows = data.rows
    data.tierRowOrder.map((rowId) => (
        rows[rowId].tileIds = []
    ))
    let palette = getPalette(data)
    return {
        ...data,
        rows: {
            ...rows,
            [palette.id]: {
                ...palette,
                tileIds: Object.keys(data.tiles),
            },
        },
    }
}

export const shufflePalette = (data) => {
    let palette = getPalette(data)
    let paletteTileIds = Array.from(palette.tileIds)
    // implementation of the Schwartzian transform
    // time complexity = O(N log N)
    // space complexity = O(N)
    // not as efficient as other shuffling algorithms at scale but, for now, palettes should never hold more than 3 digits of ids
    let shuffledPaletteTileIds = paletteTileIds
        .map(tileId => ({
            tileId,
            bias: Math.random()
        }))
        .sort((a, b) => a.bias - b.bias) // use random bias to position tileId
        .map(({tileId}) => tileId)  // destructure each index back to just the tileId value

    return {
        ...data,
        rows: {
            ...data.rows,
            [palette.id]: {
                ...palette,
                tileIds: shuffledPaletteTileIds,
            },
        },
    }
}


// Handler functions to return the new tierlist data to persist the changes

export const handleRowChange = (data, source, destination, draggableId) => {
    const newTierRowOrder = Array.from(data.tierRowOrder)
    newTierRowOrder.splice(source.index, 1)
    newTierRowOrder.splice(destination.index, 0, draggableId)
    return {
        ...data,
        tierRowOrder: newTierRowOrder,
    }
}

export const handleTileChange = (data, source, destination, draggableId, destinationSame) => {
    const sourceRow = data.rows[source.droppableId]
    const newSourceTileIds = Array.from(sourceRow.tileIds)
    let destinationRow = null
    newSourceTileIds.splice(source.index, 1)
    if (destinationSame) {
        newSourceTileIds.splice(destination.index, 0, draggableId)
    } else {
        destinationRow = data.rows[destination.droppableId]
        const newDestinationTileIds = Array.from(destinationRow.tileIds)
        newDestinationTileIds.splice(destination.index, 0, draggableId)
        destinationRow = {[destinationRow.id]: {
            ...destinationRow,
            tileIds: newDestinationTileIds,
        }}
    }
    return {
        ...data,
        rows: {
            ...data.rows,
            [sourceRow.id]: {
                ...sourceRow,
                tileIds: newSourceTileIds,
            },
            ...(destinationRow !== null && destinationRow),
        }
    }
}

const Mutate = {
    addTile,
    deleteTile,
    handleRowChange,
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

