// import React, { useEffect, useState } from "react";
// import useFetch from "../hooks/useFetch";
// const Datafetch = () => {
//   const [userId, setUserId] = useState(1);
//   const [Loading, setLoading ] = useState(true);
//   const [data,Setdata] = useState(null);
// const  fetchData = async()=>{
//   console.log('user')
//   console.log(Loading)
//   setLoading(prevState=> !prevState)
//   res  = await useFetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//   console.log(Loading)
//   Setdata(res);
//   setLoading(prevState=> !prevState)
// }
// const fetchNextUser = () =>{
//   setUserId(()=>userId+1);
//   console.log(userId);
//    fetchData();
// }
//   return (
//     <div id="data-fetch">
//       <button onClick={fetchNextUser}>Fetch Data</button>
//       <h1>Fetch data by custom hooks</h1>
//       {Loading ? (
//         <h1 style={{ color: "red" }}>Loading...</h1>
//       ) : (
//        <div>
//          <h2>{data.name}</h2>
//           <p>{data.email}</p>
//        </div>
//       )}
//     </div>
//   );
// };

// export default Datafetch;

// import React, { useEffect, useState } from "react";
// import useFetch from "../hooks/useFetch";

// const Datafetch = () => {
//   const [userId, setUserId] = useState(1);
//   const [loading,setLoading] = useState(true);
//   const [data,setData] = useState(null);
//   const fetchData = async() => {
//     const res = await useFetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     setData(res);
//     setLoading(false);
//   };

//   const fetchNextUser = () => {
//     setLoading(true);
//     setUserId(userId + 1);
//     fetchData();
//   };
//   return (
//     <div id="data-fetch">
//       <button onClick={fetchNextUser}>Fetch Data</button>
//       <h1>Fetch data by custom hooks</h1>
//       {loading ? (
//         <h1 style={{ color: "red" }}>Loading...</h1>
//       ) : (
//         <div>
//           <h2>{data.name}</h2>
//           <p>{data.email}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Datafetch;


import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const Datafetch = () => {
const [userId, setUserId] = useState(1);
const len = 10;
const {name,email,loading} = useFetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
const fetchNextUser = () =>{
  console.log(userId,len);
  userId<len?setUserId(userId+1):setUserId(1);
}
  return (
    <div id="data-fetch">
      <button onClick={fetchNextUser}>Fetch Data</button>
      <h1>Fetch data by custom hooks</h1>
      {loading ? (
        <h1 style={{ color: "red" }}>Loading...</h1>
      ) : (
       <div>
         <h2>{name}</h2>
          <p>{email}</p>
       </div>
      )}
    </div>
  );
};

export default Datafetch;



// import React, { useEffect, useState } from "react";
// import useFetch from "../hooks/useFetch";

// const Datafetch = () => {
// const data = useFetch("https://jsonplaceholder.typicode.com/users");

//   return (
//     <div id="data-fetch">
//       <button>Fetch Data</button>
//       <h1>Fetch data by custom hooks</h1>
//       {!data ? (
//         <h1 style={{ color: "red" }}>Loading...</h1>
//       ) : (
//         <ul>
//           {data.map((user) => (
//             <li key={user.id}>
//               <h2>{user.name}</h2>
//               <p>{user.email}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Datafetch;

