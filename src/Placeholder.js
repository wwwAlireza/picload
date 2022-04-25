import React, { Fragment, useContext, useState, useEffect } from 'react';
import { BasicsContext } from '.';
import usePlaceholder from './hooks/usePlaceholder';

const Placeholder = props => {
    const Basics = useContext(BasicsContext);
    let { className, style, alt, src } = Basics;
    let loadedSrc = usePlaceholder(src, props.placeholder);
    let domStyle = style;
    if (!domStyle) {
        domStyle = { width: "100%", height: "100%" };
    } else {
        if (!domStyle.width) {
            domStyle.width = "100%";
        } if (!domStyle.height) {
            domStyle.height = "100%";
        }
    }


    // useEffect(() => {
    //     console.log(true);
    // }, [])

    return (
        <>
            <img className={className} style={style} alt={alt} src={loadedSrc} />
        </>
    )
};

export default Placeholder;