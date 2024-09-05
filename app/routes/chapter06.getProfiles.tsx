import { useState, useEffect} from "react";

export default function GetProfiles(){
    const[data, setData] = useState(null);// {}, []
    const[loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch('http://localhost:3000/api/getProfile');
        
            if(response.ok){
                console.log('Network response was not pk');
            }

            const result = await response.json();
            setData(result);
            setLoading(false);
        };

        fetchData();
},[]);

    if(loading){
        return<p className="m-5 p-5">Loading...</p>
    }

    return(
        <div className="m-5 p-5">
            <h1 className="text-2xl font-bold">Hi, user profile:</h1>
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-5 p-5 bg-white">
            <img
                    className="w-full h-48 object-cover border-b border-gray-200"
                    src={data.imageUrl}
                    alt="Profile"
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-center">
                        ชื่อ: {data.fname} {data.lname}
                    </div>
                    <p className="text-gray-700 text-base text-center">
                        <strong>สาขา: </strong>{data.major}
                    </p>
                    <p className="text-gray-700 text-base text-center">
                        <strong>E-mail: </strong>{data.email}
                    </p>
                </div>
            </div>
        </div>
    );
}