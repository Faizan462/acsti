import Image from "next/image"
import avsti from "../avsti.gif"
export default function New() {
    return (  
        <section>
            <div className="flex-col w-1/4 p-4 bg-gray-100 transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300 rounded-3xl">
                <div>
                    <Image src={avsti} alt="" height={150}  width={250}/>  
                </div>
                <div>
                    <h3>Sewing and embroidery are two related but distinct skills that involve working with fabric and thread to create various types of designs and garments. Sewing involves joining fabric pieces together using a needle and thread or a sewing machine to create items such as clothing, bags, and accessories. Embroidery, on the other hand, involves decorating fabric with designs or patterns using various types of stitches and threads.</h3>
                </div>
                <div>
                    <button  className=" rounded-xl p-2 bg-red-500 px-8">ABC</button>
                </div>
            </div>
        </section>
      )
}