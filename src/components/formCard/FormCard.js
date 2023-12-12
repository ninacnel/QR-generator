import React, { useState } from "react";

const FormCard = ({ generateQR, getInfoHandler }) => {
  const [info, setInfo] = useState({});
  const [code, setCode] = useState("");
  const [size, setSize] = useState(200);

  const onCodeChangeHandler = (event) => {
    setCode(event.target.value);
  };

  const generateCodeHandler = () => {
    let info = {
      prod_code: `http://cuerre-23.netlify.app/prod/${code}`,
      width: size,
      height: size,
    };
    setInfo(info);
    getInfoHandler(info);
    generateQR(info);
  };

  return (
    <div>
      <div className="">
        <div className="card border-0 p-2 d-flex justify-content-center align-items-center">
          <input
            className="form-control border-0"
            type="text"
            value={code}
            placeholder="Ingrese producto"
            style={{
              width: "200px",
              borderRadius: "20px",
              backgroundColor: "gainsboro",
            }}
            onChange={onCodeChangeHandler}
          />
          <button
            className="btn mt-2"
            style={{
              borderRadius: "20px",
              width: "150px",
              backgroundColor: "	cadetblue",
              color: "white",
            }}
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
