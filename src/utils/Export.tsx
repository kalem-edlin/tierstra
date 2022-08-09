import { Exports, Tierlist } from 'data-types';
import html2canvas from 'html2canvas';
import { RefObject } from 'react';
import ReactDOM from 'react-dom';

// Will use a node reference and html2canvas to create a JPEF image to export
export const exportScreenshot = (exports: Exports, screenshotRef: RefObject<HTMLElement>) => {
    const { data, tileLength } = exports

    if(!screenshotRef.current) {
        // ISSUE002
        throw new Error('need a DOMNode for screenshot')
    }
    const element = ReactDOM.findDOMNode(screenshotRef.current) as HTMLElement;
    const tileLengthBuffer = 3

    if ( element === null || data === null || tileLength === null ) {
        // ISSUE002
        alert('Tierlist cannot be screenshotted as it does not exist')
        return 
    }

    html2canvas(element, {
        useCORS: true,
        windowWidth: getMaxWidth(data, tileLength, tileLengthBuffer),
        windowHeight: getMaxHeight(data, tileLength),
    }).then(canvas => {
        exportAs(canvas.toDataURL('image/jpeg', 1.0), 'tierlist.jpeg');
    });
}

// Will use the tierlist JSON representation to export a .JSON file
export const exportJSON = (data: Tierlist | null) => {
    if ( data === null ) {
        // ISSUE002
        alert('Tierlist cannot be exported as it does not exist')
        return 
    }
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
        JSON.stringify(data)
    )}`
    exportAs(jsonString, 'tierlist.json')
}

const exportAs = (uri: string, filename: string) => {
    const link = document.createElement('a')
    link.href = uri
    link.download = filename
    link.click()
};

//these helper functions will make sure the JPEG image contains all the data's content in the screenshot
const getMaxWidth = (data: Tierlist, tileLength: number, tileLengthBuffer: number) => {
    let max = 0
    data.tierOrder.map((tierId) => {    
        let tileCount = data.tiers[tierId].tileIds.length
        return max = tileCount > max ? tileCount : max
    })
    return (max + tileLengthBuffer) * tileLength
}

const getMaxHeight = (data: Tierlist, tileLength: number) => {
    return (data.tierOrder.length) * tileLength
}