import Image from "next/image";
import lifeImage from "../../public/life.svg";

export const SectionHero = () => {
  const github = "https://github.com/HSgz";
  return (
    <section className="container mx-auto">
      <div className="hero min-h-[90vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse pt-0">
          <Image
            src={lifeImage}
            className="max-w-md rounded-lg shadow-2xl w-72 lg:w-96"
            alt="life network"
          />
          <div>
            <h1 className="text-4xl font-bold md:text-5xl">
              Desarrollador Web!
            </h1>
            <p className="py-6 text-sm md:text-xl">
              Hola me llamo Henry, soy desarrollador web full stack con
              experiencia en JavaScript. Si quieres conocer un poco de mis
              proyectos en la siguiente sección te muestro algunos, aunque te
              dejo el enlace a mi perfil de{" "}
              <a className="link link-primary" href={github}>
                GitHub
              </a>
              .
            </p>
            <a href="#technology">
            <button className="btn btn-primary flex gap-2">
              Continuar
              <svg
                className="w-6 h-5 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                ></path>
              </svg>
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
