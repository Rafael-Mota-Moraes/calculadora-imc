import { Level } from "../../helpers/imc";
import styles from "./GridItem.module.css";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";

type Props = {
  item: Level;
};

export const GridItem = (props: Props) => {
  return (
    <div className={styles.main} style={{ background: props.item.color }}>
      <div className={styles.gridIcon}>
        {props.item.icon === "up" && <img src={upImage} alt="" width="30" />}
        {props.item.icon === "down" && (
          <img src={downImage} alt="" width="30" />
        )}
      </div>
      <div className={styles.gridTitle}>{props.item.title}</div>

      {props.item.yourImc && (
        <div className={styles.yourImc}>
          Seu IMC é de {props.item.yourImc.toFixed(2)} Kg/m²
        </div>
      )}

      <div className={styles.gridInfo}>
        <>
          IMC está entre <strong>{props.item.imc[0]}</strong> e{" "}
          <strong>{props.item.imc[1]}</strong>
        </>
      </div>
    </div>
  );
};