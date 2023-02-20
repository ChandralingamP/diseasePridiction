import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../Diabetes/diabetes.css";
import { useNavigate } from "react-router-dom";
function Heart() {
  const navigate = useNavigate();
  const [Age, setAge] = useState(null);

  const [male, setMale] = useState(0); //1 male , 0 female
  const [Female, setFm] = useState(0); //1 male , 0 female
  const [Other, setOther] = useState(0); //1 male , 0 female
  const [Gender, setGender] = useState(0); //1 male , 0 female
  const [cp, setcp] = useState(null);
  const [trtbps, settrtbps] = useState(null);
  const [chol, setchol] = useState(null);
  const [fbs, setfbs] = useState(null);
  const [restecg, setrestecg] = useState(null);
  const [thalachh, setthalachh] = useState(null);
  const [exng, setexng] = useState(null);
  const [oldpeak, setoldpeak] = useState(null);
  const [slp, setslp] = useState(null);
  const [caa, setcaa] = useState(null);
  const [thall, setthall] = useState(null);
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
            cp,
            trtbps,
            chol,
            fbs,
            restecg,
            thalachh,
            exng,
            oldpeak,
            slp,
            caa,
            thall],
        disease : 'heart'
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
          <Form.Label>Gender of the patient</Form.Label>
          <div >
            <input style={{marginLeft : '5px'}} type="radio" value={male} name="gender" /> Male
            <input style={{marginLeft : '5px'}}  type="radio" value={Female} name="gender" /> Female
            <input style={{marginLeft : '5px'}}  type="radio" value={Other} name="gender" /> Other
          </div>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Cp</Form.Label>
          <Form.Control
            type="number"
            value={cp}
            name="cp"
            onChange={(e) => setcp(e.target.value)}
            placeholder="cp"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>trtbps</Form.Label>
          <Form.Control
            type="number"
            value={trtbps}
            name="trtbps"
            onChange={(e) => settrtbps(e.target.value)}
            placeholder="trtbps"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>chol</Form.Label>
          <Form.Control
            type="number"
            value={chol}
            name="chol"
            onChange={(e) => setchol(e.target.value)}
            placeholder="chol"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>fbs</Form.Label>
          <Form.Control
            type="number"
            value={fbs}
            name="fbs"
            onChange={(e) => setfbs(e.target.value)}
            placeholder="fbs"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>restecg</Form.Label>
          <Form.Control
            type="number"
            value={restecg}
            name="restecg"
            onChange={(e) => setrestecg(e.target.value)}
            placeholder="restecg"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>thalachh</Form.Label>
          <Form.Control
            type="number"
            value={thalachh}
            name="thalachh"
            onChange={(e) => setthalachh(e.target.value)}
            placeholder="thalachh"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>exng</Form.Label>
          <Form.Control
            type="number"
            value={exng}
            name="exng"
            onChange={(e) => setexng(e.target.value)}
            placeholder="exng"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>oldpeak</Form.Label>
          <Form.Control
            type="number"
            value={oldpeak}
            name="oldpeak"
            onChange={(e) => setoldpeak(e.target.value)}
            placeholder="oldpeak"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>slp</Form.Label>
          <Form.Control
            type="number"
            value={slp}
            name="slp"
            onChange={(e) => setslp(e.target.value)}
            placeholder="slp"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>caa</Form.Label>
          <Form.Control
            type="number"
            value={caa}
            name="caa"
            onChange={(e) => setcaa(e.target.value)}
            placeholder="caa"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>thall</Form.Label>
          <Form.Control
            type="number"
            value={thall}
            name="thall"
            onChange={(e) => setthall(e.target.value)}
            placeholder="thall"
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

export default Heart;
