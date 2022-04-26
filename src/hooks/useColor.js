import React, { useState, useEffect } from 'react';

const useColor = (Basics, color) => {
    const { src, style, className, cref, alt } = Basics;
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
    let [activeDom, setActiveDom] = useState(null);
    useEffect(() => {
        let imageToLoad = new Image();
        imageToLoad.src = src;
        setActiveDom(<div style={{ ...domStyle, background: color }}></div>)
        imageToLoad.addEventListener("load", () => {
            setActiveDom(<img src={src} className={className} alt={alt} style={domStyle} ref={cref} />)
        })
    }, [])
    return activeDom;
};

export default useColor;