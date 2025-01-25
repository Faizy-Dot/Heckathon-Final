import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/landingPage/LandingPage";
import AdminDashboard from "./admin/Admin";
import StaffForm from "./pages/departmentStaff/department";



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/admin" element={<AdminDashboard />} />
        {/* <Route path="/receptionist" element={<ReceptionistDashboard />} /> */}
        <Route path="/department" element={<StaffForm />} />
      </Routes>
    </Router>
  );
}
