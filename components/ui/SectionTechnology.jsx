import Image from "next/image";
import { codigos } from '../../data/data'

export const SectionTechnology = () => {
  return (
    <section className="container mx-auto text-center" id="technology">
      <h2 className="text-lg text-inherit transition-all duration-300 mt-5">
        Tecnologías con las que he trabajado
      </h2>
      <br />
      <div className="carousel rounded-box">
        {
          codigos.map(item => (
            <div className="carousel-item w-full" key={item.id}>
              <div className="card bg-base-100 shadow-xl w-full">
                <figure className="px-0 pt-10">
                  <Image
                    src={item.image}
                    alt="Shoes"
                    className="rounded-xl w-auto h-44"
                  />
                </figure>
                <div className="card-body items-center text-center px-0">
                  <div className="mockup-code w-fit mx-auto hover:bg-slate-700">
                    <pre data-prefix="$" className="hover:bg-green-800">
                      <code className="hover:text-lg hover:text-amber-600 font-bold">
                        {item.primero}
                      </code>
                    </pre>
                    <pre data-prefix="$" className="hover:bg-green-800">
                      <code className="hover:text-lg hover:text-amber-600 font-bold">
                        {item.segundo}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};
