import { Plus } from "lucide-react";

const Banner = () => {
    return (
        <div className="container text-center space-y-[30px] py-[50px] md:py-[70px] lg:py-[90px] px-[20px] md:px-[20px] lg:mx-[20px] xl:mx-0 ">
            <div className="">
                <h1 className="text-[48px] font-bold">Friends to keep close in your life</h1>
            </div>
            <div className="">
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p>
            </div>
            <div className="flex justify-center">
                <button className="bg-[#244D3F]  text-white flex items-center gap-2 py-2 px-3 rounded-sm "> <Plus size={16} /> Add a Friend</button>
            </div>
           
  <div className="">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        <div className="border-2 border-gray-100 p-7">
            <h2 className="text-[32px] font-semibold text-[#244D3F]">10</h2>
            <p className="text-[18px] text-[#64748B]">Total Friends</p>
        </div>
        <div className="border-2 border-gray-100 p-7">
            <h2 className="text-[32px] font-semibold text-[#244D3F]">3</h2>
            <p className="text-[18px] text-[#64748B]">On Track</p>
        </div>
        <div className="border-2 border-gray-100 p-7">
            <h2 className="text-[32px] font-semibold text-[#244D3F]">6</h2>
            <p className="text-[18px] text-[#64748B]">Need Attention</p>
        </div>
        <div className="border-2 border-gray-100 p-7">
            <h2 className="text-[32px] font-semibold text-[#244D3F]">12</h2>
            <p className="text-[18px] text-[#64748B]">Interactions This Month</p>
        </div>
    </div>
            </div>
            <div className="">
            <hr className="border-t-2 border-gray-100  " />
            </div>
        </div>
    );
};

export default Banner;