const initialData = {
    tiles: {
        'tile-1': {id: 'tile-1', content: 'This is tile 1'},
        'tile-2': {id: 'tile-2', content: 'This is tile 2'},
        'tile-3': {id: 'tile-3', content: 'This is tile 3'},
        'tile-4': {id: 'tile-4', content: 'This is tile 4'},
        'tile-5': {id: 'tile-5', content: 'This is tile 5'},
        'tile-6': {id: 'tile-6', content: 'This is tile 6'},
    },
    rows: {
        'tier-row-1': {id: 'tier-row-1', title: 'A', tileIds: []},
        'tier-row-2': {id: 'tier-row-2', title: 'B', tileIds: []},
        'tier-row-3': {id: 'tier-row-3', title: 'C', tileIds: []},
        'tier-palette': {id: 'tier-palette', title: 'Palette', tileIds: ['tile-1', 'tile-2', 'tile-3', 'tile-4', 'tile-5', 'tile-6']},
    },
    rowOrder: ['tier-row-1', 'tier-row-2', 'tier-row-3', 'tier-palette'],
}

export default initialData