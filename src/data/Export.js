import html2canvas from 'html2canvas';
import ReactDOM from 'react-dom';

// Will use a node reference and html2canvas to create a JPEF image to export
export const exportScreenshot = ({ ref, data, tileLength }) => {
    if(!ref.current) {
        throw new Error('need a DOMNode for screenshot')
    }
    const element = ReactDOM.findDOMNode(ref.current);
    const tileLengthBuffer = 3

    html2canvas(element, {
        useCORS: true,
        windowWidth: getMaxWidth(data, tileLength, tileLengthBuffer),
        windowHeight: getMaxHeight(data, tileLength),
    }).then(canvas => {
        exportAs(canvas.toDataURL('image/jpeg', 1.0), 'tierlist.jpeg');
    });
}

// Will use the tierlist JSON representation to export a .JSON file
export const exportJSON = (data) => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
        JSON.stringify(data)
    )}`
    exportAs(jsonString, 'tierlist.json')
}

const exportAs = (uri, filename) => {
    const link = document.createElement('a')
    link.href = uri
    link.download = filename
    link.click()
};

//these helper functions will make sure the JPEG image contains all the data's content in the screenshot
const getMaxWidth = (data, tileLength, tileLengthBuffer) => {
    let max = 0
    data.tierRowOrder.map((rowId) => {    
        let tileCount = data.rows[rowId].tileIds.length
        return max = tileCount > max ? tileCount : max
    })
    return (max + tileLengthBuffer) * tileLength
}

const getMaxHeight = (data, tileLength) => {
    return (data.tierRowOrder.length) * tileLength
}