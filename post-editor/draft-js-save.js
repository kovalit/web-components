import React from 'react';
import { convertToHTML } from 'draft-convert';

const settings = {
    blockToHTML: (block) => {	    
	if (block.type === 'atomic') {
	    return <entity />;
	}
    },
    entityToHTML: (entity, originalText) => {
	if (entity.type === 'score') {
	    return <score id={entity.data.id}>&nbsp;</score>;
	}
	if (entity.type === 'top') {
	    return <top id={entity.data.id}>&nbsp;</top>;
	}
	return originalText;
    }
};


const save = (contentState) => {
    const body = convertToHTML(settings)(contentState);
  
    let regex = /<[\/]{0,1}(entity)[^><]*>/g;
    let html = body.replace(regex, "");
	
    return encodeURI(html);
};

export default save;