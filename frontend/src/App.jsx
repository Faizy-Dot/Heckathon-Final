import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reception from "./pages/reception/reception";
import StaffForm from "./pages/departmentStaff/department";
import HomePage from "./pages/landingPage/LandingPage";
import AdminDashboard from "./admin/Admin";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/reception" element={<Reception />} />
        <Route path="/department" element={<StaffForm />} />
          </Routes>
    </Router>
  );
}
