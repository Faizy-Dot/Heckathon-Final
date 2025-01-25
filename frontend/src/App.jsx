import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        {/* <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/receptionist" element={<ReceptionistDashboard />} />
        <Route path="/department" element={<DepartmentDashboard />} /> */}
      </Routes>
    </Router>
  );
}
