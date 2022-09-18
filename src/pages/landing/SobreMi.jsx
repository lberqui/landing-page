const InicioPage = () => {
  return (
    <div className="md:flex contenedor h-auto min-h-screen">
      <div className="lg:w-full shadow-md shadow-black">
        <img
          class="principal ph-auto min-h-screen"
          src="https://firebasestorage.googleapis.com/v0/b/api-heroes-luis.appspot.com/o/landing-page%2Fmifoto.webp?alt=media&token=1f1dffab-e5aa-44cc-a44d-0d2008480635"
          height="100%"
        />
      </div>

      <div className="items-center md:w1/2 lg:w-full ph-auto min-h-screen bg-[#D9D9D9] shadow-md shadow-black  justify-items-stretch">
        <h3 className="p-10 font-bold text-6xl text-center ">Bienvenido</h3>
        <p className="text-justiy m-10 font-bold text-4xl">
          Mi nombre es Luis Camilo Bermudez Quiroz, tengo 25 años, soy técnico
          en sistemas con enfasis en desarrollo C#. tengo conocimientos en PHP,
          Visual Basic, SQL, React JS, JavaScript.
        </p>
        <p className="text-justiy m-10 font-bold text-4xl">
          Tengo aproximadamente 5 años de experiencia en el cargo de auxiliar de
          TIC en el cual he puesto en practica el conocimiento adquirido a lo
          largo del tiempo, soy una persona dinamica, me gustan los retos y
          aprender cada día más para mejorar mis habilidades, siempre dispuesto
          a mejorar mis conocimientos y ampliar mi manera de resolver
          situaciones cotidianas.
        </p>
      </div>
    </div>
  );
};

export default InicioPage;
