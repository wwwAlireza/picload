import React, { Fragment, useEffect, useState } from 'react';

const useProgress = (Basics, progressType, progressColor, progressBg, progressStyle) => {
    // basics processing
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

    // set progress color
    const setProgressColor = (cssVar) => {
        document.documentElement.style.setProperty(cssVar, progressColor)
    }

    // detect progress
    let selectedProgress = "";
    const setSelectedProgress = dom => {
        selectedProgress = <div style={{ ...domStyle, background: progressBg }}>{dom}</div>
    }
    const selectProgress = progress => {
        switch (progress) {
            case "circles":
                setSelectedProgress(<div className="picload-progress-circles" style={progressStyle}><div></div><div></div><div></div><div></div> </div>);
                setProgressColor('--picload-progress-circles-color');
                break;
            case "ring":
                setSelectedProgress(<div className="picload-progress-ring" style={{ ...progressStyle }}></div>);
                setProgressColor('--picload-progress-ring-color');
                break;
            case "ripple":
                setSelectedProgress(<div className="picload-progress-ripple" style={{ ...progressStyle }}><div></div><div></div> </div>);
                setProgressColor('--picload-progress-ripple-color')
                break;
            case "spinner":
                setSelectedProgress(<div className="picload-progress-spinner" style={{ ...progressStyle }}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>);
                setProgressColor('--picload-progress-spinner-color');
                break;
            case "roller":
                setSelectedProgress(<div className="piclaod-progress-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>)
                setProgressColor('--picload-progress-roller-color')
                break;
            default:
                setSelectedProgress(progress);
                break;
        }
    }
    selectProgress(progressType);

    // mount
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