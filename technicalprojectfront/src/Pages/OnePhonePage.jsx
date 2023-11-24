import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function HomePage() {
  const { id } = useParams();
  const [phones, setPhones] = useState([]);

  //   useEffect(() => {
  //     axios.get(`http://localhost:5005/api/phones`).then((response) => {
  //       setPhones(response.data);
  //     });
  //   });

  return (
    <>
      {/* <div>
        {phones.forEach((phone) => {
          if (phone.id === id);
          return (
            <div key={phone.id}>
              <p>{phone.name}</p>
            </div>
          );
        })}
      </div> */}
    </>
  );
}

export default HomePage;
