import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import SearchPage from "../SearchPage/SearchPage";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  // const [cars, setCars] = useState([]);
  const [quote, setQuote] = useState([]);
  useEffect(() => {
    // const fetchCars = async () => {
    //   try {
    //     let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
    //       headers: {
    //         Authorization: "Bearer " + token,
    //       },
    //     });
    //     setCars(response.data);
    //   } catch (error) {
    //     console.log(error.response.data);
    //   }
    // };
    // fetchCars();
    // fetchQuote();
  }, [token]);

  // async function fetchQuote() {
  //   try {
  //     const response = await axios.get("https://zenquotes.io/api/random/");
  //     // let data = await response.json();
  //     // console.log(data);
  //     setQuote(response);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }
  return (
    <div className="container">
      <h1>Home Page for {user.username} !</h1>
      <p>How are you doing?</p>
      {/* <p>{quote}</p> */}
      {/* <VideoPlayer /> */}
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
};

export default HomePage;
