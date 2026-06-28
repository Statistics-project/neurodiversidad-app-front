import React, { useState } from "react";
import "./earth-lesson/styles.css";

import { ProgressBar } from "./earth-lesson/components/UI";
import { StarField } from "./earth-lesson/components/StarField";

import { Screen1 } from "./earth-lesson/screens/Screen1";
import { Screen2 } from "./earth-lesson/screens/Screen2";
import { Screen3 } from "./earth-lesson/screens/Screen3";
import { Screen4 } from "./earth-lesson/screens/Screen4";
import { Screen5 } from "./earth-lesson/screens/Screen5";
import { Screen6 } from "./earth-lesson/screens/Screen6";
import { Screen7 } from "./earth-lesson/screens/Screen7";
import { Screen8 } from "./earth-lesson/screens/Screen8";
import { Screen9 } from "./earth-lesson/screens/Screen9";
import { Screen10 } from "./earth-lesson/screens/Screen10";

const SCREENS = [
  Screen1,
  Screen2,
  Screen3,
  Screen4,
  Screen5,
  Screen6,
  Screen7,
  Screen8,
  Screen9,
  Screen10,
];

export default function EarthLesson() {
  const [idx, setIdx] = useState(0);
  const [mountKey, setMountKey] = useState(0);

  const next = () => {
    const ni = idx < 9 ? idx + 1 : 0;
    setIdx(ni);
    setMountKey((k) => k + 1);
  };

  const Scr = SCREENS[idx];

  return (
    <div
      className="earth-lesson-wrapper"
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(160deg,#050518 0%,#0a1232 40%,#050e22 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <StarField />
      <ProgressBar idx={idx} />
      <div
        className="earth-lesson-content"
        style={{
          flex: 1,
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          maxWidth: 1000,
          margin: "0 auto",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div key={mountKey} className="su" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Scr onNext={next} />
        </div>
      </div>
    </div>
  );
}