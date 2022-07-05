
// Handler functions to return the new tierlist data to persist the changes

export const handleRowChange = (data, source, destination, draggableId) => {
    const newTierRowORder = Array.from(data.tierRowOrder)
    newTierRowORder.splice(source.index, 1)
    newTierRowORder.splice(destination.index, 0, draggableId)
    return {
        ...data,
        tierRowOrder: newTierRowORder
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
            tileIds: newDestinationTileIds
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
  