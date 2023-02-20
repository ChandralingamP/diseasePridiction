import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../Diabetes/diabetes.css";
import { useNavigate } from "react-router-dom";
function Kidney() {
  const navigate = useNavigate();
  const [Age, setAge] = useState(null);

  const [blood_pressure, setblood_pressure] = useState(null);
  const [specific_gravity, setspecific_gravity] = useState(null);
  const [albumin, setalbumin] = useState(null);
  const [sugar, setsugar] = useState(null);
  const [red_blood_cells, setred_blood_cells] = useState(null);
  const [pus_cell, setpus_cell] = useState(null);
  const [pus_cell_clumps, setpus_cell_clumps] = useState(null);
  const [bacteria, setbacteria] = useState(null);
  const [blood_glucose_random, setblood_glucose_random] = useState(null);
  const [blood_urea, setblood_urea] = useState(null);
  const [serum_creatinine, setserum_creatinine] = useState(null);
  const [sodium, setsodium] = useState(null);
  const [potassium, setpotassium] = useState(null);
  const [haemoglobin, sethaemoglobin] = useState(null);
  const [packed_cell_volume, setpacked_cell_volume] = useState(null);
  const [white_blood_cell_count, setwhite_blood_cell_count] = useState(null);
  const [red_blood_cell_count, setred_blood_cell_count] = useState(null);
  const [hypertension, sethypertension] = useState(null);
  const [diabetes_mellitus, setdiabetes_mellitus] = useState(null);
  const [coronary_artery_disease, setcoronary_artery_disease] = useState(null);
  const [appetite, setappetite] = useState(null);
  const [peda_edema, setpeda_edema] = useState(null);
  const [aanemia, setaanemia] = useState(null);
  function submitH() {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        features : [Age,
            blood_pressure,
            specific_gravity,
            albumin,
            sugar,
            red_blood_cells,
            pus_cell,
            pus_cell_clumps,
            bacteria,
            blood_glucose_random,
            blood_urea,
            serum_creatinine,
            sodium,
            potassium,
            haemoglobin,
            packed_cell_volume,
            white_blood_cell_count,
            red_blood_cell_count,
            hypertension,
            diabetes_mellitus,
            coronary_artery_disease,
            appetite,
            peda_edema,
            aanemia,],
        disease : 'kidney'
        
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
            type="number"
            value={Age}
            name="Age"
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age of the patient"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>blood_pressure</Form.Label>
          <Form.Control
            type="number"
            value={blood_pressure}
            name="blood_pressure"
            onChange={(e) => setblood_pressure(e.target.value)}
            placeholder="cp"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>setspecific gravity</Form.Label>
          <Form.Control
            type="number"
            value={specific_gravity}
            name="specific_gravity"
            onChange={(e) => setspecific_gravity(e.target.value)}
            placeholder="specific_gravity"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>albumin</Form.Label>
          <Form.Control
            type="number"
            value={albumin}
            name="albumin"
            onChange={(e) => setalbumin(e.target.value)}
            placeholder="albumin"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>sugar</Form.Label>
          <Form.Control
            type="number"
            value={sugar}
            name="sugar"
            onChange={(e) => setsugar(e.target.value)}
            placeholder="sugar"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>red_blood_cells</Form.Label>
          <Form.Control
            type="number"
            value={red_blood_cells}
            name="red_blood_cells"
            onChange={(e) => setred_blood_cells(e.target.value)}
            placeholder="red_blood_cells"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>pus_cell</Form.Label>
          <Form.Control
            type="number"
            value={pus_cell}
            name="pus_cell"
            onChange={(e) => setpus_cell(e.target.value)}
            placeholder="pus_cell"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>pus_cell_clumps</Form.Label>
          <Form.Control
            type="number"
            value={pus_cell_clumps}
            name="pus_cell_clumps"
            onChange={(e) => setpus_cell_clumps(e.target.value)}
            placeholder="pus_cell_clumps"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>bacteria</Form.Label>
          <Form.Control
            type="number"
            value={bacteria}
            name="bacteria"
            onChange={(e) => setbacteria(e.target.value)}
            placeholder="bacteria"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>blood_glucose_random</Form.Label>
          <Form.Control
            type="number"
            value={blood_glucose_random}
            name="blood_glucose_random"
            onChange={(e) => setblood_glucose_random(e.target.value)}
            placeholder="blood_glucose_random"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>blood_urea</Form.Label>
          <Form.Control
            type="number"
            value={blood_urea}
            name="blood_urea"
            onChange={(e) => setblood_urea(e.target.value)}
            placeholder="blood_urea"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>serum_creatinine</Form.Label>
          <Form.Control
            type="number"
            value={serum_creatinine}
            name="serum_creatinine"
            onChange={(e) => setserum_creatinine(e.target.value)}
            placeholder="serum_creatinine"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>sodium</Form.Label>
          <Form.Control
            type="number"
            value={sodium}
            name="sodium"
            onChange={(e) => setsodium(e.target.value)}
            placeholder="sodium"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>potassium</Form.Label>
          <Form.Control
            type="number"
            value={potassium}
            name="potassium"
            onChange={(e) => setpotassium(e.target.value)}
            placeholder="potassium"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>haemoglobin</Form.Label>
          <Form.Control
            type="number"
            value={haemoglobin}
            name="haemoglobin"
            onChange={(e) => sethaemoglobin(e.target.value)}
            placeholder="haemoglobin"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>packed_cell_volume</Form.Label>
          <Form.Control
            type="number"
            value={packed_cell_volume}
            name="packed_cell_volume"
            onChange={(e) => setpacked_cell_volume(e.target.value)}
            placeholder="packed_cell_volume"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>white_blood_cell_count</Form.Label>
          <Form.Control
            type="number"
            value={white_blood_cell_count}
            name="white_blood_cell_count"
            onChange={(e) => setwhite_blood_cell_count(e.target.value)}
            placeholder="white_blood_cell_count"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>red_blood_cell_count</Form.Label>
          <Form.Control
            type="number"
            value={red_blood_cell_count}
            name="red_blood_cell_count"
            onChange={(e) => setred_blood_cell_count(e.target.value)}
            placeholder="red_blood_cell_count"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>hypertension</Form.Label>
          <Form.Control
            type="number"
            value={hypertension}
            name="hypertension"
            onChange={(e) => sethypertension(e.target.value)}
            placeholder="hypertension"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>diabetes_mellitus</Form.Label>
          <Form.Control
            type="number"
            value={diabetes_mellitus}
            name="diabetes_mellitus"
            onChange={(e) => setdiabetes_mellitus(e.target.value)}
            placeholder="diabetes_mellitus"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>coronary_artery_disease</Form.Label>
          <Form.Control
            type="number"
            value={coronary_artery_disease}
            name="coronary_artery_disease"
            onChange={(e) => setcoronary_artery_disease(e.target.value)}
            placeholder="coronary_artery_disease"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>appetite</Form.Label>
          <Form.Control
            type="number"
            value={appetite}
            name="appetite"
            onChange={(e) => setappetite(e.target.value)}
            placeholder="appetite"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>peda_edema</Form.Label>
          <Form.Control
            type="number"
            value={peda_edema}
            name="peda_edema"
            onChange={(e) => setpeda_edema(e.target.value)}
            placeholder="peda_edema"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>aanemia</Form.Label>
          <Form.Control
            type="number"
            value={aanemia}
            name="aanemia"
            onChange={(e) => setaanemia(e.target.value)}
            placeholder="aanemia"
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

export default Kidney;
