import Image from 'next/image'
import { FaYoutube, FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='bg-[#244D3F] text-center p-16  '>
            <div className='container space-y-4'>
                <div className='flex justify-center'>
                    <Image
                        src='/assets/logoxl.png'
                        alt='KeenKeeper'
                        width={412}
                        height={61}
                    />
                </div>
                <div>
                    <p className="text-[#FAFAFA]">
                        Your personal shelf of meaningful connections. Browse,
                        tend, and nurture the relationships that matter most.
                    </p>
                </div>

                <div className=''>
                    <p className='text-white'>Social Links</p>
                </div>

                <div className='flex justify-center items-center gap-4 pb-4'>
                    <a className="bg-white p-2 rounded-full" href=''>
                        <FaYoutube />
                    </a>
                    <a className="bg-white p-2 rounded-full" href=''>
                        <FaFacebook />
                    </a>
                    <a className="bg-white p-2 rounded-full" href=''>
                        <FaXTwitter />
                    </a>
                </div>

                   <hr className="border-t-1 border-gray-50  " />

                <div className='flex justify-between pt-4 flex-wrap'>
                    <p className="text-[#FAFAFA]">© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex gap-[30px] text-[#FAFAFA] flex-wrap'>
                        <a href=''>Privacy Policy</a>
                        <a href=''>Terms of Service</a>
                        <a href=''>Cookies</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
