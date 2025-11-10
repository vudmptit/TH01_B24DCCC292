import React, { useState } from "react";
import ColorBox from "./ColorBox";

const ColorPicker = ({ color }) => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div>
      <h2>Bài 2: Color Picker</h2>
      {color.map((c, idx) => (
        <button key={idx} onClick={() => setSelectedColor(c)}>{c}</button>
      ))}
      {selectedColor && <ColorBox color={selectedColor} />}
    </div>
  );
};

export default ColorPicker;