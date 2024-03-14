import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
    console.log("yes",url)
    const [data,setData] =useState(null);
    useEffect(()=>{
       const fetchData = async() =>{
         const respone = await fetch(url);
         const  res = await respone.json();
         setData(res);
       }
       fetchData();
    },[url]);
    return data
};

export default useFetch;