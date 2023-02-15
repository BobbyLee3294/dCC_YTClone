import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { KEY } from "../../YTAPIKey";

//import components
import ResultsTable from "../../components/ResultsTable/ResultsTable";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

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
      console.log(response.data);
      setSavedData(response.data);
      console.log(savedData);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div id="container">
      <SearchBar
        setQueryParam={setQueryParam}
        ParentSavedData={savedData}
        getVideo={getVideo}
      />
      <ResultsTable savedData={savedData} />
    </div>
  );
};

export default SearchPage;
