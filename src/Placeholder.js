import React, { Fragment, useContext, useState, useEffect } from 'react';
import { BasicsContext } from '.';

const Placeholder = props => {
    const Basics = useContext(BasicsContext);
    let [activeSrc, setActiveSrc] = useState(props.placeholder);
    console.log(Basics);

    // Mount
    useEffect(() => {
        let imageToLoad = new Image();
        imageToLoad.src = Basics.src;
        imageToLoad.addEventListener("load", () => {
            setTimeout(() => {
                setActiveSrc(Basics.src);
            }, 2000)
        })
    }, [])

    const { className, style, alt } = Basics;
    return (
        <>
            <img className={className} style={style} alt={alt} src={activeSrc} />
        </>
    )
};

export default Placeholder;