
// Handler functions to return the new tierlist data to persist the changes

export const handleRowChange = (data, source, destination, draggableId) => {
    const newTierRowORder = Array.from(data.tierRowOrder)
    newTierRowORder.splice(source.index, 1)
    newTierRowORder.splice(destination.index, 0, draggableId)
    console.log({
        ...data,
        tierRowOrder: newTierRowORder
    })
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