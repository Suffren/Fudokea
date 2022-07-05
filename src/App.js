import './App.css';
import Tips from './containers/Tips';
import Tip from './components/Tip';
import History from './containers/History';
import { Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div style={{height: '60px',  display: 'flex', alignItems: 'center', borderBottom: '2px solid #ddd', paddingLeft: '15px' }}>HHG</div>
        
      <div id="page">
        <Sidebar>gdfdg</Sidebar>
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