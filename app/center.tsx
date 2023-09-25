import Image from "next/image"
import t1 from "../t1.jpg"
import avsti from "../avsti.gif"
export default function Center() {
    return (
    <>
    <div>
            <div className="flex justify-center items-center p-8">
                <h1 className="text-3xl text-center"><b>ALLIED VOCATIONAL SKILLS TRAINING INSTITUTE®</b></h1>
            </div>
            <div className="flex justify-center items-center ">
                <h3 className="text-gray-500 ">CENTRE FOR EMPOWERMENT AND DEVELOPMENT OF BOUNDED WOMEN</h3>
            </div>
            <div className="flex justify-center items-center font-bold hover:text-white p-8">
                <button className=" rounded-xl p-2 bg-blue-500">About Avati</button>
            </div>
            <div className="flex items-center justify-center p-8">
                <Image src={avsti} alt="" height={300}  width={800} />
            </div>


        <div className="flex justify-center items-center mt-4 bg-gray-200">
            <div className="mt-24 mb-24">
                <h3 className="text-blue-500 text-3xl p-4"> Chif Executive Officer </h3>
                <h3 className="text-3xl p-4 pl-2"><b>Muhmmad  Jafar  Bhatti</b></h3>
            <div className="pl-24 p-6">
                <button className=" rounded-xl p-2 bg-blue-500 font-bold hover:text-white p-4 ">CEO Message</button>
            </div>
        </div>
        <div className="p-4 mt-24 mb-24">
            <Image src={t1} alt="" height={450}  width={350} className="border-4 border-white  rounded-xl"/>
        </div>
      </div>
    </div>
    </>
    )
  }
  