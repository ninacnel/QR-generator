import { useNavigate } from "react-router-dom";

const DownloadQR = ({ qr, codeNumber }) => {
  const navigate = useNavigate();
  const downloaderHandler = () => {
    const link = document.createElement("a");
    link.href = qr;
    link.download = `producto-${codeNumber}.png`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  const goToProductHandler = () => {
    navigate(`/prod/${codeNumber}`);
  };

  return (
    <div className="d-flex flex-column m-2">
      <img
        src={qr}
        alt="QR Code"
        title="QR Code"
        style={{ width: "150px", height: "150px", cursor: "pointer" }}
        onClick={goToProductHandler}
      />
      <button
        className="btn btn-secondary mt-4 border-0"
        style={{ borderRadius: "20px", backgroundColor: "olivedrab" }}
        onClick={downloaderHandler}
      >
        Descargar
      </button>
    </div>
  );
};

export default DownloadQR;
