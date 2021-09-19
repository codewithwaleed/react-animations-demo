import { tada, headShake, bounce, rotateOut, swing, jello, rotateIn, flip } from "react-animations";
import { useState } from "react";
import { StyleSheet, css } from "aphrodite";
let danceInterval = null;
export default function Dance() {
  const styles = StyleSheet.create({
    tada: {
      animationName: tada,
      animationDuration: '1s',
    },
    headShake: {
      animationName: headShake,
      animationDuration: '1s',
    },
    flip: {
      animationName: flip,
      animationDuration: '1s',
    },
    swing: {
      animationName: swing,
      animationDuration: '.75s',
    },
    jello: {
      animationName: jello,
      animationDuration: '.75s',
    },
    rotateIn: {
      animationName: rotateIn,
      animationDuration: '.75s',
    },
    rotateOut: {
      animationName: rotateOut,
      animationDuration: '.75s',
    },
  })

  const [randomAnimation, setRandomAnimation] = useState('')
  const [bump, setBump] = useState(false)

  const handleBump = () => {
    if (randomAnimation) {
      handleDance();
    }
    setBump(true)

    setTimeout(() => {
      setBump(false)
    }, 1000)
  }

  const handleDance = () => {
    if (randomAnimation) {
      setRandomAnimation('')
      clearInterval(danceInterval);
    } else {
      const animations = [
        "wobble", "tada", "headShake",
        "bounce", "rotateOut",
        "swing", "jello",
        "rotateIn", "flip"
      ];
      setRandomAnimation("rollIn")

      danceInterval = setInterval(() => {
        const randomNumber = Math.floor(
          Math.random() * (animations.length)
        );
        setRandomAnimation(animations[randomNumber])
      }, 750)
    }
  }

  return (
    <div>
      <i className={`
            fa fa-child fa-5x text-center
            ${css(
        styles.icon,
        randomAnimation && styles[randomAnimation],
        bump && styles["jello"],
      )}
          `} />
      <div
        className={`
    title is-1
    ${css(
          styles.icon,
          randomAnimation && styles[randomAnimation],
          bump && styles["jello"],
        )}  `}
      >
        <h2 className="title">Bump Me In</h2>
      </div>
      <button className="button" onClick={handleBump}>Bump</button>

    </div>
  );
}
