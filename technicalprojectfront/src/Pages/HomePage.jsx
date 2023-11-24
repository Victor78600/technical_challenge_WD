import React, { useState, useEffect } from 'react'
import myApi from "./../services/services";
import axios from 'axios';


function HomePage() {
  const [phones, setPhones] = useState(null)

  async function fetchphones() {
    try {
      const response = await axios.get(`http://localhost:5005/api/phones`);
      setPhones(response.data);
      console.log(myApi)
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchphones();
  },);

  if (!phones) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
      {phones.map((phone) => {
            return (
              <div
                key={phone.id}
              >
                <p>
                  {phone.name}
                </p>
              </div>
            );
          })}
          <p>test</p>
      </div>
    </>
  )
}

export default HomePage
