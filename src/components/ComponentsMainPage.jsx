import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DepartmentsBolimMalaxat from "./departmentsBolimMalaxat/DepartmentsBolimMalaxat";
import NavbarMain from "./pageNavbar/NavbarMain";
import AboutPage from "../components/AboutPage/Aboutpage";
import PageContent from "./PageContent/PageContent";
import LoginPage from "../pages/loginPage/LognPage";

export default function ComponentsMainPage() {
  return (
    <Router>
      <Routes>
        <Route path="/page/about" element={<AboutPage />} />
        <Route path="/page/content" element={<PageContent />} />
        <Route path="/page/LoginPage" element={<LoginPage />} />
        <Route path="/*" element={<DepartmentsBolimMalaxat />} />
      </Routes>
      {/* <NavbarMain /> */}
    </Router>
  );
}
