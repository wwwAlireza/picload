import React, { Fragment, useEffect, useState } from 'react';

const useProgress = (Basics, progressType, progressColor, progressBg, progressStyle) => {
    const { className, style, src, alt, cref } = Basics;
    let [activeDom, setActiveDom] = useState(null);
    let domStyle = style | {};
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
    domStyle.display = "grid";
    domStyle.placeItems = "center";

    const CirclesDiv = () => {
        return <div style={{ background: progressColor }}></div>
    }

    let selectedProgress = "";
    const selectProgress = progress => {
        switch (progress) {
            case "circles":
                selectedProgress = <div style={{ ...domStyle, background: progressBg }}><div className="picload-progress-circles" style={progressStyle}><CirclesDiv />  <CirclesDiv /> <CirclesDiv /> <CirclesDiv /> </div></div>
                break;
        }
    }
    selectProgress(progressType);

    useEffect(() => {
        let imageToLoad = new Image();
        imageToLoad.src = src;

        setActiveDom(selectedProgress);
        imageToLoad.addEventListener("load", () => {
            setActiveDom(<img src={src} className={className} alt={alt} style={domStyle} ref={cref} />)
        })
    }, [])
    return activeDom;
};

export default useProgress;