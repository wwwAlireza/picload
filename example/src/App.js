import React, { Fragment } from 'react'
import challenger from "./images/test.jpg";
// import Loading from './Loading';
import linux from "./images/linux.jpeg";
import Picload from 'picload'
import "picload/dist/progress-circles.css"
import "picload/dist/progress-ring.css"
import "picload/dist/progress-ripple.css"
import "picload/dist/progress-spinner.css"
import "picload/dist/progress-roller.css"

const App = () => {
  return (
    <Fragment>
      <div style={{ width: '100px', height: '100px', borderRadius: '50%' }}>
        {/* <Picload src={linux} config={{ progress: "ripple", progressColor: "yellow", progressBg: "red" }} /> */}
        <Picload src={linux} placeholder={challenger} alt="error" className="test" />
      </div>
    </Fragment>
  )
}

export default App
