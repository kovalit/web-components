import {convertFromHTML} from 'draft-convert';

const settings = {
    htmlToEntity: (nodeName, node, createEntity) => {
	if (nodeName === 'a') {
            return createEntity('LINK', 'IMMUTABLE', {url: node.href});
        }
	if (nodeName === 'score') {
	    let id = node.getAttribute('id');
	    return createEntity('score', 'MUTABLE', { id: id });
	}
	if (nodeName === 'top') {
	    let id = node.getAttribute('id');
	    return createEntity('top', 'MUTABLE', { id: id });
	}
    },

    htmlToBlock: (nodeName, node) => {
	if (nodeName === 'score') {
	    return {type: 'atomic'};
	}
	if (nodeName === 'top') {
	    return {type: 'atomic'};
	}
    }
};


const read = (raw) => {
    let html = decodeURI(raw);
    
    return convertFromHTML(settings)(html);
};

export default read;