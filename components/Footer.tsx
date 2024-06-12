import Image from "next/image"
import Link from "next/link"
import CustomButton from './CustomButton'

function Footer() {
  return (
    <div className='w-full'>
        <div className='bg-[#232536] md:mt-28 mt-10'>
           <div className='grid grid-cols-1 lg:grid-cols-2 md:p-20 p-10 justify-between '>
              <div className='md:my-0 my-4'>
                  <Image src='/Logo.svg' width={140} height={28.35} alt=""/>
              </div>
              <div className="md:flex flex md:gap-6 gap-2   md:justify-end justify-start  text-white">
                 <Link href='/' className="body0">Home</Link>
                 <Link href='/' className="body0">Blog</Link>
                 <Link href='/' className="body0">About us</Link>
                 <Link href='/' className="body0">Contact us</Link>
                 <Link href='/PrivacyPolicy' className="body0">Privacy Policy</Link>
              </div>
           </div>
           <div className="md:bg-[#6f626228] md:p-20  md:mx-14 mx-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 ">
                <div>
                  <h2 className="md:w-[562px] w-[360px] text-white md:text-[36px] text-[20px] md:leading-[48px] leading-[30px]">Subscribe to our news letter to get latest updates and news</h2>
                </div>
                <div>
                    <form action="" className="flex items-center justify-center md:gap-6 gap-4">
                        <input
                         type="email"
                         className=" text-white border-[0.3px] border-darkGray md:w-[323px] bg-[#6f626228] md:h-[56px] p-2"
                         placeholder="Enter Your Email"
                        />
                        <CustomButton
                          title="Subscribe"
                          containerStyles="bg-yellow hover:bg-[#EDC14A] md:h-[56px] md:w-[179px] hover:bg-[#EDC14A] font-bold"
                        />
                    </form>
                </div>
              </div>
           </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 md:p-20 p-10 justify-between">
              <div>
                <p className="body1">Finstreet 118 2561 Fintown</p>
                <p className="body1">Hello@finsweet.com  020 7993 2905</p>
              </div>
              <div className='flex space-x-6 mt-2 md:justify-end justify-start '>
                <img src="/Facebook_footer.svg" width={16}  height={16} alt="facebook" />
                <img src="/inst_footer.svg" width={16} height={16} alt="instagram" />
                <img src="/Linkedin_footer.svg" width={16} height={16} alt="linkedin" />
            </div>
           </div>
        </div>
    </div>
  )
}

export default Footer
