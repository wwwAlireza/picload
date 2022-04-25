import React, { Fragment } from 'react'
// import challenger from "./images/test.jpg";
import linux from "./images/linux.jpeg";

import { Picload } from 'picload'

const App = () => {
  return (
    <Fragment>
      {/* <Picload src={linux} placeholder={challenger} alt="error" className="test" style={{ width: "50px", borderRadius: "50%" }} /> */}

      <Picload src={linux} config={{ randomColor: "dark" }} />
    </Fragment>
  )
}

export default App
