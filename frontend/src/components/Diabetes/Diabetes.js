import React, {useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import "./diabetes.css";
import {useNavigate} from 'react-router-dom';
function Diabetes() {
  const navigate = useNavigate();
  const [Pregnancy, setPregnancy] = useState("");
  const [Glucose, setGlucose] = useState("");
  const [BloodPressure, setBloodPressure] = useState("");
  const [SkinThickness, setSkinThickness] = useState("");
  const [Insulin, setInsulin] = useState("");
  const [BMI, setBMI] = useState("");
  const [DiabetesPedigreeFunction, setDiabetesPedigreeFunction] = useState("");
  const [Age, setAge] = useState("");
  function submitH() {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ "Pregnancy": Pregnancy, "Glucose": Glucose, "BloodPressure": BloodPressure, "SkinThickness": SkinThickness, "Insulin": Insulin, "BMI": BMI, "DiabetesPedigreeFunction": DiabetesPedigreeFunction, "Age": Age })
    };
    fetch('/predict', options)
      .then(response => response.json())
      .then(response => { console.log(response) ;navigate("/result");})
      .catch(err => console.error(err));
  }
  return (
    <div className="Container">
      <h1>Enter The Following Details...</h1>
      <form className='form' >
        <Form.Group>
          <Form.Label>Pregnancy</Form.Label>
          <Form.Control type="text" value={Pregnancy} name="Pregnancy" onChange={(e) => setPregnancy(e.target.value)} placeholder="pregnancie count" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Glucose</Form.Label>
          <Form.Control type="text" value={Glucose} name="Glucose" onChange={(e) => setGlucose(e.target.value)} placeholder="pregnancie count" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>BloodPressure</Form.Label>
          <Form.Control type="text" value={BloodPressure} name="BloodPressure" onChange={(e) => setBloodPressure(e.target.value)} placeholder="pregnancie count" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>SkinThickness</Form.Label>
          <Form.Control type="text" value={SkinThickness} name="SkinThickness" onChange={(e) => setSkinThickness(e.target.value)} placeholder="pregnancie count" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Insulin</Form.Label>
          <Form.Control type="text" value={Insulin} name="Insulin" onChange={(e) => setInsulin(e.target.value)} placeholder="pregnancie count" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>BMI</Form.Label>
          <Form.Control type="text" value={BMI} name="BMI" onChange={(e) => setBMI(e.target.value)} placeholder="pregnancie count" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>DiabetesPedigreeFunction</Form.Label>
          <Form.Control type="text" value={DiabetesPedigreeFunction} name="DiabetesPedigreeFunction" onChange={(e) => setDiabetesPedigreeFunction(e.target.value)} placeholder="pregnancie count" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" value={Age} name="Age" onChange={(e) => setAge(e.target.value)} placeholder="pregnancie count" />
        </Form.Group>
        <br />
        <div className="btn">
            <Button id="btn" variant="primary" onClick={() =>submitH()} >
              Submit
            </Button>
        </div>
      </form>
    </div>
  )
}

export default Diabetes;