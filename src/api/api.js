//const API_KEY="3i0A39wt8iOSts8F2AYsAZbSCY03"

export const getmathes=()=>{
    const url='https://cricapi.com/api/matches/?apikey=3i0A39wt8iOSts8F2AYsAZbSCY03';

    return fetch(url)
        .then((responce)=>responce.json())
        .catch((error)=>console.log("Error : ",error));
};

export const getdetails=(id)=>{
    const url='https://cricapi.com/api/cricketScore/?apikey=3i0A39wt8iOSts8F2AYsAZbSCY03&unique_id={id}';

    return fetch(url)
        .then((responce)=>responce.json())
        .catch((error)=>console.log("Error : ",error));
}