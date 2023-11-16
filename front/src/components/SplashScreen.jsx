import viteLogo from "../../assets/images/vite-svgrepo-com.svg";
import reactLogo from "../../assets/images/react-svgrepo-com.svg";
import tailwindLogo from "../../assets/images/tailwind-svgrepo-com.svg";
import nestJsLogo from "../../assets/images/nestjs-svgrepo-com.svg";
import { Link } from "react-router-dom";

const SplashScreen = () => {
  return (
    <section className="min-h-screen flex items-center splash-screen">
      <div className="py-8 px-4 text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Descubre los lugares ocultos de Barcelona
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Descubre los lugares ocultos alejado de las multitudes que no te
          dejarán indiferente y así poder disfrutar de la ciudad desde una
          perspectiva diferente.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="https://github.com/Kaylaesmith1/jump2digital-equip3"
            target="_blank"
            rel="noreferrer"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Ver el código
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <Link
            to={"/map"}
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              className="mr-2 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Ir al mapa
          </Link>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-gray-400 uppercase">
            Made with
          </span>
          <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
            <a
              href="#"
              className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <img src={viteLogo}></img>
            </a>
            <a
              href="#"
              className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <img src={reactLogo}></img>
            </a>
            <a
              href="#"
              className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <img src={tailwindLogo}></img>
            </a>
            <a
              href="#"
              className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <img src={nestJsLogo}></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplashScreen;
