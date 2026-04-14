
import {Bell, Archive, Trash2} from 'lucide-react';
import { Phone, MessageSquare, Video } from 'lucide-react';
import data from '../../../../public/data.json';

const DetailsCard=async ({params}) => {
    const { id } = await params

    // const res = await fetch('http://localhost:3000/data.json')
    // const data = await res.json()
    // console.log(data)

    const friend=data.find((f) => f.id==id)
    
    const statusColors = {
        'overdue': 'bg-[#ff5a5a] text-white',
        'almost due': 'bg-[#febc2e] text-white',
        'on-track': 'bg-[#1a535c] text-white'
    }

    return (
        <div className="grid grid-cols-2 container gap-[24px] py-[60px]">
            {/* <h1> {friend.name} </h1> */}
            <div className='flex flex-col gap-6 '>
                <div className='bg-gray-100 p-4 rounded-xl text-center space-y-4'>
                    <div className='flex justify-center '>
                        <img
                            className='rounded-full w-[100px] h-[100px] '
                            src={friend.picture}
                            alt=''
                        />
                    </div>

                    <div className=''>
                        <h1 className="text-[20px] font-semibold"> {friend.name} </h1>
                    </div>

                    <div className='ml-[140px]'>
                        {/* {friend.status} */}
                         <p className={`px-4 py-1 ml-[20px] rounded-full text-[13px] font-semibold capitalize w-[200px] shadow-sm ${statusColors[friend.status] || 'bg-gray-200'}`}> {friend.status} </p>
                    </div>

                    <div className='bg-green-200 w-[200px] p-1 rounded-2xl ml-[161px]'> <p className="">
                    {friend.tags[1]}</p> </div>
                    <div className='text-[#64748B] italic'>{friend.bio}</div>
                    <div className='text-[#64748B] flex justify-center gap-2 '>
                       <div className="italic">
                            Preferred:
                            </div>
                    <span className="text-black">
                            {friend.email}
                            </span>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="bg-gray-100 p-4 rounded-xl flex gap-2 items-center justify-center ">
                       <Bell size={20} /> Snooze 2 weeks
                    </div>
                    <div className="bg-gray-100 p-4 rounded-xl flex gap-2 items-center justify-center">
                       <Archive size={20} /> Archive
                    </div>
                    <div className="bg-gray-100 p-4 rounded-xl flex gap-2 items-center justify-center text-red-500">
                      <Trash2 size={20} />  Delete
                    </div>
                </div>
            </div>

            
            <div className="">
                <div className="space-y-10">

                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-100 p-4 rounded-xl text-center">
                        <h2 className="text-xl font-bold"> {friend.days_since_contact} </h2>
                            <p className="text-sm text-gray-500">
                                
                            Days Since Contact
                        </p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-xl text-center">
                        <h2 className="text-xl font-bold">{friend.goal}</h2>
                        <p className="text-sm text-gray-500">
                            Goal (Days)
                        </p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-xl text-center">
                        <h2 className="text-xl font-bold">
                            {friend.next_due_date}
                        </h2>
                        <p className="text-sm text-gray-500">
                            Next Due
                        </p>
                    </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-xl  ">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold">
                            Relationship Goal
                        </h3>
                        <button className="text-sm border px-2 py-1 rounded">
                            Edit
                        </button>
                    </div>

                    <p className="mt-2 text-sm">
                        Connect every <strong>{friend.days_since_contact} days</strong>
                    </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-xl">
                    <h3 className="font-semibold mb-4">
                        Quick Check-In
                    </h3>

                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="bg-white p-4 rounded-lg cursor-pointer flex justify-center items-center gap-2 ">
                             <Phone size={24} />
                            <p className="text-[24px]">Call</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg cursor-pointer flex justify-center items-center gap-2">
                               <MessageSquare size={24} />
                            <p className="text-[24px]">Text</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg cursor-pointer flex justify-center items-center gap-2">
                            <Video size={24} />
                            <p className="text-[24px]">Video</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}

export default DetailsCard


