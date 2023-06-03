import { useNavigate } from "react-router-dom";
import "./App.css";

import { MainRoutes } from "./routes/MainRoutes";

function App() {
  const navigate = useNavigate();
  const handleHomeButton = () => {
    navigate("/");
  };

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div>
      <div>
        <button onClick={handleHomeButton}>
          <h1>Album de fotos</h1>
        </button>
        <hr />
        <button onClick={handleBackButton}>Voltar</button>
      </div>

      <MainRoutes />
    </div>
  );
}

export default App;
