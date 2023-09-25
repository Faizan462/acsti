import Image from "next/image"
import abc from "../abc.webp"
import Abc from "../abc2.jpg"
import IT from "../gff.jpg"
export default function Bottom() {
    return (
        <>
            <div className="flex justify-center items-center mt-24 p-6 w-2/4">
                <h2 className="text-xl"><b>Traditional Skills</b></h2>
            </div>

            <div className="flex-col w-1/4 p-4 bg-gray-100 transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300 rounded-3xl">
                <div>
                    <Image src={abc} alt="" height={200}  width={320} />
                </div>
                <div className="flex justify-center items-center mt-8 pr-8">
                    <h2 className="text-xl">Sewing and Embroidery</h2>
                </div>
                <div>
                    <h3>Sewing and embroidery are two related but distinct skills that involve working with fabric and thread to create various types of designs and garments. Sewing involves joining fabric pieces together using a needle and thread or a sewing machine to create items such as clothing, bags, and accessories. Embroidery, on the other hand, involves decorating fabric with designs or patterns using various types of stitches and threads.</h3>
                </div>
                <div>
                    <button  className=" rounded-xl hover:text-white p-2 bg-red-500 px-8">ABC</button>
                </div>
            </div>

            <div className="flex-col w-1/4 p-4 bg-gray-100 transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300 rounded-3xl">
                <div>
                    <Image src={Abc} alt="" height={200}  width={320}/>
                </div>
                <div className="flex justify-center items-center mt-8 pr-8">
                    <h3 className="text-xl">Beautician</h3>
                </div>
                <div>
                    <h3>Beautician courses are designed to teach students the skills and knowledge required to work in the beauty industry. These courses cover a wide range of topics related to beauty treatments, including skincare, makeup application, hair care, nail care, and body treatments.Beautician courses are available at many institutions, including beauty schools, vocational schools, and online platforms. They can be a great way to gain new skills or improve your existing skills in the field of beauty and skincare. Graduates of beautician courses can go on to work in a variety of settings, including salons, spas, and beauty clinics.</h3>
                </div>
                <div>
                    <button  className=" rounded-xl hover:text-white p-2 bg-red-500 px-8">ABC</button>
                </div>
            </div>

            <div className="flex justify-center items-center mt-24 p-6 w-2/4">
                <h2 className="text-xl"><b>Global Skills</b></h2>
            </div>


            <div className="flex-col w-1/4 p-4 bg-gray-100 transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300 rounded-3xl">
                <div>
                    <Image src={IT} alt="" height={200}  width={320}/>
                </div>
                <div className="flex justify-center items-center ">
                    <h2 className="text-xl">Computer Science & IT</h2>
                </div>
                <div className="flex text-center px-16">
                    <h3>CS (Computer Science) and IT (Information Technology) courses are designed to teach students about computers, software, and information systems. These courses cover a wide range of topics such as programming languages, web development, database management, networking and security, and operating systems. CS and IT courses are available at many institutions, and can help individuals gain new skills or improve their existing skills in the field of computer science and information technology.</h3>
                </div>
                <div>
                    <button  className=" rounded-xl hover:text-white p-2 bg-red-500 px-8">ABC</button>
                </div>
            </div>

            <div>
                <div className="flex justify-center items-center mt-8">
                    <h3 className="text-xl">Freelance</h3>
                </div>
                <div className="flex text-center px-16">
                    <h3>Freelance skills are abilities that are in demand in the growing gig economy, where professionals work as independent contractors or freelancers rather than traditional employees. Freelancers typically work on a project-by-project basis, and may have multiple clients at any given time.These are just a few examples of freelance skills. Freelance professionals can work in a variety of industries and fields, and can often set their own rates and schedules. Successful freelancers often have strong communication and time management skills, as well as the ability to market themselves effectively to potential clients.</h3>
                </div>
            </div>

        </>
    )
  }