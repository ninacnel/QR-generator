import React, { useState } from "react";
import DownloadQR from "../downloadQR/DownloadQR";
import FormCard from "../formCard/FormCard";

const FormCode = () => {
  const [info, setInfo] = useState({});
  const [qrCodeUrl, setQRCodeUrl] = useState("");
  const [error, setError] = useState(null);
  const [codeNumber, setCodeNumber] = useState("");

  const generateQRCode = async (info) => {
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
      <FormCard
        generateQR={generateQRCode}
        getInfoHandler={setInfo}
        setNumber={setCodeNumber}
      />
      {error && (
        <div style={{ color: "red" }}>
          <p>{error}</p>
        </div>
      )}
      {qrCodeUrl && <DownloadQR qr={qrCodeUrl} codeNumber={codeNumber} />}
    </div>
  );
};

export default FormCode;
