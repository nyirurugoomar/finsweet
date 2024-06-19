import Link from "next/link"
import Image from "next/image"


function CMSNavbar() {
  return (
    <div className="flex justify-between items-center py-1 px-5">
        <Link href='/'>
           <Image className="text-white" src='/back-arrow.svg' width={40} height={40} alt="back"/>
        </Link>
        
          <Image className="border-2 border-white p-2"  src='/Logo.svg' width={140} height={28.35} alt="Logo" />
        
    </div>
  )
}

export default CMSNavbar