import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
              <Route path="/" element={<HomePage />} />
            <Route path="*" element={<h2>Error page</h2>} />
        </Routes>
      </div>
    </>
  );
}

export default App;