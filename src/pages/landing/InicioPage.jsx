const InicioPage = () => {
  return (
     
      <div className="md:flex contenedor h-auto min-h-screen">

        <div className="lg:w-full shadow-md shadow-black">
          <img class="principal ph-auto min-h-screen" src="https://firebasestorage.googleapis.com/v0/b/api-heroes-luis.appspot.com/o/landing-page%2Fmodelo.webp?alt=media&token=df094d59-e56a-4cdf-9758-67d416ac931c" height="100%" />
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
