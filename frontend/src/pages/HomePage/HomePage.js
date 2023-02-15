import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  // const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchBookshelves = async () => {
      try {
        let response = await axios.get("");
      } catch (error) {}
    };
    return (
      <div className="container">
        <h1>Home Page</h1>
        <p>How are you doing today, {user.username}</p>
        {/* <Link to="/addcar">Add Car!</Link>
      {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))} */}
        {/* TODO #1: place bookshelves here*/}
      </div>
    );
  });
};
export default HomePage;
