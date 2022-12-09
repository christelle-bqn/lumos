import { FC, useEffect, useState } from "react";
import { homeContext, useHomeContext } from "../pages/Home/context";
import { Data } from "../pages/Main/MainData";
import { theme } from "../styles/theme";
import { Circle } from "./Circle";
import { WandSvg } from "./Svg/WandSvg";
import { motion } from "framer-motion";

export interface InfosProps {
  data: Data;
}

export const Infos: FC<InfosProps> = ({ data }) => {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontFamily: theme.fonts.harry,
      fontSize: 22,
      color: theme.colors.beigeDark,
      marginBottom: 20,
    },
    subtitle: {
      fontFamily: theme.fonts.sofiaPro,
      fontSize: 12,
      color: theme.colors.beigeDark,
      marginBottom: 12,
      paddingTop: 15,
    },
    text: {
      fontFamily: theme.fonts.harry,
      fontSize: 18,
      color: theme.colors.beigeDark,
    },
  };

  const homeContext = useHomeContext();

  const [showInfos, setShowInfos] = useState(false);

  const list = {
    visible: { opacity: 0.8 },
    hidden: { opacity: 0 },
  };

  const handleInfos = () => {
    homeContext.handleInstructions();

    if (!showInfos) {
      setShowInfos(true);
    } else {
      setShowInfos(false);
    }
  };

  return (
    <div style={styles.container}>
      <motion.div
        variants={list}
        animate={showInfos ? "visible" : "hidden"}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <p style={styles.title}>{data.title}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: 410,
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={styles.subtitle}>Qui a utilisé le plus de sorts :</p>
            <p style={styles.text}>{data.characterMostSpells}</p>
            <img
              src={require(`../assets/images/${data.houseMostSpells}.png`)}
              height={51}
              width={43}
            />
          </div>

          <img
            height={131}
            width={96}
            src={require(`../assets/images/${data.image}`)}
          />

          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={styles.subtitle}>Les 3 sorts les plus utilisés</p>
            {data.spellsMostUsed.map((spell, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    {[...Array(spell.number)].map((_, i) => {
                      return (
                        <span key={i}>
                          <WandSvg />
                        </span>
                      );
                    })}
                  </div>

                  <p key={index} style={styles.text}>
                    {spell.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      <Circle
        handleData={handleInfos}
        showData={showInfos}
        color={data.color}
      />
    </div>
  );
};
