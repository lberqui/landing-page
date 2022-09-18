const InicioPage = () => {
  return (
    <div className="md:flex h-auto min-h-screen">
      <div className="lg:w-full bg-[#222222] shadow-md shadow-black">
        <img  class="principal ph-auto min-h-screen w-auto" src="\src\img\logo-og.webp" width="690" />
      </div>

      <div className="items-center md:w1/2 lg:w-full text-center p-10 bg-[#D9D9D9] shadow-md shadow-black grid justify-items-stretch grid-cols-2">
       
        <div className="estudio rounded-lg m-4 shadow-md shadow-black bg-[#1F2431] p-10 h-80 text-center">
          <img className="m-auto" src="/src/img/Logo_unad_color.png" width="150" />
          <p className="text-white font-bold">
            Ingenieria de sistemas 2020 - Actualidad
          </p>
        </div>
        <div className="estudio bg-[#1F2431] rounded-lg m-4 shadow-md shadow-black p-10 h-80 text-center">
          <img className="" src="/src/img/fimlm.png" width="120" />
          <p className="text-white font-bold">
            Diplomado en ReactJS 2022 - Actualidad
          </p>
        </div>
        <div className="estudio bg-[#1F2431] rounded-lg m-4   shadow-md shadow-black p-10 h-80 text-center">
          <img className="rounded-md" src="/src/img/CBN.png" width="140" />
          <p className="text-white font-bold">
            Técnico de sistemas 2015 - 2017
          </p>
        </div>
        <div className="estudio bg-[#1F2431] rounded-lg m-4 shadow-md shadow-black p-10 h-80 text-center">
          <img className="" src="/src/img/INEM.png" width="140" />
          <p className="text-white font-bold">Bachiller 2008 - 2014</p>
        </div>
      </div>
    </div>
  );
};

export default InicioPage;
