import initialData from '../data/InitialData'

// Will import a selected file as a new import session storage item to be loaded in the canvas
export const handleImport = (event) => {
    const fileReader = new FileReader();
        fileReader.readAsText(event.target.files[0], "UTF-8")
        fileReader.onload = e => {
            sessionStorage.setItem('tierlistImportData', e.target.result)
    };
    window.location.reload();
}

// Will check session storage for a queued import or existing session storage and resort to the app initial data if none of those exists (in that order)
export const loadTierlist = () => {
    const importData = getImportDataIfExists()
    if ( importData !== null ) { 
        sessionStorage.removeItem('tierlistImportData')
        return importData 
    }
    const sessionData = getSessionDataIfExists()
    if ( sessionData !== null ) { return sessionData }
    return initialData
}

const getImportDataIfExists = () => {
    return getTierlistFromString(sessionStorage.getItem('tierlistImportData')) 
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