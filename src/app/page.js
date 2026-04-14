import Banner from "@/components/Banner";
import FriendsCard from "@/components/FriendsCard";
import GetFriendsData from "@/lib/GetFriendsData";


export default async function Home() {
  // const res = await fetch("http://localhost:3000/data.json")
  // const FriendsData=await res.json()
  
const data = await GetFriendsData()
  return (
    <div className=" container pb-[60px]">
      <Banner></Banner>
      <h1 className="text-24 font-semibold pb-[20px]">Your Friends</h1>
      <main className=" ">
        
        <div className="grid grid-cols-4 gap-4">
          {data.map(data => (
            <FriendsCard key={data.id} data={data} />
          ))}
        </div>

      </main>
    </div>
  );
}