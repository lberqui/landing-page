import { Link } from "react-router-dom";

export const Navbar = () => {
  const stylo =
    "py-5 px-4 hover:bg-slate-700 rounded-md";
  return (
    <>
      <header className="bg-slate-900 flow-root p-3">
      <img className="float-left w-20 h-20 border-purple-200 border-2 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/api-heroes-luis.appspot.com/o/landing-page%2FLOGO.webp?alt=media&token=867b3bca-9f36-45f8-b636-7ebfa75c97ac" width="80" height="80"/>
        

      

      <div class="topnav bg-slate-900 pt-3" id="myTopnav">
   
    
        <Link className={stylo} to="/Contactame">
          Contactame
        </Link>
        <Link className={stylo} to="/SobreMi">
          Sobre mi
        </Link>
        <Link className={stylo} to="/Experiencia">
          Experiencia
        </Link>
        <Link className={stylo} to="/Estudios">
          Estudios
        </Link>
        <Link className={stylo} to="/Inicio">
          🏠Inicio
        </Link>
      </div>
       {/* <nav className="mt-6 flex-right items-center font-bold w-full text-white md:flex md:w-auto justify-end">
       
        <Link className={stylo} to="/Inicio">
          🏠Inicio
        </Link>
        <Link className={stylo} to="/Estudios">
          Estudios
        </Link>
        <Link className={stylo} to="/Experiencia">
          Experiencia
        </Link>
        <Link className={stylo} to="/React">
          Sobre mi
        </Link>
        <Link className={stylo} to="/Contactame">
          Contactame
        </Link>
        </nav> */}
      </header>
    </>
  );
};
