function Card() {
  return (
    <div className="card w-full bg-base-100 shadow-xl image-full">
      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
      <div className="card-body btn">
        <h2 className="card-title">Shoes!</h2>


      </div>
    </div>
  )
}


export const SectionProjects = () => {
  return (
    <section className="container mx-auto text-center my-5 h-full">
      <h3 className="text-2xl font-bold">Alguno de mis proyectos</h3>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-7 px-4 md:p-0">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <br />
    </section>
  )
}