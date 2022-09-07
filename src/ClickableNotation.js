import React, { useState } from "react"
import { RoughNotation } from "react-rough-notation"

const ClickableNotation = ({ children, color = "crimson", type = "circle" }) => {
  const [show, setShow] = useState(false)

  const handleCheck = (e) => {
    setShow(!show)
  }

  return (
    <RoughNotation onClick={handleCheck} className="coffeedoro-notation-wrapper" show={show} type={type} color={color}>
      {children}
    </RoughNotation>
  )
}


export default ClickableNotation