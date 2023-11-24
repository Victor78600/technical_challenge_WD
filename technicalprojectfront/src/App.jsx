import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import OnePhonePage from "./Pages/OnePhonePage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<OnePhonePage />} />
          <Route path="*" element={<h2>Error page</h2>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
