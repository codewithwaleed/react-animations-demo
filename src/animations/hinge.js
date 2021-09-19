import { hinge } from "react-animations";
import { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite";


export default function Hinge() {
  const styles = StyleSheet.create({
    hinge: {
      animationName: hinge,
      animationDuration: '.75s',
    },
  });
  const [buttonHy, setButtonHy] = useState(false);
  function clickHy() {
    setButtonHy(true);
  }
  useEffect(() => {
    buttonHy &&
      setTimeout(() => {
        setButtonHy(false);
      }, 1000);
  }, [buttonHy, styles]);
  return (
    <div>
      <div
        className={`
    title is-1
    ${buttonHy && css(styles.hinge)}
  `}
      >
        <h2 className="title">hinge Me In</h2>
      </div>
      <button className="button" onClick={clickHy}>hinge</button>
    </div>
  );
}
