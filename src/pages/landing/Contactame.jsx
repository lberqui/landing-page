import { useState, useEffect } from "react";
import AlertError from "./AlertError";

const Contactame = () => {
  const [titulo, setTitulo] = useState("");
  const [email, setEmail] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [error, setError] = useState(false);

  const generarID = () => {
    const id = Math.random().toString(20).substr(2);
    return id;
  };

  const limpiarFormulario = () => {
    //    Limpiar formulario
    setTitulo("");
    setEmail("");
    setdescripcion("");
  };

  //  Validación formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([titulo, email, descripcion].includes("")) {
      setError(true);
      return;
    } else {
      setError(false);

      // Objeto de tareas
      const objetoTareas = {
        titulo,
        email,
        descripcion,
      };

      Swal.fire("Su mensaje se ha enviado exitosamente", "😎", "success");
      limpiarFormulario();
    }
  };

  return (
    <div className="md:flex h-auto min-h-screen">
      <div className="items-center md:w1/2 lg:w-full text-center p-10 bg-[#D9D9D9] shadow-md shadow-black grid justify-items-stretch grid-cols-2">
        <div className="contacto rounded-lg m-4 shadow-md shadow-black bg-[#1F2431] p-10 h-80 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            fill="white"
            class="bi bi-geo-alt"
            viewBox="0 0 16 16"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          <p className="text-white font-bold mt-8">Bogota - Colombia</p>
        </div>
        <div className="contacto bg-[#1F2431] rounded-lg m-4 shadow-md shadow-black p-10 h-80 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            fill="white"
            class="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
          <p className="text-white font-bold mt-8">+57 3156389655</p>
        </div>
        <div className="contacto bg-[#1F2431] rounded-lg m-4   shadow-md shadow-black p-10 h-80 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            fill="white"
            class="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          <p className="text-white font-bold mt-8">
            https://github.com/lberqui
          </p>
        </div>
        <div className="contacto bg-[#1F2431] rounded-lg m-4 shadow-md shadow-black p-10 h-80 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            fill="white"
            class="bi bi-envelope-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
          </svg>
          <p className="text-white font-bold mt-8">LBERQUI@GMAIL.COM</p>
        </div>
      </div>



      <div className="lg:w-full">
        <form
          onSubmit={handleSubmit}
          className="bg-[#1F2431] mt-16 mb-4 shadow-md rounded-lg py-10 px-5"
        >
          <div class="mb-4"></div>
          <div className="mb-5">
            <label
              htmlFor="titulo"
              className="block text-white uppercase font-bold"
            >
              Titulo :
            </label>
            <input
              id="titulo"
              className="border-2 w-full p-2 mt-2 rounded-md placeholder-slate-400"
              type="text"
              placeholder="Titulo de la  de la solicitud"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="Fecha"
              className="block text-white uppercase font-bold"
            >
              Su correo:
            </label>
            <input
              id="Fecha"
              className="border-2 w-full p-2 mt-2 rounded-md placeholder-slate-400"
              placeholder="Ej: example@example.com"
              type="email"
              value={email}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="descripcion"
              className="block text-white uppercase font-bold"
            >
              Descripción :
            </label>
            <textarea
              id="descripcion"
              className="border-2 w-full h-80 p-2 mt-2 rounded-md placeholder-slate-400"
              type="text"
              placeholder="Descripción de la solicitud"
              value={descripcion}
              onChange={(e) => setdescripcion(e.target.value)}
            />
          </div>

          <input
            type="submit"
            className="bg-[#D9D9D9] text-black hover:bg-[#24292F]/90 hover:text-white w-full p-3  uppercase font-bold rounded-md  transition-colors cursor-pointer"
            value="Enviar"
          />

          {error && <AlertError></AlertError>}
        </form>
      </div>
    </div>
  );
};

export default Contactame;
