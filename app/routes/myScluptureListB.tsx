import { useState } from "react";
import { sculptureList } from "./SculptureLists";

export default function EProject() {
    const [index, setIndex] = useState(0);
    const [sctList, setSctList] = useState(sculptureList);

    return (
        <>
            <h1 className="text-5xl font-extrabold text-center my-12 text-gray-900">
                รายการโครงงานของเรา
            </h1>
            {sctList.map((sculpture) => (
                <div
                    key={sculpture.id}
                    className="border border-gray-200 rounded-lg p-8 my-8 shadow-lg bg-white transition-transform transform hover:scale-105"
                >
                    <button
                        onClick={() => {
                            setSctList(sctList.filter(tmp => tmp.id !== sculpture.id));
                        }}
                        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition-transform transform hover:scale-105 duration-300 ease-in-out"
                    >
                        Delete
                    </button>
                    <div className="text-4xl font-semibold text-center my-6">
                        <h2 className="text-gray-800">
                            <i>{sculpture.name}</i> พัฒนาโดย {sculpture.author}
                        </h2>
                    </div>
                    <div className="text-2xl font-medium text-center my-4 text-gray-500">
                        <h3>
                            {index + 1} จาก {sctList.length}
                        </h3>
                    </div>
                    <div className="flex justify-center my-6">
                        <div className="max-w-4xl">
                            <img
                                src={sculpture.url}
                                alt={sculpture.name}
                                className="w-full h-auto rounded-lg shadow-xl border border-gray-300 transition-transform duration-300 transform hover:scale-105"
                            />
                        </div>
                    </div>
                    <div className="text-center my-6 px-8">
                        <p className="text-lg text-gray-700 mb-4">{sculpture.description}</p>
                        <a
                            href={sculpture.reference}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 underline"
                        >
                            เอกสารอ้างอิง
                        </a>
                    </div>
                </div>
            ))}
        </>
    );
}
