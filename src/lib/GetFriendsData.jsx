// const GetFriendsData = async () => {
//     const res = await fetch('../../../../public/data.json')
//     const data = await res.json()

//     return data
// }

// export default GetFriendsData


import data from "@/data.json";

const GetFriendsData = async () => {
    return data;
}

export default GetFriendsData