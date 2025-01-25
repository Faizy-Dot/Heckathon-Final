import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import AdminDashboard from "./admin/Admin";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
         <Route path="/admindashboard" element={<AdminDashboard/>} />
        {/* <Route path="/receptionist" element={<ReceptionistDashboard />} /> */}
        {/* <Route path="/department" element={<DepartmentDashboard />} />  */}
      </Routes>
    </Router>
  );
}
