import initialData from '../data/InitialData'

// Will import a selected file as a new import session storage item to be loaded in the canvas
export const handleImport = (event, reloadTierlist) => {
    const fileReader = new FileReader();
        fileReader.readAsText(event.target.files[0], "UTF-8")
        fileReader.onload = e => {
            sessionStorage.setItem('tierlistImportData', e.target.result)
            const data = getTierlistFromString(e.target.result)
            reloadTierlist(data)
        };
}

// Will check session storage for a queued import or existing session storage and resort to the app initial data if none of those exists (in that order)
export const loadTierlist = () => {
    return getSessionDataIfExists() ?? initialData
}

export const loadDefaultTierlist = () => {
    return initialData
}

const getSessionDataIfExists = () => {
    return getTierlistFromString(sessionStorage.getItem('tierlistData'))
}

const getTierlistFromString = (string) => {
    if ( string === "undefined" || string === null) {
        return null
    } else {
        const tierlist = JSON.parse(string)
        if ( tierlist.tierRowOrder === undefined) {
            alert("The session storage data is corrupt. Resetting...")
            return null
        }
        return tierlist
    }
}
