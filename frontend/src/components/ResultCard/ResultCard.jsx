import React from "react";
import { Link } from "react-router-dom";
export default function ResultCard({ parentSavedData }) {
  return (
    <div className="cards">
      {parentSavedData.map((el, index) => (
        <div className="card" key={index}>
          <Link to={`videos/${el.id.videoId}`}>
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
}
