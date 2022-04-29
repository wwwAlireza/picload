import React, { Fragment, useState, useEffect } from 'react';
import Placeholder from './placeholder';
import Randomcolor from './Randomcolor';
import Color from './Color';
import Progress from "./Progress";

const BasicsContext = React.createContext();
const ConfigContext = React.createContext();

const Picload = ({ src, placeholder, config, className, style, alt, cref, loading }) => {

  let [finallDom, setFinallDom] = useState(null);

  let option = "placeholder";
  const setOption = value => {
    option = value;
  }

  let _randomColorAssistant = "any";
  const setRandomColorAssistant = value => {
    _randomColorAssistant = value;
  }
  let _colorAssistant = "#fff";
  const setColorAssistant = value => {
    _colorAssistant = value;
  }
  let _progressAssistant = "circles";
  const setProgressAssistant = value => {
    _progressAssistant = value;
  }

  let _progressColor = "#f1f1f1";
  const setProgressColor = value => {
    _progressColor = value;
  }

  let _progressBg = "#0d1117";
  const setProgressBg = value => {
    _progressBg = value;
  }

  let _progressStyle = {};
  const setProgressStyle = value => {
    console.log(value);
    _progressStyle = value;
  }

  useEffect(() => {
    if (config) {
      let { randomColor, color, progress, progressColor, progressBg, progressStyle } = config;
      // random color
      if (randomColor) {
        setOption("randomColor");
        if (randomColor === "dark" || randomColor === "light" || randomColor === "any") {
          setRandomColorAssistant(randomColor);
        } else {
          setRandomColorAssistant("any");
        }
      }

      // progress
      else if (progress) {
        setOption("progress");
        if (progress === "ring" || progress === "ripple" || progress === "spinner" || progress === "circles" || progress === "roller") {
          setProgressAssistant(progress);
        } else if (typeof progress === 'object') {
          setProgressAssistant(progress);
        }
        if (progressBg) {
          setProgressBg(progressBg);
        }
        if (progressColor) {
          setProgressColor(progressColor);
        }
        if (progressStyle) {
          setProgressStyle(progressStyle);
        }
      }

      // color
      else if (color) {
        setOption("color");
        setColorAssistant(color);
      }

    } else {
      setOption("placeholder");
    }

    { option === "placeholder" && setFinallDom(<Placeholder placeholder={placeholder} />) }
    { option === "randomColor" && setFinallDom(<Randomcolor randomColorAssistant={_randomColorAssistant} />) }
    { option === "color" && setFinallDom(<Color colorAssistant={_colorAssistant} />) }
    { option === "progress" && setFinallDom(<Progress progressAssistant={_progressAssistant} progressColor={_progressColor} progressBg={_progressBg} progressStyle={_progressStyle} />) }

  }, [])


  return (
    <>
      <BasicsContext.Provider value={{ className, style, src, alt, cref, loading }}>
        <ConfigContext.Provider value={config}>
          {finallDom}
        </ConfigContext.Provider>
      </BasicsContext.Provider>
    </>
  )
};

export { BasicsContext, ConfigContext };
export default Picload;