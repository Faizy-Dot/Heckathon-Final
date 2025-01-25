import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./admin/Admin";
import ManageUsers from "./AdminComponents/ManageUser";
import LandingPage from "./pages/landingPage/LandingPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
         <Route path="/admin" element={<Admin />} />
         <Route path="/admin/userManager" element={<ManageUsers />}/>
        {/* <Route path="/receptionist" element={<ReceptionistDashboard />} /> */}
        {/* <Route path="/department" element={<DepartmentDashboard />} />  */}
      </Routes>
    </Router>
  );
}
