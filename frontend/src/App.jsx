import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Admin from "./admin/Admin";
import ManageUsers from "./AdminComponents/ManageUser";

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
