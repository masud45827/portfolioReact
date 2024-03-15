import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
       const fetchData = async() =>{
         setLoading(true)
         const respone = await fetch(url);
         const  res = await respone.json();
         setName(res.name);
         setEmail(res.email);
         setLoading(false)
       }
       fetchData();
    },[url]);
    return {name,email,loading}
};

export default useFetch;




// import React, { useEffect, useState } from 'react';

// const useFetch = (url) => {
//     const [data,setData] =useState(null);
//     useEffect(()=>{
//        const fetchData = async() =>{
//          const respone = await fetch(url);
//          const  res = await respone.json();
//          setData(res);
//        }
//        fetchData();
//     },[url]);
//     return data
// };

// export default useFetch;