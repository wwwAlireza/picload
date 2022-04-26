import React, { Fragment } from 'react'
// import challenger from "./images/test.jpg";
import linux from "./images/linux.jpeg";

import { Picload } from 'picload'

const App = () => {
  return (
    <Fragment>
      <div style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
        <Picload src={linux} config={{ color: "#55143F" }} />
        {/* <Picload src={linux} placeholder={challenger} alt="error" className="test" /> */}
      </div>
    </Fragment>
  )
}

export default App
