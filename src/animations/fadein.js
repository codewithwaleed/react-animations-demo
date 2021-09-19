import { tada, fadeIn } from "react-animations";
import { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite";

export default function FadeIn() {
  const styles = StyleSheet.create({
    fadeIn: {
      animationName: fadeIn,
      animationDuration: "1s"
    }
  });
  const [buttonHy, setButtonHy] = useState(false);
  function clickHy() {
    setButtonHy(true);
  }
  useEffect(() => {
    buttonHy &&
      setTimeout(() => {
        setButtonHy(false);
      }, 100);
  }, [buttonHy, styles]);
  return (
    <div>
      <div
        className={`
    title is-1
    ${buttonHy && css(styles.fadeIn)}
  `}
      >
        <h2 className="title">Fade Me In</h2>
      </div>
      <button className="button" onClick={clickHy}>FadeIn</button>
    </div>
  );
}
