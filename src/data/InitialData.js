
// The preloaded initial data that defines the format of a tierlist object
const initialData = {
    tiles: {
        'tile-1':  { id: 'tile-1',  content: '/80s.png', alt: '80s'},
        'tile-2':  { id: 'tile-2',  content: '/90s.png', alt: '90s'},
        'tile-3':  { id: 'tile-3',  content: '/blues.png', alt: 'blues'},
        'tile-4':  { id: 'tile-4',  content: '/classic.png', alt: 'classic'},
        'tile-5':  { id: 'tile-5',  content: '/country.png', alt: 'country'},
        'tile-6':  { id: 'tile-6',  content: '/electronic.png', alt: 'electronic'},
        'tile-7':  { id: 'tile-7',  content: '/folk.png', alt: 'folk'},
        'tile-8':  { id: 'tile-8',  content: '/jazz.png', alt: 'jazz'},
        'tile-9':  { id: 'tile-9',  content: '/latin.png', alt: 'latin'},
        'tile-10': { id: 'tile-10', content: '/metal.png', alt: 'metal'},
        'tile-11': { id: 'tile-11', content: '/oldies.png', alt: 'oldies'},
        'tile-12': { id: 'tile-12', content: '/pop.png', alt: 'pop'},
        'tile-13': { id: 'tile-13', content: '/randb.png', alt: 'randb'},
        'tile-14': { id: 'tile-14', content: '/rap.png', alt: 'rap'},
        'tile-15': { id: 'tile-15', content: '/reggae.png', alt: 'reggae'},
        'tile-16': { id: 'tile-16', content: '/rock.png', alt: 'rock'},
    },
    rows: {
        'tier-row-1': { id: 'tier-row-1', title: 'A', tileIds: [] },
        'tier-row-2': { id: 'tier-row-2', title: 'B', tileIds: [] },
        'tier-row-3': { id: 'tier-row-3', title: 'C', tileIds: [] },
        'palette':    { id: 'palette', tileIds: ['tile-1', 'tile-2', 'tile-3', 'tile-4', 'tile-5', 'tile-6', 'tile-7', 'tile-8', 'tile-9', 'tile-10', 'tile-11', 'tile-12', 'tile-13', 'tile-14', 'tile-15', 'tile-16']},
    },
    tierRowOrder: ['tier-row-1', 'tier-row-2', 'tier-row-3'],
}

export default initialData
