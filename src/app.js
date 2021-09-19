import React from 'react'
import FadeIn from './animations/fadein'
import Tada from './animations/tada'
import Hinge from './animations/hinge'
import Dance from './animations/dance'
import Bump from './animations/bump'
import "./styles.css";

const App = () => {
  return (
    <h1>
      React Animations
      <Bump/>
      <FadeIn />
      <Tada />
      <Hinge />
      <Dance />
    </h1>
  )
}

export default App