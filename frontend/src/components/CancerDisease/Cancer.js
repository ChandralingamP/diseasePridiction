import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../Diabetes/diabetes.css";
import { useNavigate } from "react-router-dom";
function Kidney() {
  const navigate = useNavigate();
  const [radius_mean, setradius_mean] = useState(null);
  const [texture_mean, settexture_mean] = useState(null);
  const [perimeter_mean, setperimeter_mean] = useState(null);
  const [area_mean, setarea_mean] = useState(null);
  const [smoothness_mean, setsmoothness_mean] = useState(null);
  const [compactness_mean, setcompactness_mean] = useState(null);
  const [concavity_mean, setconcavity_mean] = useState(null);
  const [concave_points_mean, setconcave_points_mean] = useState(null);
  const [symmetry_mean, setsymmetry_mean] = useState(null);
  const [fractal_dimension_mean, setfractal_dimension_mean] = useState(null);
  const [radius_se, setradius_se] = useState(null);
  const [texture_se, settexture_se] = useState(null);
  const [perimeter_se, setperimeter_se] = useState(null);
  const [area_se, setarea_se] = useState(null);
  const [smoothness_se, setsmoothness_se] = useState(null);
  const [compactness_se, setcompactness_se] = useState(null);
  const [concavity_se, setconcavity_se] = useState(null);
  const [concave_points_se, setconcave_points_se] = useState(null);
  const [symmetry_se, setsymmetry_se] = useState(null);
  const [fractal_dimension_se, setfractal_dimension_se] = useState(null);
  const [radius_worst, setradius_worst] = useState(null);
  const [texture_worst, settexture_worst] = useState(null);
  const [perimeter_worst, setperimeter_worst] = useState(null);
  const [area_worst, setarea_worst] = useState(null);
  const [smoothness_worst, setsmoothness_worst] = useState(null);
  const [compactness_worst, setcompactness_worst] = useState(null);
  const [concavity_worst, setconcavity_worst] = useState(null);
  const [concave_points_worst, setconcave_points_worst] = useState(null);
  const [symmetry_worst, setsymmetry_worst] = useState(null);
  const [fractal_dimension_worst, setfractal_dimension_worst] = useState(null);
  function submitH() {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        features: [
          radius_mean,
          texture_mean,
          perimeter_mean,
          area_mean,
          smoothness_mean,
          compactness_mean,
          concavity_mean,
          concave_points_mean,
          symmetry_mean,
          fractal_dimension_mean,
          radius_se,
          texture_se,
          perimeter_se,
          area_se,
          smoothness_se,
          compactness_se,
          concavity_se,
          concave_points_se,
          symmetry_se,
          fractal_dimension_se,
          radius_worst,
          texture_worst,
          perimeter_worst,
          area_worst,
          smoothness_worst,
          compactness_worst,
          concavity_worst,
          concave_points_worst,
          symmetry_worst,
          fractal_dimension_worst,
        ],
        disease: "cancer",
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
          <Form.Label>radius_mean</Form.Label>
          <Form.Control
            type="number"
            value={radius_mean}
            name="radius_mean"
            onChange={(e) => setradius_mean(e.target.value)}
            placeholder="radius_mean"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>texture_mean</Form.Label>
          <Form.Control
            type="number"
            value={texture_mean}
            name="texture_mean"
            onChange={(e) => settexture_mean(e.target.value)}
            placeholder="texture_mean"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>perimeter_mean</Form.Label>
          <Form.Control
            type="number"
            value={perimeter_mean}
            name="perimeter_mean"
            onChange={(e) => setperimeter_mean(e.target.value)}
            placeholder="perimeter_mean"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>area_mean</Form.Label>
          <Form.Control
            type="number"
            value={area_mean}
            name="area_mean"
            onChange={(e) => setarea_mean(e.target.value)}
            placeholder="area_mean"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>smoothness_mean</Form.Label>
          <Form.Control
            type="number"
            value={smoothness_mean}
            name="smoothness_mean"
            onChange={(e) => setsmoothness_mean(e.target.value)}
            placeholder="smoothness_mean"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>compactness_mean</Form.Label>
          <Form.Control
            type="number"
            value={compactness_mean}
            name="compactness_mean"
            onChange={(e) => setcompactness_mean(e.target.value)}
            placeholder="compactness_mean"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>concavity_mean</Form.Label>
          <Form.Control
            type="number"
            value={concavity_mean}
            name="concavity_mean"
            onChange={(e) => setconcavity_mean(e.target.value)}
            placeholder="concavity_mean"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>concave_points_mean</Form.Label>
          <Form.Control
            type="number"
            value={concave_points_mean}
            name="concave_points_mean"
            onChange={(e) => setconcave_points_mean(e.target.value)}
            placeholder="concave_points_mean"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>symmetry_mean</Form.Label>
          <Form.Control
            type="number"
            value={symmetry_mean}
            name="symmetry_mean"
            onChange={(e) => setsymmetry_mean(e.target.value)}
            placeholder="symmetry_mean"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>fractal_dimension_mean</Form.Label>
          <Form.Control
            type="number"
            value={fractal_dimension_mean}
            name="fractal_dimension_mean"
            onChange={(e) => setfractal_dimension_mean(e.target.value)}
            placeholder="fractal_dimension_mean"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>radius_se</Form.Label>
          <Form.Control
            type="number"
            value={radius_se}
            name="radius_se"
            onChange={(e) => setradius_se(e.target.value)}
            placeholder="radius_se"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>texture_se</Form.Label>
          <Form.Control
            type="number"
            value={texture_se}
            name="texture_se"
            onChange={(e) => settexture_se(e.target.value)}
            placeholder="texture_se"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>perimeter_se</Form.Label>
          <Form.Control
            type="number"
            value={perimeter_se}
            name="perimeter_se"
            onChange={(e) => setperimeter_se(e.target.value)}
            placeholder="perimeter_se"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>area_se</Form.Label>
          <Form.Control
            type="number"
            value={area_se}
            name="area_se"
            onChange={(e) => setarea_se(e.target.value)}
            placeholder="area_se"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>smoothness_se</Form.Label>
          <Form.Control
            type="number"
            value={smoothness_se}
            name="smoothness_se"
            onChange={(e) => setsmoothness_se(e.target.value)}
            placeholder="smoothness_se"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>compactness_se</Form.Label>
          <Form.Control
            type="number"
            value={compactness_se}
            name="compactness_se"
            onChange={(e) => setcompactness_se(e.target.value)}
            placeholder="compactness_se"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>concavity_se</Form.Label>
          <Form.Control
            type="number"
            value={concavity_se}
            name="concavity_se"
            onChange={(e) => setconcavity_se(e.target.value)}
            placeholder="concavity_se"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>concave_points_se</Form.Label>
          <Form.Control
            type="number"
            value={concave_points_se}
            name="concave_points_se"
            onChange={(e) => setconcave_points_se(e.target.value)}
            placeholder="concave_points_se"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>symmetry_se</Form.Label>
          <Form.Control
            type="number"
            value={symmetry_se}
            name="symmetry_se"
            onChange={(e) => setsymmetry_se(e.target.value)}
            placeholder="symmetry_se"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>fractal_dimension_se</Form.Label>
          <Form.Control
            type="number"
            value={fractal_dimension_se}
            name="fractal_dimension_se"
            onChange={(e) => setfractal_dimension_se(e.target.value)}
            placeholder="fractal_dimension_se"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>radius_worst</Form.Label>
          <Form.Control
            type="number"
            value={radius_worst}
            name="radius_worst"
            onChange={(e) => setradius_worst(e.target.value)}
            placeholder="radius_worst"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>texture_worst</Form.Label>
          <Form.Control
            type="number"
            value={texture_worst}
            name="texture_worst"
            onChange={(e) => settexture_worst(e.target.value)}
            placeholder="texture_worst"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>perimeter_worst</Form.Label>
          <Form.Control
            type="number"
            value={perimeter_worst}
            name="perimeter_worst"
            onChange={(e) => setperimeter_worst(e.target.value)}
            placeholder="perimeter_worst"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>area_worst</Form.Label>
          <Form.Control
            type="number"
            value={area_worst}
            name="area_worst"
            onChange={(e) => setarea_worst(e.target.value)}
            placeholder="area_worst"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>smoothness_worst</Form.Label>
          <Form.Control
            type="number"
            value={smoothness_worst}
            name="smoothness_worst"
            onChange={(e) => setsmoothness_worst(e.target.value)}
            placeholder="smoothness_worst"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>compactness_worst</Form.Label>
          <Form.Control
            type="number"
            value={compactness_worst}
            name="compactness_worst"
            onChange={(e) => setcompactness_worst(e.target.value)}
            placeholder="compactness_worst"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>concavity_worst</Form.Label>
          <Form.Control
            type="number"
            value={concavity_worst}
            name="concavity_worst"
            onChange={(e) => setconcavity_worst(e.target.value)}
            placeholder="concavity_worst"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>concave_points_worst</Form.Label>
          <Form.Control
            type="number"
            value={concave_points_worst}
            name="concave_points_worst"
            onChange={(e) => setconcave_points_worst(e.target.value)}
            placeholder="concave_points_worst"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>symmetry_worst</Form.Label>
          <Form.Control
            type="number"
            value={symmetry_worst}
            name="symmetry_worst"
            onChange={(e) => setsymmetry_worst(e.target.value)}
            placeholder="symmetry_worst"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>fractal_dimension_worst</Form.Label>
          <Form.Control
            type="number"
            value={fractal_dimension_worst}
            name="fractal_dimension_worst"
            onChange={(e) => setfractal_dimension_worst(e.target.value)}
            placeholder="fractal_dimension_worst"
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
