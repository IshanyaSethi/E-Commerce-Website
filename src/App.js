import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Registrationpage from "./pages/Registrationpage";
import Cart from "./pages/Cart";
import Productinfo from "./pages/Productinfo";
import "./stylesheets/layout.css";
import "./stylesheets/products.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/login" exact element={<Loginpage />} />
          <Route path="/register" exact element={<Registrationpage />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route
            path="/Productinfo/:productid"
            exact
            element={<Productinfo />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
