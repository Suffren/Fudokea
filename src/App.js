import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Tip from "./components/Tip";
import Tips from "./containers/Tips";
import TipCreate from "./containers/TipCreate";
import FoodsHistory from "./containers/FoodsHistory";
import Sidebar from "./components/Sidebar";
import SignUp from "./containers/SignUp";
import Header from "./containers/Header";
import Login from "./containers/Login";
import PrivateRoute from "./PrivateRoute";

function App() {
  const isConnected = useSelector((state) => state.users.isConnected);

  return (
    <div className="App">
      <Header isConnected={isConnected} />
      <div id="page">
        {isConnected && <Sidebar />}
        <Routes>
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/"
            element={<PrivateRoute isConnected={isConnected} />}
          >
            <Route exact path="/" element={<FoodsHistory />} />
            <Route exact path="tips" element={<Tips />} />
            <Route exact path="tips/:tipId" element={<Tip />} />
            <Route exact path="tips/create" element={<TipCreate />} />
          </Route>
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
