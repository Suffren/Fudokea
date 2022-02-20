import './App.css';
import Tips from './components/Tips';
import Tip from './components/Tip';
import History from './components/History';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Routes>
          <Route path="/" element={<History />} />
          <Route path="tips" element={<Tips />} />
          <Route path="tips/:tipId" element={<Tip />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Perdu ?</p>
              </main>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;