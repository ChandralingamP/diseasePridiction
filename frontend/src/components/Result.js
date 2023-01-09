import React, { useEffect, useState } from 'react'
import axios from "axios";
let image; 
function Result() {
    let [result, setResult] = useState('0');
    let [val, setVal] = useState('0');
    let [flag,setFlag] = useState(false);
     useEffect(() => {
        console.log("Result page");
        axios.get("/api/diabetes").then((response) => {
            setResult(response.data.result);
            setVal(response.data.value);
            // console.log(response.data.image);
            image = response.data.image;
            setFlag(true);
        })        
    }, [])

    return (
        <div>
            <div className="result" >
                <h4>Result {result} : Value = {val}</h4>
                {/* {flag && <img src="/image"/>} */}
                <img src=  {`data:image/png;base64,${image}`}/>
            </div>
        </div>
    )
}

export default Result;