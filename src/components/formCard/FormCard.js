import React, { useState } from "react";

const FormCard = ({ generateQR, getInfoHandler }) => {
  const [info, setInfo] = useState({});
  const [code, setCode] = useState("");
  const [size, setSize] = useState(100);

  const onCodeChangeHandler = (event) => {
    setCode(event.target.value);
  };

  const generateCodeHandler = () => {
    let info = {
      prod_code: `http://localhost:3000/prod/${code}`,
      width: size,
      height: size,
    };
    setInfo(info);
    getInfoHandler(info);
    generateQR(info);
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

export default FormCard;
