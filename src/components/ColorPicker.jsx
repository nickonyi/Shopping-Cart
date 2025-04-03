import React, { useState } from 'react';

function ColorPicker() {
  const [active, setActive] = useState('w');
  const colors = ['w', 'o', 'r', 'p', 'g'];

  return (
    <div className="color-picker">
      <h3 className="title">Choose color</h3>
      <div className="colors">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color ${color} ${active == color ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
