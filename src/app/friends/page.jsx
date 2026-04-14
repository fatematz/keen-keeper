import FriendsCard from "@/components/FriendsCard";
import FriendsData from "@/data.json";

const FriendsPage=async () => {
    // const res=await fetch("http://localhost:3000/data.json")
    // const FriendsData=await res.json()
    // console.log( FriendsData, "hello" )
    return (
        <div className="container grid grid-cols-4 gap-4">
            {
              FriendsData.map(data => <FriendsCard key={data.id} data={data}></FriendsCard>)  
            }
        </div>
    );
};

export default FriendsPage;