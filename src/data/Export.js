import html2canvas from 'html2canvas';
import ReactDOM from 'react-dom';

// Will use a node reference and html2canvas to create a JPEF image to export
export const exportScreenshot = (nodeRef) => {
    if(!nodeRef.current) {
        throw new Error('need a DOMNode for screenshot')
    }
    const element = ReactDOM.findDOMNode(nodeRef.current);
    
    html2canvas(element, {
        scrollY: -window.scrollY,
        useCORS: true
    }).then(canvas => {
        exportAs(canvas.toDataURL('image/jpeg', 1.0), 'tierlist.jpeg');
    });
}

// Will use the tierlist JSON representation to export a .JSON file
export const exportJSON = (json) => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
        JSON.stringify(json)
    )}`
    exportAs(jsonString, 'tierlist.json')
}

const exportAs = (uri, filename) => {
    const link = document.createElement('a')
    link.href = uri
    link.download = filename
    link.click()
};