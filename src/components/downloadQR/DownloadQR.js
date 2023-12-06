const DownloadQR = ({ qr, code }) => {
  const downloaderHandler = () => {
    const parts = code.split(/[\D]+/); //por si se descarga es para darle un nombre
    const codeNumber = parts.find((part) => part !== "");
    const link = document.createElement("a");
    link.href = qr;
    link.download = `producto-${codeNumber}.png`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <div className="d-flex flex-column m-2">
      <img
        src={qr}
        alt="QR Code"
        title="QR Code"
        style={{ width: "100px", height: "100px" }}
      />
      <button className="btn btn-secondary mt-2" onClick={downloaderHandler}>
        Descargar
      </button>
    </div>
  );
};

export default DownloadQR;
