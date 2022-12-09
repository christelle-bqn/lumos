import { FC, useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { theme } from "../../styles/theme";
import { AnimatePresence, motion } from "framer-motion";
import "./Home.css";
import { Circle } from "../../components/Circle";
import { data } from "../Main/MainData";
import { Infos } from "../../components/Infos";
import { HomeContext, homeContext } from "./context";
import Sound from "react-sound";
import { SoundOnSvg } from "../../components/Svg/SoundOnSvg";
import { SoundOffSvg } from "../../components/Svg/SoundOffSvg";
import { LightningSvg } from "../../components/Svg/LightningSvg";

const backgroundImageHome = require("../../assets/images/parchment.jpg");
const backgroundImageMain = require("../../assets/images/forest.jpg");

export const Home: FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    containerHome: {
      backgroundImage: `url(${backgroundImageHome})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: theme.colors.whiteParchment,
    },
    button: {
      border: 0,
      borderRadius: 10,
      fontSize: 20,
      color: theme.colors.beige,
      padding: 15,
      paddingRight: 30,
      paddingLeft: 30,
      backgroundColor: theme.colors.brown,
      cursor: "pointer",
      marginTop: 100,
      fontFamily: "Inter",
      fontWeight: 700,
    },
    title: {
      fontFamily: "Philosopher",
      fontSize: 50,
      color: theme.colors.yellow,
    },
    subtitle: {
      fontFamily: "Philosopher",
      color: theme.colors.brown,
      fontWeight: 700,
    },
    containerMain: {
      backgroundImage: `url(${backgroundImageMain})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
      display: "flex",
      backgroundColor: "#1B1B1B",
    },
  };

  const mainRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [showMain, setShowMain] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showInstructions, setShowInstructions] = useState(true);

  const [soundMute, setSoundMute] = useState(true);
  const [playForest, setPlayForest] = useState(false);

  const context = useMemo<HomeContext>(
    () => ({
      mousePos,
      showMain,
      handleInstructions() {
        setShowInstructions(false);
      },
    }),
    [mousePos, showMain]
  );

  useEffect(() => {
    if (showMain && !playForest && audioRef.current) {
      setPlayForest(true);
      audioRef.current.loop = true;
      audioRef.current.play();
    }

    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      document.documentElement.style.setProperty("--cursorX", e.clientX + "px");
      document.documentElement.style.setProperty("--cursorY", e.clientY + "px");
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showMain, soundMute]);

  const handleSound = () => {
    if (audioRef.current)
      if (soundMute) {
        setSoundMute(false);
        audioRef.current.muted = false;
      } else {
        setSoundMute(true);
        audioRef.current.muted = true;
      }
  };

  const [showGraph, setShowGraph] = useState(false);

  const list = {
    visible: { opacity: 0.8 },
    hidden: { opacity: 0 },
  };

  const handleGraph = () => {
    setShowInstructions(false);

    if (!showGraph) {
      setShowGraph(true);
    } else {
      setShowGraph(false);
    }
  };

  return (
    <homeContext.Provider value={context}>
      {/* HOME */}
      <AnimatePresence>
        {!showMain && (
          <motion.div
            style={styles.containerHome}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0.5 }}
          >
            <h1 style={styles.title}>LUMOS</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <h2 style={styles.subtitle}>Dataviz des sorts dans les films</h2>
              <h2
                style={{
                  fontFamily: "Philosopher",
                  color: theme.colors.brown,
                  fontSize: 30,
                  fontWeight: 700,
                  marginLeft: 8,
                }}
              >
                Harry Potter
              </h2>
            </div>

            <motion.button
              style={styles.button}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onTap={() =>
                setTimeout(() => {
                  setShowMain(true);
                }, 800)
              }
            >
              ENTRER
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN */}
      <AnimatePresence>
        {showMain && (
          <motion.div
            style={styles.containerMain}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="main"
            ref={mainRef}
          >
            {/* Audio */}
            <audio id="audio" ref={audioRef} muted={soundMute}>
              <source
                src={require("../../assets/sounds/forest.mp3")}
                type='audio/mpeg;
        codecs="mp3"'
              />
            </audio>

            <div
              style={{
                padding: 50,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Audio button */}
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  zIndex: 1,
                  backgroundColor: "transparent",
                  borderRadius: 50 / 2,
                  height: 50,
                  width: 50,
                  borderColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 0,
                  padding: 2,
                  cursor: "pointer",
                  alignSelf: "flex-end",
                }}
                onClick={handleSound}
              >
                {soundMute ? <SoundOffSvg /> : <SoundOnSvg />}
              </motion.button>

              <motion.div
                style={{
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                animate={showInstructions ? { opacity: 1 } : { opacity: 0 }}
              >
                <p
                  style={{
                    fontFamily: theme.fonts.sofiaPro,
                    fontSize: 20,
                    color: theme.colors.beige,
                    textAlign: "center",
                    marginBottom: 10,
                  }}
                >
                  Trouve les cercles grâce à la lampe de torche et clique dessus
                  pour faire apparaître des informations sur un film.
                  <br />
                  Active le son pour une meilleure expérience..
                  <br />
                </p>
                <LightningSvg />
              </motion.div>

              {/* Cercles and infos */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto auto auto",
                  gap: "100px 20px",
                }}
              >
                {data.map((elem, index) => {
                  return (
                    <div key={index}>
                      <Infos data={elem} />
                    </div>
                  );
                })}
              </div>

              {/* Graph */}
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Circle
                  handleData={handleGraph}
                  showData={showGraph}
                  color={theme.colors.yellow}
                />

                <motion.div
                  variants={list}
                  animate={showGraph ? "visible" : "hidden"}
                >
                  <img
                    style={{
                      height: 250,
                      zIndex: 1,
                    }}
                    src={require("../../assets/images/evolution_spells.png")}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </homeContext.Provider>
  );
};
