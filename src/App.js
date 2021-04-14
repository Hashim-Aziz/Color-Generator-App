import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(20));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(20);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="color"
            id="color"
            value={color}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((colorItem, index) => {
          return (
            <SingleColor
              {...colorItem}
              key={index}
              index={index}
              hexColor={colorItem.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
