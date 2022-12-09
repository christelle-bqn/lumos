import { FC, useEffect, useRef, useState } from "react";
import { useHomeContext } from "../pages/Home/context";

export interface CircleProps {
  handleData: () => void;
  showData: boolean;
  color: string;
}

export const Circle: FC<CircleProps> = ({ handleData, showData, color }) => {
  const [opacity, setOpacity] = useState(0);

  const homeContext = useHomeContext();

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      alignSelf: "center",
      opacity: opacity,
      zIndex: 2,
    },
    circleOuter: {
      position: "absolute",
      top: 10,
      left: -14,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: color,
      height: 46,
      width: 46,
      borderRadius: 23,
      backgroundColor: "transparent",
      padding: 0,
      margin: 0,
      cursor: "pointer",
    },
    circleInner: {
      position: "absolute",
      top: 7,
      left: 7,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: color,
      height: 28,
      width: 28,
      borderRadius: 14,
    },
  };

  const circleRef = useRef<HTMLDivElement>(null);
  const [circlePosX, setCirclePosX] = useState<number | undefined>(0);
  const [circlePosY, setCirclePosY] = useState<number | undefined>(0);

  const getPosition = () => {
    const circle = circleRef.current;
    const x = circle?.offsetLeft;
    const y = circle?.offsetTop;

    setCirclePosX(x);
    setCirclePosY(y);
  };

  useEffect(() => {
    getPosition();

    if (!circlePosX || !circlePosY) return;
    const diffPosX = Math.abs(homeContext.mousePos.x - circlePosX);
    const diffPosY = Math.abs(homeContext.mousePos.y - circlePosY);

    if (diffPosX > 0 && diffPosX < 50 && diffPosY > 0 && diffPosY < 50) {
      setOpacity(1);
    } else if (showData) {
      setOpacity(0.5);
    } else {
      setOpacity(0);
    }

    //circleRef.current?.getAttribute()
  }, [
    circlePosY,
    circlePosX,
    circleRef,
    homeContext.mousePos.x,
    homeContext.mousePos.y,
    showData,
  ]);

  useEffect(() => {
    window.addEventListener("resize", getPosition);
  }, []);

  return (
    <div style={styles.container} ref={circleRef}>
      <button style={styles.circleOuter} onClick={() => handleData()}>
        <div style={styles.circleInner}></div>
      </button>
    </div>
  );
};
