import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DepartmentsBolimMalaxat from "./departmentsBolimMalaxat/DepartmentsBolimMalaxat";
import NavbarMain from "./pageNavbar/NavbarMain";
import AboutPage from "../components/AboutPage/Aboutpage";
import PageContent from "./PageContent/PageContent";
import LoginPage from "../pages/loginPage/LognPage";
import HadislarHook from "../hooks/PageHadislar/pageHadislarHook";
import MaslaxatHook from "../hooks/pageMaslaxat/pageMaslaxatHook";
import RivoyatlarHook from "../hooks/pageRivoyatlar/pageRivoyatlarHook";
import KitoblarHook from "../hooks/PageKitoblar/pageKitoblarHook";
import PagefooterMain from "./pageFooter/pagefootermain";
import AlMaxtumPageMain from "./booksKitoblar/alMaxtumPageMain/alMaxtumPageMain";

export default function ComponentsMainPage() {
  return (
    <div>
      <Router>
        <NavbarMain />
        <Routes>
          <Route path="/page/about" element={<AboutPage />} />
          <Route path="/page/content" element={<PageContent />} />
          <Route path="/page/LoginPage" element={<LoginPage />} />
          <Route path="/*" element={<DepartmentsBolimMalaxat />} />

          <Route path="/page/Hadislar" element={<HadislarHook />} />
          <Route path="/page/Maslaxat" element={<MaslaxatHook />} />
          <Route path="/page/Rivoyatlar" element={<RivoyatlarHook />} />
          <Route path="/page/Kitoblar" element={<KitoblarHook />} />
          <Route path="/page/Kitoblar/al-maxtum" element={<AlMaxtumPageMain />} />
        </Routes>
        <PagefooterMain />
      </Router>
    </div>
  );
}
