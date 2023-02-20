import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../Diabetes/diabetes.css";
import { useNavigate } from "react-router-dom";
function LiverDisease() {
  const navigate = useNavigate();
  const [Age, setAge] = useState("");

  const [male, setMale] = useState(0); //1 male , 0 female
  const [Female, setFm] = useState(0); //1 male , 0 female
  const [Other, setOther] = useState(0); //1 male , 0 female
  const [Gender, setGender] = useState(0); //1 male , 0 female
  const [TotalBilirubin, setTotalBilirubin] = useState("");
  const [DirectBilirubin, setDirectBilirubin] = useState("");
  const [Aap, setAap] = useState("");
  const [Sgptaa, setSgptaa] = useState("");
  const [Sgotaa, setSgotaa] = useState("");
  const [TotalProtiens, setTotalProtiens] = useState("");
  const [ALB, setALB] = useState("");
  const [ARG, setARG] = useState("");
  function submitH() {
    if(male == 1){
      setGender(1);
    }else{
      setGender(0);
    }
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        features : [Age,
        Gender,
        TotalBilirubin,
        DirectBilirubin,
        Aap,
        Sgptaa,
        Sgotaa,
        TotalProtiens,
        ALB,
        ARG],
        disease : 'liver'
      }),
    };
    fetch("/predict", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        navigate("/result");
      })
      .catch((err) => console.error(err));
  }
  return (
    <div className="Container">
      <h1>Enter The Following Details...</h1>
      <form className="form">
        <Form.Group>
          <Form.Label>Age of the patient</Form.Label>
          <Form.Control
            type="text"
            value={Age}
            name="Age"
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age of the patient"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Gender of the patient</Form.Label>
          <div >
            <input style={{marginLeft : '5px'}} type="radio" value={male} name="gender" /> Male
            <input style={{marginLeft : '5px'}}  type="radio" value={Female} name="gender" /> Female
            <input style={{marginLeft : '5px'}}  type="radio" value={Other} name="gender" /> Other
          </div>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Total Bilirubin</Form.Label>
          <Form.Control
            type="text"
            value={TotalBilirubin}
            name="TotalBilirubin"
            onChange={(e) => setTotalBilirubin(e.target.value)}
            placeholder="Total Bilirubin"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Direct Bilirubin</Form.Label>
          <Form.Control
            type="text"
            value={DirectBilirubin}
            name="DirectBilirubin"
            onChange={(e) => setDirectBilirubin(e.target.value)}
            placeholder="Direct Bilirubin"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Alkphos Alkaline Phosphotase</Form.Label>
          <Form.Control
            type="text"
            value={Aap}
            name="Aap"
            onChange={(e) => setAap(e.target.value)}
            placeholder="Alkphos Alkaline Phosphotase"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Sgpt Alamine Aminotransferase</Form.Label>
          <Form.Control
            type="text"
            value={Sgptaa}
            name="Sgptaa"
            onChange={(e) => setSgptaa(e.target.value)}
            placeholder="Sgpt Alamine Aminotransferase"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Sgot Aspartate Aminotransferase</Form.Label>
          <Form.Control
            type="text"
            value={Sgotaa}
            name="Sgotaa"
            onChange={(e) => setSgotaa(e.target.value)}
            placeholder="Sgot Aspartate Aminotransferase"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Total Protiens</Form.Label>
          <Form.Control
            type="text"
            value={TotalProtiens}
            name="Age"
            onChange={(e) => setTotalProtiens(e.target.value)}
            placeholder="Total Protiens"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>ALB Albumin</Form.Label>
          <Form.Control
            type="text"
            value={ALB}
            name="ALB"
            onChange={(e) => setALB(e.target.value)}
            placeholder="ALB Albumin"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>A/G Ratio Albumin and Globulin Ratio</Form.Label>
          <Form.Control
            type="text"
            value={ARG}
            name="ARG"
            onChange={(e) => setARG(e.target.value)}
            placeholder="A/G Ratio"
          />
        </Form.Group>
        <br />
        <div className="btn">
          <Button id="btn" variant="primary" onClick={() => submitH()}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LiverDisease;
