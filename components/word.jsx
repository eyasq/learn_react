import { useParams } from "react-router-dom";
export function Word() {
    const { word } = useParams();
    const isWord = isNaN(word);
    return (
        <>
            {isWord ? <p>Your word is: {word}</p> : <p>Your number is: {word}</p>}
        </>
    )
}