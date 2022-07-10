import "./App.css";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Tips from "./containers/Tips";
import Tip from "./components/Tip";
import History from "./containers/History";
import Sidebar from "./components/Sidebar";
import SignUp from "./containers/SignUp";
import Header from "./containers/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="page">
        <Sidebar />

        <Routes>
          <Route path="/" element={<History />} />
          <Route path="/sign-up" element={<SignUp />} />
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
