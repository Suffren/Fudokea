import "./App.css";

import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Tips from "./containers/Tips";
import Tip from "./components/Tip";
import History from "./containers/History";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <StyledHeader>FUDOKEA</StyledHeader>
      <div id="page">
        <Sidebar />
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

const StyledHeader = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #ddd;
  background-color: white;
  padding-left: 15px;
`;
