import React from 'react';
import './icon.scss';


const Icon = ({name}) => {
    return <span className={`icons icons_${name}`}></span>;
};

export default Icon;


