/* eslint-disable react/jsx-no-undef */
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Navbar from "./Components/Navbar/Navbar";

/* import Practice from "./Components/Login/Login practice/Practice"; */
import DataContext from "./Components/Context/DataContext";

/* import Login from "./Components/Login/Login"; */
function App() {
  return (
    <div>
      {/* <Practice />
      <Login /> */}
      <Navbar />
      <Routes>
        <Route
          path="/home"
          element={
            <DataContext>
              <Home />
            </DataContext>
          }
        />
        <Route
          path="/about"
          element={
            <DataContext>
              <About />
            </DataContext>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
