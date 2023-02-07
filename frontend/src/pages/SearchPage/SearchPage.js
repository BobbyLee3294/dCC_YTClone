import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { KEY } from "../../localKey";

//import components
import SearchBar from "../../components/SearchBar/SearchBar";

const SearchPage = () => {
  //this page is used to set up our Axios requests to fetch videos from the YouTube API based on the provided search string
  const [queryParam, setQueryParam] = useState("warhammer");
  const [savedData, setSavedData] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => {
    getVideo();
    console.log("Collecting results from YouTube.");
  }, [queryParam]);

  async function getVideo() {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${queryParam}&key=${KEY}&part=snippet&type=video`
      );
      setSavedData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  return <SearchBar setQueryParam={setQueryParam} />;
};

export default SearchPage;
