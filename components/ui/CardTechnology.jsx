import Image from "next/image";

const CardTechnology = ({ id, name, image, primero, segundo }) => {
    return (
        <div className="carousel-item w-full md:w-auto tooltip tooltip-primary" key={id} data-tip={name}>
            <div className="card bg-base-100 w-full shadow-xl">
                <figure className="px-0 pt-10">
                    <Image
                        src={image}
                        alt={name}
                        className="rounded-xl w-auto h-44"
                    />
                </figure>
                


                <div className="card-body items-center text-center px-0">
                    <div className="mockup-code w-fit mx-auto hover:bg-slate-700">
                        <pre data-prefix="$" className="hover:bg-green-800">
                            <code className="hover:text-lg hover:text-amber-600 font-bold">
                                {primero}
                            </code>
                        </pre>
                        <pre data-prefix="$" className="hover:bg-green-800">
                            <code className="hover:text-lg hover:text-amber-600 font-bold">
                                {segundo}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardTechnology