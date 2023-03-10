import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import heart from "../Assests/heart.png";
import diabetes from "../Assests/diabetes.png";
import cancer from "../Assests/cancer.png";
import kidney from "../Assests/kidney.png";
import liver from "../Assests/liver.png";
const Home = () => {
  return (
    <>
      <header>
        <div className="bg"></div>
        <h1>Disease Prediction <br />System</h1>
        <p>3 Step Disease Prediction App</p>
      </header>
      <div className="section">
        <h2>
          Select The Category
        </h2>
        <div id="DiseaseMenu">
          <Link to="/heart">
            <div className="disease-menu">
              <img id="img" alt="some" src={heart} />
              <h1>Heart Disease Prediction</h1>
            </div>
          </Link>
          <Link to="/liver">
            <div className="disease-menu">
              <img id="img" src={liver} alt="some"/>
              <h1>Liver Disease Prediction</h1>
            </div>
          </Link>
          <Link to="/kidney">
            <div className="disease-menu">
              <img id="img" src={kidney} alt="some"/>
              <h1>Kidney Disease Prediction</h1>
            </div>
          </Link>
          <Link to="/diabetes">
            <div className="disease-menu">
              <img id="img" src={diabetes} alt="some"/>
              <h1>Diabetes Disease Prediction</h1>
            </div>
          </Link>
          <Link to="/diabetes">
            <div className="disease-menu">
              <img id="img" src={cancer} alt="some"/>
              <h1>Cancer Disease Prediction</h1>
            </div>
          </Link>
        </div>
      </div>

    </>
  );
};

export default Home;
