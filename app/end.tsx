import Image from "next/image"
import logo from '../logo.png'
export default function End() {
    return (
     <>
        <div className="flex justify-between items-center px-28 mt-56 bg-blue-400">
            <div>
                <Image src={logo} alt="" height={150}  width={110} />
            </div>
            <div>
                <div>
                    <h1 className="text-2xl text-white"><b>QUICK LINK</b></h1>
                </div>
                <div>
                    <button className="text-white hover:text-blue-600 mt-4">ABOUT US</button>
                </div>
                <div>
                    <button className="text-white hover:text-blue-600 mt-4"> SKILL</button>
                </div>
                <div>
                    <button className="text-white hover:text-blue-600 mt-4">CONTACT</button>
                </div>
            </div>
                <div>
                    <div>
                    <h1 className="text-2xl text-white"><b>Course</b></h1>
                </div>
                <div>
                    <button className="text-white hover:text-blue-600 mt-4">Swing and Embrodery</button>
                </div>
                <div>
                    <button className="text-white hover:text-blue-600 mt-4">Beautician</button>
                </div>
                <div>
                    <button className="text-white hover:text-blue-600 mt-4">Computer Science & IT</button>
                </div>
                <div>
                    <button className="text-white hover:text-blue-600 mt-4">Freelance</button>
                </div>
            </div>
            <div>
                <div>
                    <h1 className="text-2xl text-white"><b>REQUEST SERVICE</b></h1>
                </div>
                <div>
                    <p className="font-bold mt-4 text-white">Location</p>
                </div>
            </div>
        </div>
     </>
    )
  }