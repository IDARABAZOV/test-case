import React, { useState } from "react";
import "./App.css";
import Popup from "./Popup";

function App() {
    // Result array
    const [value, setValue] = useState([]);

    // Input state
    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);

    // Popup visible
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setValue([...value, Number(firstNum) + Number(secondNum)]);
        setFirstNum(0);
        setSecondNum(0);
        setVisible(true);
    }

  return (
    <>
      <div className="wrapper">
        <div className="container">
            <p className={"container__display"}>{value.length ? value.join(", ") : "Нет значений"}</p>
        </div>
          <div className="container__input-block">
              <input
                  value={firstNum}
                  onChange={e => setFirstNum(e.target.value)}
                  type="number"
                  className="container__input-block--input"
              />
              <input
                  value={secondNum}
                  onChange={e => setSecondNum(e.target.value)}
                  type="number"
                  className="container__input-block--input"
              />
          </div>
          <div className="container__submit">
              <button className="button" onClick={handleClick}>Выполнить</button>
          </div>
      </div>
        <Popup
            visible={visible}
            setVisible={setVisible}
        >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1>Результат: {value[value.length - 1]}</h1>
                <button
                    onClick={() => setVisible(false)}
                    className={"button"}
                >
                    Закрыть
                </button>
            </div>
        </Popup>
    </>
  );
}

export default App;
