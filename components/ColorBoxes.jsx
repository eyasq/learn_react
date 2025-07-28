import { useState } from "react";
import "./ColorBoxes.css"

export function ColorBoxes() {
    const [inputColor, setInputColor] = useState("");
    const [colorList, setColorList] = useState([]);

    function handleAddColor() {
        if (!inputColor.trim()) return;
        setColorList(prev => [...prev, inputColor.trim()]);
        setInputColor("");
    }
    return (
        <div>
            <h2>Add a Color</h2>
            <input type="text" value={inputColor} onChange={(e) => { setInputColor(e.target.value) }} placeholder="Input a color name or hex" />
            <button onClick={handleAddColor}>Add Color</button>
            <div className="box-container">
                {colorList.map((color, i) => (
                    <div key={i} className="color-box" style={{ backgroundColor: color }} />
                ))}
            </div>
        </div>
    )
}