const ResultsTable = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Video Id</th>
            <th>Title</th>
            <th>Channel Name</th>
          </tr>
        </thead>
        <tbody>
          {props.parentSavedData?.map((snippet, index) => {
            return (
              <tr key={index}>
                <td id="tableVideoId">{id.videoId}</td>
                <td id="tableVideoTitle">{snippet.title}</td>
                <td id="tableChannelTitle">{index.snippet.ChannelTitle}</td>
                <td id="tableKind">{index}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
