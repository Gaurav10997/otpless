import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./DashBoard";
import Login from "./Login";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
