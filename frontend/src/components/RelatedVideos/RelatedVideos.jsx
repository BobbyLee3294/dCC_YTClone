import React from "react";
import { Link } from "react-router-dom";

const RelatedVideos = ({ related }) => {
  return (
    <div>
      <h1>Related Videos</h1>
      {Object.values(related).map((el, index) => (
        <div className="card" key={index}>
          <Link to={`${el.id.videoId}`}>
            <div className="img-wrapper">
              <img
                src={`https://i.ytimg.com/vi/${el.id.videoId}/default.jpg`}
                alt={el.snippet.title}
              ></img>
            </div>
            <div>
              <h3>{el.snippet.title}</h3>
              <p>{el.snippet.description.slice(0, 200) + "..."}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RelatedVideos;
