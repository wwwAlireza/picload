import React, { Fragment, useEffect, useContext, useState } from 'react';
import useRandomcolor from './hooks/useRandomcolor';
import { BasicsContext } from '.';

const Randomcolor = props => {
    const Basics = useContext(BasicsContext);
    const activeDom = useRandomcolor(Basics, props.randomColorAssistant)

    return (
        <>
            {activeDom}
        </>
    )
};

export default Randomcolor;