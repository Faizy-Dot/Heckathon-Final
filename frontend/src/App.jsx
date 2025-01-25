import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/landingPage/landingPage";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/receptionist" element={<ReceptionistDashboard />} />
        <Route path="/department" element={<DepartmentDashboard />} /> */}
      </Routes>
    </Router>
  );
}
