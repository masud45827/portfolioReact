import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const Datafetch = () => {
const data = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div id="data-fetch">
      {/* <button onClick={fetchdata}>Fetch Data</button> */}
      <h1>Fetch data by custom hooks</h1>
      {!data ? (
        <h1 style={{ color: "red" }}>Loading...</h1>
      ) : (
        <ul>
          {data.map((user) => (
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

