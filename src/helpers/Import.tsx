import { ReloadTierlist } from 'data-types';
import React from 'react';
import { empty } from './Data';

// Will import a selected file as a new import session storage item to be loaded in the canvas
export const handleImport = (
    event: React.ChangeEvent<HTMLInputElement>, 
    reloadTierlist: ReloadTierlist
) => {
    const files = event.target.files
    if ( files === null ) { 
        reloadTierlist(null)
        return 
    }
    const fileReader = new FileReader()
    fileReader.readAsText(files[0], "UTF-8")
    fileReader.onload = e => {
        const result = e.target?.result as string
        if ( result === null ) { 
            reloadTierlist(null)
            return 
        }
        sessionStorage.setItem('tierlistImportData', result)
        const data = getTierlistFromString(result)
        reloadTierlist(data)
    };
}

// Will check session storage for a queued import or existing session storage and resort to the app initial data if none of those exists (in that order)
export const loadTierlist = () => {
    return getSessionDataIfExists() ?? empty
}

export const loadEmptyTierlist = () => {
    return empty
}

const getSessionDataIfExists = () => {
    return getTierlistFromString(sessionStorage.getItem('tierlistData'))
}

const getTierlistFromString = (string: string | null | undefined) => {
    if ( string === "undefined" || string === null) {
        return null
    } else {
        const tierlist = JSON.parse(string!)
        if ( tierlist.tierOrder === undefined) {
            alert("The session storage data is corrupt. Resetting...")
            return null
        }
        return tierlist
    }
}
