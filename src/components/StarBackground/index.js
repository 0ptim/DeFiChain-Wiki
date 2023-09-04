import React, { useMemo } from "react";
import Star from "../Star";

const StarBackground = ({ count }) => {
  const stars = useMemo(() => {
    let starsArray = [];
    for (let i = 0; i < count; i++) {
      let style = {
        left: Math.random() * 100 + "vw",
        top: Math.random() * 100 + "vh",
        animationDelay: Math.random() * 5000 + "ms",
        animationDuration: Math.random() * 3 + 2 + "s",
      };
      starsArray.push(<Star key={i} style={style} />);
    }
    return starsArray;
  }, [count]);

  return <>{stars}</>;
};

export default StarBackground;
