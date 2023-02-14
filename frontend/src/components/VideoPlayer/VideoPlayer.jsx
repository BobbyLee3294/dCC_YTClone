import React from "react";
import { Link } from "react-router-dom";
export default function VideoPlayer({ setSavedData }) {
  return (
    <div className="cards">
      {setSavedData.map((items, snippet) => (
        <div className="card" key={items.id}>
          <div className="img-wrapper">
            <img
              src={`https://www.youtube.com/watch?v=${items.id.videoID}/sddefault.jpg`}
              alt={snippet.title}
            ></img>
          </div>
          <div>
            <h3>{snippet.title}</h3>
            <p>{snippet.description.slice(0, 100) + "..."}</p>
            <Link to={`/videos/${items.id}`}>Watch Here...</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
