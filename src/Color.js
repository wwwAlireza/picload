import React, { Fragment, useContext, useSatet } from 'react';
import useColor from "./hooks/useColor";
import { BasicsContext } from '.';

const Color = props => {
    const Basics = useContext(BasicsContext);
    let activeDom = useColor(Basics, props.colorAssistant);
    return (
        <>
            {activeDom}
        </>
    )
};

export default Color;
