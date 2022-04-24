import React, { Fragment, useState, useEffect } from 'react';
import Placeholder from './placeholder';

const BasicsContext = React.createContext();
const ConfigContext = React.createContext();

const Picload = ({ src, placeholder, config, className, style, alt }) => {
  let [option, setOption] = useState("placeholder");
  let [randomColorAssistant, setRandomColorAssistant] = useState("any");
  let [colorAssistant, setColorAssistant] = useState("#fff");
  let [progressAssistant, setProgressAssistant] = useState("circles");
  let [progressColor, setProgressColor] = useState("#f1f1f1");
  let [progressBg, setProgressBg] = useState("#212526");

  useEffect(() => {
    if (config) {
      let { randomColor, color, progress, progressColor } = config;
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
        if (progress === "round" || progress === "rings" || progress === "wait" || progress === "circles" || progress === "round-corcles") {
          setProgressAssistant(progress);
        }
        if (color) {
          setProgressBg(color);
        }
        if (progressColor) {
          setProgressColor(progressColor);
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
  }, [])


  return (
    <>
      <BasicsContext.Provider value={{ className, style, src, alt }}>
        <ConfigContext.Provider value={config}>
          {option === "placeholder" && <Placeholder placeholder={placeholder} />}
        </ConfigContext.Provider>
      </BasicsContext.Provider>
    </>
  )
};

export { Picload, BasicsContext, ConfigContext };