const ResultsTable = () => {
  return (
    <>
      {savedData.items.map((el) => {
        return (
          <div className="card" key={el.id}>
            <div className="img-wrapper">
              <img
                src={`https://www.youtube.com/watch?v=${items.id.videoID}/sddefault.jpg`}
                alt={el.snippet.title}
              ></img>
            </div>
            <div>
              <h3>{elsnippet.title}</h3>
              <p>{el.snippet.description.slice(0, 100) + "..."}</p>
              <Link to={`/videos/${items.id}`}>Watch Here...</Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ResultsTable;
