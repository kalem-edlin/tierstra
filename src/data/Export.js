import html2canvas from 'html2canvas';
import ReactDOM from 'react-dom';

// Will use a node reference and html2canvas to create a JPEF image to export
export const exportScreenshot = ({ ref, data, tileSize }) => {
    if(!ref.current) {
        throw new Error('need a DOMNode for screenshot')
    }
    const element = ReactDOM.findDOMNode(ref.current);
    const tileSizeBuffer = 3

    html2canvas(element, {
        useCORS: true,
        windowWidth: getMaxWidth(data, tileSize, tileSizeBuffer),
        windowHeight: getMaxHeight(data, tileSize),
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
const getMaxWidth = (data, tileSize, tileSizeBuffer) => {
    let max = 0
    data.tierRowOrder.map((rowId) => {    
        let tileCount = data.rows[rowId].tileIds.length
        max = tileCount > max ? tileCount : max
    })
    console.log(max)
    return (max + tileSizeBuffer) * tileSize
}

const getMaxHeight = (data, tileSize) => {
    console.log(data.tierRowOrder.length)
    return (data.tierRowOrder.length) * tileSize
}