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
import { RootState } from "./reducers";

function App() {
  const isConnected = useSelector((state: RootState) => state.users.isConnected);

  return (
    <div className="App">
      <Header isConnected={isConnected} />
      <div id="page">
        {isConnected && <Sidebar />}
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
                        path="/"
            element={<PrivateRoute isConnected={isConnected} />}
          >
            <Route path="/" element={<FoodsHistory />} />
            <Route path="tips" element={<Tips />} />
            <Route path="tips/:tipId" element={<Tip />} />
            <Route path="tips/create" element={<TipCreate />} />
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

export const BaseApp = App;
