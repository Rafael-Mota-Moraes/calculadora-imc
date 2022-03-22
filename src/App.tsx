import { useState } from "react";
import "./App.css";
import poweredImage from "./assets/powered.png";
import leftArrowImage from "./assets/leftarrow.png";
import { levels, calculateImc, Level } from "./helpers/imc";
import { GridItem } from "./components/GridItem/GridItem";

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert("Digite todos os campos.");
    }
  };

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setHeightField(0);
  };

  return (
    <div className="main">
      <header>
        <div className="headerContainer">
          <img src={poweredImage} alt="" />
        </div>
      </header>
      <div className="container">
        <div className="leftSide">
          <h1>Calcule o seu IMC</h1>
          <p>
            IMC é a sigla para índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>

          <input
            placeholder="Digite a sua altura. EX: 1.5 (em metros)"
            type="number"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(Number(e.target.value))}
            disabled={toShow ? true : false}
          />

          <input
            placeholder="Digite o seu peso. Ex: 75.3 (em Kg)"
            type="number"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(Number(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button
            onClick={handleCalculateButton}
            disabled={toShow ? true : false}
          >
            Calcular
          </button>
        </div>

        <div className="rightSide">
          {!toShow && (
            <div className="grid">
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className="rightBig">
              <div className="rightArrow" onClick={handleBackButton}>
                <img src={leftArrowImage} alt="Seta para esquerda" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
