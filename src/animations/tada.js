import { tada } from "react-animations";
import { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite";

export default function Tada() {
  const styles = StyleSheet.create({
    tada: {
      animationName: tada,
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
    ${buttonHy && css(styles.tada)}
  `}
      >
        <h2 className="title">Tada Me In</h2>
      </div>
      <button className="button" onClick={clickHy}>Tada</button>
    </div>
  );
}
