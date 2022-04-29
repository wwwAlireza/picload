import React, { useState, useEffect } from 'react';

const darkRange = ["#606291", "#868C9F", "#05060B", "#E8CEC3", "#5B5867", "#083281", "#95120E", "#184E39", "#705400", "#401D87"];
const lightRange = ["#EBF1FF", "#589A23", "#FAFBFC", "#F2ECFE", "#7243D0", "#55D8C1", "#FF6FB5", "#FCF69C", "#FFD59E", "#069A8E"];
const anyRange = [...darkRange, ...lightRange];

const randomSelector = colors => {
    let randomIndex = Math.floor(Math.random() * colors.length);
    if (colors[randomIndex]) {
        return colors[randomIndex];
    } else {
        return colors[5];
    }

}

const getSelected = (range) => {
    switch (range) {
        case "dark":
            return (randomSelector(darkRange));
            break;
        case "light":
            return (randomSelector(lightRange));
            break;
        case "any":
            return (randomSelector(anyRange));
            break;
    }
}

const useRandomcolor = (Basics, colorRange) => {
    let [activeDom, setActiveDom] = useState(null);
    let selectedColor = getSelected(colorRange);
    useEffect(() => {

        const { src, className, alt, style, cref, loading } = Basics;
        let domStyle = style;
        let imageToLoad = new Image();
        imageToLoad.src = src;

        if (!domStyle) {
            domStyle = { width: "100%", height: "100%", borderRadius: "inherit" };
        } else {
            if (!domStyle.width) {
                domStyle.width = "100%";
            } if (!domStyle.height) {
                domStyle.height = "100%";
            } if (!domStyle.borderRadius) {
                domStyle.borderRadius = "inherit"
            }
        }

        setActiveDom(<div style={{ ...domStyle, background: selectedColor }}></div>)
        imageToLoad.addEventListener("load", () => {
            setActiveDom(<img src={src} className={className} alt={alt} style={domStyle} ref={cref} loading={loading} />)
        });

    }, [])
    return activeDom;
};

export default useRandomcolor;