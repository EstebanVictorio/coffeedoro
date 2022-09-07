import React, {useState, useEffect, useRef, Fragment} from "react"
import autoAnimate from '@formkit/auto-animate'
import ClickableNotation from "./ClickableNotation"


const Caveat = () => (
  <div>
    <ClickableNotation>
      <span style={{ fontWeight: "bold", fontStyle: "italic"}}>Tea contains more caffeine than coffee</span>
    </ClickableNotation>
  </div>
)

const TeaCaveats = () => {
  const [show, setShow] = useState(false)
  const parent = useRef(null)

  const handleClick = () => {
    setShow(!show)
  }

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
    <Fragment>
      <div ref={parent}>
        {show ? (<Caveat />) : null}
      </div>
      {show ? null : (
        <Fragment>
          <p>Click the "monkey button" for a surprise</p>
          <br />
          <button className="monkey-button" onClick={handleClick}>🙊</button>
        </Fragment>
      )}
  </Fragment>
  )
}

export default TeaCaveats