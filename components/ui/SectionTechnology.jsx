import { codigos } from '../../data/data'
import CardTechnology from "./CardTechnology";

export const SectionTechnology = () => {
  return (
    <section className="container mx-auto text-center" id="technology">
      <h2 className="text-lg text-inherit transition-all duration-300 mt-6 md:text-2xl font-bold underline">
        Tecnologías con las que he trabajado
      </h2>
      <br />

      <div className="carousel rounded-box gap-7 py-8 grilla md:grid md:grid-cols-4">
        {
          codigos.map(item => (
            <CardTechnology name={item.name} id={item.id} image={item.image} primero={item.primero} segundo={item.segundo} />
          ))
        }

      </div>
    </section>
  );
};
