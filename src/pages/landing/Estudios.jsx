const InicioPage = () => {
  return (
    <div className="md:flex h-auto min-h-screen">
      <div className="lg:w-full bg-[#222222] shadow-md shadow-black">
        <img  class="principal ph-auto min-h-screen w-auto" src="https://firebasestorage.googleapis.com/v0/b/api-heroes-luis.appspot.com/o/landing-page%2Flogo-og.webp?alt=media&token=797690ea-b064-4976-83e3-62cd6513b4be" width="690" />
      </div>

      <div className="items-center md:w1/2 lg:w-full text-center p-10 bg-[#D9D9D9] shadow-md shadow-black grid justify-items-stretch grid-cols-2">
       
        <div className="estudio rounded-lg m-4 shadow-md shadow-black bg-[#1F2431] p-10 h-80 text-center">
          <img className="m-auto" src="https://firebasestorage.googleapis.com/v0/b/api-heroes-luis.appspot.com/o/landing-page%2FLogo_unad_color.png?alt=media&token=a054626d-cce1-4ec9-9372-c58228796cb4" width="150" />
          <p className="text-white font-bold">
            Ingenieria de sistemas 2020 - Actualidad
          </p>
        </div>
        <div className="estudio bg-[#1F2431] rounded-lg m-4 shadow-md shadow-black p-10 h-80 text-center">
          <img className="" src="https://firebasestorage.googleapis.com/v0/b/api-heroes-luis.appspot.com/o/landing-page%2Ffimlm.png?alt=media&token=79185488-3249-48bd-8de6-798670cc969f" width="120" />
          <p className="text-white font-bold">
            Diplomado en ReactJS 2022 - Actualidad
          </p>
        </div>
        <div className="estudio bg-[#1F2431] rounded-lg m-4   shadow-md shadow-black p-10 h-80 text-center">
          <img className="rounded-md" src="https://firebasestorage.googleapis.com/v0/b/api-heroes-luis.appspot.com/o/landing-page%2FCBN.png?alt=media&token=f9f63644-39e5-4937-8f4a-a6a8aaaf4af1" width="140" />
          <p className="text-white font-bold">
            Técnico de sistemas 2015 - 2017
          </p>
        </div>
        <div className="estudio bg-[#1F2431] rounded-lg m-4 shadow-md shadow-black p-10 h-80 text-center">
          <img className="" src="https://firebasestorage.googleapis.com/v0/b/api-heroes-luis.appspot.com/o/landing-page%2FCBN.png?alt=media&token=f9f63644-39e5-4937-8f4a-a6a8aaaf4af1" width="140" />
          <p className="text-white font-bold">Bachiller 2008 - 2014</p>
        </div>
      </div>
    </div>
  );
};

export default InicioPage;
