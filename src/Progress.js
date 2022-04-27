import React, { Fragment, useContext } from 'react';
import useProgress from './hooks/useProgress';
import { BasicsContext } from '.';

const Progress = props => {
    const Basics = useContext(BasicsContext);
    const { progressAssistant, progressColor, progressBg, progressStyle } = props;
    let activeDom = useProgress(Basics, progressAssistant, progressColor, progressBg, progressStyle)

    return (
        <>
            {activeDom}
        </>
    )
};

export default Progress;