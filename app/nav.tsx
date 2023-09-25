import Image from "next/image"
import logo from '../logo.png'
import Link from "next/link"
export default function Nav() {
    return (
     <>
      <div className="flex justify-between items-center p-6 bg-gray-300">
        <div className="flex justify-between pl-20 w-2/4 ">
            <Image src={logo} alt="" height={120}  width={80} />
        </div>
        <div className="flex justify-end items-center w-2/4">
            <Link href="#" className="pr-16 text-red-500 pr-8">About US</Link>
            <Link href="#" className="pr-16 text-red-500 pr-8">Skill</Link>
            <Link href="#" className="pr-16 text-red-500 pr-8">Contact</Link> 
          <div className="font-bold hover:text-white pr-12">
          <button className=" rounded-xl p-2 bg-red-500">Donate Now</button>
          </div>
        </div>
      </div>

      
     </>
    )
  }
  