import Reception from "./pages/reception/reception";
import StaffForm from "./pages/departmentStaff/department";
import AdminDashboard from "./admin/Admin";
import HomePage from "./pages/landingPage/landingPage";

import { BrowserRouter, Route,Routes } from "react-router-dom";






export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/reception" element={<Reception />} />
        <Route path="/departmentStaff" element={<StaffForm />} />
          </Routes>
    </BrowserRouter>

  );
}
