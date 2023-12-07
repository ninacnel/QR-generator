import React, { useState } from "react";

const Card = ({ getInfoHandler, generateQR }) => {
  const [code, setCode] = useState("");
  const [size, setSize] = useState(100);

  const onCodeChangeHandler = (event) => {
    setCode(event.target.value);
  };

  const setCodeHandler = () => {
    let info = {
      prod_code: `http://localhost:3000/prod/${code}`,
      width: size,
      height: size,
    };
    getInfoHandler(info);
  };

  const generateCodeHandler = () => {
    generateQR();
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="card p-2">
          <input
            className="form-control"
            type="text"
            value={code}
            placeholder="Ingrese producto"
            style={{ width: "200px" }}
            onChange={onCodeChangeHandler}
          />
          <button className="btn btn-outline-success" onClick={setCodeHandler}>
            Set Code
          </button>
          <button
            className="btn btn-outline-success"
            onClick={generateCodeHandler}
          >
            Generate Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
