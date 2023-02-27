import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { KEY } from "../../YTAPIKey";

//import components
import ResultCard from "../../components/ResultCard/ResultCard";
import SearchBar from "../../components/SearchBar/SearchBar";

const SearchPage = () => {
  //this page is used to set up our Axios requests to fetch videos from the YouTube API based on the provided search string
  const [queryParam, setQueryParam] = useState("warhammer");
  const [savedData, setSavedData] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => {
    getVideo();
    console.log("Collecting results from YouTube.");
  }, []);

  async function getVideo() {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${queryParam}&key=${KEY}&part=snippet&type=video`
      );
      console.log(response.data.items);
      setSavedData(response.data.items);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div id="container">
      <div>
        <SearchBar setQueryParam={setQueryParam} getVideo={getVideo} />
      </div>
      <div>
        <ResultCard parentSavedData={savedData} />
      </div>
    </div>
  );
};

export default SearchPage;
