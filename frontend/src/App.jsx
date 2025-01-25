import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/landingPage/landingPage";
import Reception from "./pages/reception/reception";
import StaffForm from "./pages/departmentStaff/department";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/reception" element={<Reception />} />
        <Route path="/department" element={<StaffForm />} />
          </Routes>
    </Router>
  );
}
