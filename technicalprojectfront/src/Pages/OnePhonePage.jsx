import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function OnePhonePage() {
  const { id } = useParams();
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchOnePhone = async () => {
        try {
          const response = await
      axios.get(`http://localhost:5005/api/phones/${id}`)
        setPhones(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchOnePhone()
  }, [id]);
  if (loading) {
    return <img src="/spinner.gif" alt="spinner" />;
  }

  if (!phones) {
    return <p>Error: Phone not found</p>;
  }
  
      

  return (
    <>
      <div>
              <img src={`/images/${phones.imageFileName}`}  alt={phones.imageFileName}
        width="400"/>,
              <h1>{phones.name}</h1>
              <p>Manufacturer: {phones.manufacturer}</p>
              <p>Description: {phones.description}</p>
              <p>Color: {phones.color}</p>
              <p>Screen: {phones.screen}</p>
              <p>Processor: {phones.processor}</p>
              <p>Ram: {phones.ram}</p>
      
      </div>
    </>
  );
}

export default OnePhonePage;
