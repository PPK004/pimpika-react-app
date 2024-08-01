import { useState } from "react";
import { sculptureList } from "./SculptureLists";

export default function EProject() {
    const [index, setIndex] = useState(0);

    function handleClickNext() {
        if (index + 1 >= sculptureList.length) {
            setIndex(0); 
        } else {
            setIndex(index + 1);
        }
    }

    function handleClickBack() {
        if (index === 0) {
            setIndex(sculptureList.length - 1); 
        } else {
            setIndex(index - 1);
        }
    }

    let sculpture = sculptureList[index];

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
                <button 
                    className="m-3 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-700 transition duration-300" 
                    onClick={handleClickBack}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button 
                    className="m-3 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-700 transition duration-300" 
                    onClick={handleClickNext}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            <div className="text-center">
                <h2 className="text-xl font-bold">
                    <i>{sculpture.name}</i> พัฒนาโดย {sculpture.author}
                </h2>
                <h3 className="text-gray-600 mb-4">
                   ({index + 1} จาก {sculptureList.length})
                </h3>
                <img 
                    src={sculpture.url} 
                    alt={sculpture.name} 
                    className="mx-auto mb-4 max-w-sm rounded shadow-lg"
                />
                <p className="text-justify px-4">
                    {sculpture.description}
                </p>
                <a 
                    href={sculpture.reference} 
                    target="_blank" 
                    className="text-pink-500 hover:underline"
                >
                    เอกสารอ้างอิงฉบับเต็ม
                </a>
            </div>
        </div>
    );
}
