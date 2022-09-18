import { Routes, Route, Link } from "react-router-dom";
import InicioPage from '../pages/landing/InicioPage';
import Estudios from '../pages/landing/Estudios';
import Experiencia from '../pages/landing/Experiencia';
import Contactame from '../pages/landing/Contactame';
import SobreMi from '../pages/landing/SobreMi';
import { Navbar } from './Navbar';
import Footer from './Footer';
export const AppNavigador = () => {
  return (
    <>
      <>

        {" "}
        <Navbar />
        <Routes>
          <Route path="/*" element={<InicioPage />} />
          <Route path="/inicio" element={<InicioPage />} />
          <Route path="/Estudios" element={<Estudios />} />
          <Route path="/Experiencia" element={<Experiencia />} />
          <Route path="/SobreMi" element={<SobreMi />} />
          <Route path="/Contactame" element={<Contactame />} />
          
        </Routes>
        <Footer />
      </>
    </>  );
};
