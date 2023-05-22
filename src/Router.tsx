import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Sucess } from "./pages/Sucess";
import { Navbar } from "./components/NavBar";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sucess" element={<Sucess />} />
      </Route>
    </Routes>
  );
}
