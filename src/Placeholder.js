import React, { Fragment, useContext, useState, useEffect } from 'react';
import { BasicsContext } from '.';
import usePlaceholder from './hooks/usePlaceholder';

const Placeholder = props => {
    const Basics = useContext(BasicsContext);
    let { className, style, alt, src } = Basics;
    let loadedSrc = usePlaceholder(src, props.placeholder);
    let domStyle = style;
    if (!domStyle) {
        domStyle = { width: "100%", height: "100%", borderRadius: "inherit" };
    } else {
        if (!domStyle.width) {
            domStyle.width = "100%";
        } if (!domStyle.height) {
            domStyle.height = "100%";
        } if (!domStyle.borderRadius) {
            domStyle.borderRadius = "inherit";
        }
    }
    return (
        <>
            <img className={className} style={domStyle} alt={alt} src={loadedSrc} />
        </>
    )
};

export default Placeholder;