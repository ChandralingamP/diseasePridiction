import React, { useEffect, useState } from 'react'

const  Testing = ()=>  {
    const [data,setData] = useState("nothing");
    
    useEffect( ()=>{
      setData("Nothing here...")
         fetch("http://localhost:5000/api/diabetes",{
          method:"post",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({   "Pregnancies": 2 ,   "Glucose": 146,   "BloodPressure": 72.405,   "SkinThickness": 29.15342,   "Insulin": 155.54822,   "BMI": 27.5,   "DiabetesPedigreeFunction": 0.240,   "Age": 28.0 })
         })
        .then(res => res.json())
        .then(d => console.log(d))
    },[])
  return (
    <div>{data}</div>
  )
}

export default Testing