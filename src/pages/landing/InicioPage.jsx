const InicioPage = () => {
  return (
     
      <div className="md:flex contenedor h-auto min-h-screen">

        <div className="lg:w-full shadow-md shadow-black">
          <img class="principal ph-auto min-h-screen" src="\src\img\modelo.webp" height="100%" />
        </div>


        <div className="items-center md:w1/2 lg:w-full ph-auto min-h-screen bg-[#D9D9D9] shadow-md shadow-black  justify-items-stretch">
          <h1  className="p-10 font-bold text-6xl text-center ">Bienvenido</h1>
          <p className="text-justiy m-10 font-bold text-4xl">
          En mi sitio web explorarás todo sobre mi, mi experiencia, los
          proyectos que he realizado a lo largo del tiempo como freelancer.
        </p>
        </div>
   
    </div>
  
  );
};

export default InicioPage;
