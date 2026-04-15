'use client'
import { FriendContext } from '@/context/FriendContext'
import Link from 'next/link'
import { useContext } from 'react'

const FriendsCard = ({ data }) => {
    const { id, name, picture, days_since_contact, status, tags } = data

    const statusColors = {
        overdue: 'bg-[#ff5a5a] text-white',
        'almost due': 'bg-[#febc2e] text-white',
        'on-track': 'bg-[#1a535c] text-white',
    }
    const { AddCart } = useContext(FriendContext)

    return (
        <Link href={`/friends/${id}`}>
            <div
                className=' shadow-2xl border-2 border-gray-100 p-5 rounded-[24px] 
        '
            >
                <div className=' text-center space-y-2'>
                    <div className='flex justify-center '>
                        <img className='rounded-full' src={picture} alt='' />
                    </div>
                    <div className='text-[20px] font-semibold text-black'>
                        <h1 className=''> {name} </h1>
                    </div>
                    <div className='text-[18px] text-[#64748B]'>
                        <p> {days_since_contact}d ago </p>
                    </div>
                    <div className=' flex justify-center flex-wrap gap-2 '>
                        <p className='bg-green-300 px-2 rounded-2xl  text-[18px]'>
                            {tags[0]}
                        </p>
                        <p className='bg-green-300 px-2 rounded-2xl  text-[18px]'>
                            {tags[1]}
                        </p>
                    </div>

                    <div className="flex justify-center">
                    <p
                        className={`px-4   px-2  rounded-2xl rounded-full  font-semibold capitalize text-[17px] shadow-sm ${statusColors[status] || 'bg-gray-200'}`}
                    >
                        {status}
                        </p>

                        </div>
                </div>
            </div>
        </Link>
    )
}

export default FriendsCard
