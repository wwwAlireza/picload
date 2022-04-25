import { useState } from 'react';

const usePlaceholder = (src, placeholder) => {
    let [activeSrc, setActiveSrc] = useState(placeholder)
    let imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.addEventListener("load", () => {
        setActiveSrc(src);
    })
    return activeSrc;
};

export default usePlaceholder;