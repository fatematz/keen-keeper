'use client'
import { useContext } from "react";
import { FriendContext } from "@/context/FriendContext";
import { Phone, MessageSquare, Video } from 'lucide-react';
import {useRouter} from 'next/navigation';

const CheckInSection=({friendName}) => {
    const { AddCart } = useContext(FriendContext);
    const router=useRouter();

    const handleAdd=(type) => {
        const newData={
            id: Date.now(),
            name: friendName,
            type: type,
            date: new Date().toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
        };

        AddCart(newData)
    router.push('/timeline')
    }

    

    return (
        <div className="grid grid-cols-3 gap-4 text-center">
            <button 
                onClick={() => handleAdd('Call')}
                className="bg-white p-4 rounded-lg cursor-pointer flex justify-center items-center gap-2 border hover:bg-gray-50"
            >
                <Phone size={24} /> <p className="text-[20px]">Call</p>
            </button>

            <button 
                onClick={() => handleAdd('Text')}
                className="bg-white p-4 rounded-lg cursor-pointer flex justify-center items-center gap-2 border hover:bg-gray-50"
            >
                <MessageSquare size={24} /> <p className="text-[20px]">Text</p>
            </button>

            <button 
                onClick={() => handleAdd('Video')}
                className="bg-white p-4 rounded-lg cursor-pointer flex justify-center items-center gap-2 border hover:bg-gray-50"
            >
                <Video size={24} /> <p className="text-[20px]">Video</p>
            </button>
        </div>
    );
};

export default CheckInSection;