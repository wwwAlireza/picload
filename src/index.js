import React, { Fragment, useState, useEffect } from 'react';
import Placeholder from './placeholder';
import Randomcolor from './Randomcolor';

const BasicsContext = React.createContext();
const ConfigContext = React.createContext();

const Picload = ({ src, placeholder, config, className, style, alt, cref }) => {

  let [finallDom, setFinallDom] = useState(null);

  let option = "placeholder";
  const setOption = value => {
    option = value;
  }

  let randomColorAssistant = "any";
  const setRandomColorAssistant = value => {
    randomColorAssistant = value;
  }

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

    { option === "placeholder" && setFinallDom(<Placeholder placeholder={placeholder} />) }
    { option === "randomColor" && setFinallDom(<Randomcolor randomColorAssistant={randomColorAssistant} />) }

  }, [])


  return (
    <>
      <BasicsContext.Provider value={{ className, style, src, alt, cref }}>
        <ConfigContext.Provider value={config}>
          {finallDom}
        </ConfigContext.Provider>
      </BasicsContext.Provider>
    </>
  )
};

export { Picload, BasicsContext, ConfigContext };