import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reception from "./pages/reception/reception";
import StaffForm from "./pages/departmentStaff/department";
import HomePage from "./pages/landingPage/LandingPage";
<<<<<<< Updated upstream
import AdminDashboard from "./admin/Admin";
=======
>>>>>>> Stashed changes


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/reception" element={<Reception />} />
        <Route path="/departmentStaff" element={<StaffForm />} />
          </Routes>
    </Router>
  );
}
