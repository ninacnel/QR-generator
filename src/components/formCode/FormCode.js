import React, { useState } from "react";
import Card from "../card/Card";
import DownloadQR from "../downloadQR/DownloadQR";

const FormCode = () => {
  const [info, setInfo] = useState({});
  const [qrCodeUrl, setQRCodeUrl] = useState("");
  const [error, setError] = useState(null);

  const generateQRCode = async () => {
    try {
      const encodedProd = encodeURIComponent(info.prod_code);

      const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodedProd}&size=${info.height}x${info.width}`;
      const response = await fetch(url);

      if (response.ok) {
        // se pasa la respuesta a Blob (binary data)
        const blob = await response.blob();

        const imageUrl = URL.createObjectURL(blob);

        setQRCodeUrl(imageUrl);
        setError(null);
      } else {
        setError(
          `Failed to fetch QR code: ${response.status} ${response.statusText}`
        );
        console.error(
          "Failed to fetch QR code:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      setError(`Error fetching QR code: ${error.message}`);
      console.error("Error fetching QR code:", error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
      <Card getInfoHandler={setInfo} generateQR={generateQRCode} />
      {Object.keys(info).length !== 0 && (
        <div>
          <h2>{info.prod_code}</h2>
        </div> // solo es para mostrar lo que deberia guardarse
      )}
      {error && (
        <div style={{ color: "red" }}>
          <p>{error}</p>
        </div>
      )}
      {qrCodeUrl && <DownloadQR qr={qrCodeUrl} code={info.prod_code} />}
    </div>
  );
};

export default FormCode;
