import React, { Fragment, useRef } from 'react'
// import challenger from "./images/test.jpg";
import linux from "./images/linux.jpeg";

import { Picload } from 'picload'

const App = () => {
  let myImg = useRef();
  const clickHandler = () => {
    console.log(myImg);
  }
  return (
    <Fragment>

      <div style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
        <Picload src={linux} config={{ randomColor: "any" }} cref={myImg} />
        {/* <Picload src={linux} placeholder={challenger} alt="error" className="test" /> */}
      </div>
      <button onClick={clickHandler}>show ref</button>
    </Fragment>
  )
}

export default App
