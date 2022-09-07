import React, {useState, useEffect, useRef, Fragment} from "react"
import img from "../prohibited.png"
import autoAnimate from '@formkit/auto-animate'


const CaveatList = () => (
  <div>
    <h2>Caveats</h2>
    <ul>
      <li>Caffeine is a Psychoactive drug</li>
      <li>Last legal performance-enhancing drug (As of 2020) </li>
      <li>Half of consumed caffeine is metabolized in a timespan of 3 to 5 hours</li>
      <li>Decaf coffee contains around 6% of total regular coffee caffeine</li>
      <li>Caffeine varies depending on brewing method and grinding coarseness</li>
      <li>For milk beverages: milk breaks irreversibly at 70 degrees Celsius (providing an egg-like smell/flavor)</li>
    </ul>
  </div>
)

const CoffeeCaveats = () => {
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
        {show ? (<CaveatList />) : null}
      </div>
      {show ? null : (
        <Fragment>
          <p>NOT SO FAST!</p>
          <p>Click the "forbidden" Sonic to show some coffee caveats</p>
          <br />
          <button className="coffee-caveats-button" onClick={handleClick}>
            <img src={img}/>
          </button>
        </Fragment>
      )}
    </Fragment>
  )
}

export default CoffeeCaveats