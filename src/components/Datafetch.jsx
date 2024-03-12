
import React, { useEffect, useState } from 'react';

const Datafetch = () => {
    const [data,setData] =useState(null);
    const [count,setCount] = useState(0);
    useEffect(()=>{
       const fetchData = async() =>{
         const respone = await fetch("https://jsonplaceholder.typicode.com/users");
         const  res = await respone.json();
         setData(res);
       }
       fetchData();
    },[count]);
    const  newDataFetch = () =>{
        setData(null);
        setCount(count+1);
    }
    return (
              <div id='data-fetch'>
                <button onClick={newDataFetch}>Fetch Data</button>
            {!data ? (
                <h1 style={{color:'red'}}>Loading...</h1>
            ) : (
                <ul>
                    {data.map(user => (
                        <li key={user.id}>
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Datafetch;