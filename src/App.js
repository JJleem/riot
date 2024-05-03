import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import RiotAPI from "./RiotAPI";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <RiotAPI /> */}
    </div>
  );
}

export default App;
