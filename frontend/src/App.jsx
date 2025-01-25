import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/landingPage/landingPage";
import Reception from "./pages/reception/reception";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
       {/* <Route path="/admin" element={<AdminDashboard />} /> */}
        <Route path="/reception" element={<Reception />} />
        {/* <Route path="/department" element={<DepartmentDashboard />} />  */}
      </Routes>
    </Router>
  );
}
