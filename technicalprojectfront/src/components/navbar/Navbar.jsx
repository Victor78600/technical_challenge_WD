import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/phones`)
      .then((response) => {
        setPhones(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  //Button Home

  return (
    <div className="Navbar">
      <nav>
        <ul>
        <Link to={`/`} >
                <li>Home</li>
              </Link>
          {phones.map((phone) => {
            return (
              <Link to={`/${phone.id}`} key={phone.id}>
                <li>{phone.name}</li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
