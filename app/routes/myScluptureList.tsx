import { useState } from "react";
import { sculptureList } from "./SculptureLists";

export default function EProject() {
    const [index,setIndex] = useState(0);

    function handleClickNext() {
        if (index + 1 >= sculptureList.length) {
            setIndex(0); 
        } else {
            setIndex(index + 1);
        }
    }

    function handleClickBack() {
        if (index === 1) {
            setIndex(sculptureList.length - 1); 
        } else {
            setIndex(index - 1);
        }
    }
    
    let sculpture = sculptureList[index];

    return(
        <>
            <button className = "m-3 text-red-700" onClick={handleClickNext}>
                Prev
            </button>
            <button onClick={handleClickNext}>
                Next
            </button>
            <h2>
                <i>{sculpture.name} </i> พัฒนาโดยโดย {sculpture.author}
            </h2>
            <h3>
               ({index + 1} จาก {sculptureList.length})
            </h3>
            <img
                src={sculpture.url}
                title={sculpture.name}
            />
            <p>
                {sculpture.description}
            </p>
            <a href={sculpture.reference}target="_blank">เอกสารอ้างอิงฉบับเต็ม</a>
        </>
    );
} 