import { useParams } from "react-router-dom";
export function Styled() {

    const { word, color, bgcolor } = useParams();
    return (
        <div style={{ backgroundColor: bgcolor, width: "100%", height: "50vh" }}>
            <p style={{ color: color }}>{word}</p>
        </div>
    )
}