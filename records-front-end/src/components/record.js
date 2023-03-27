import react from "react";

const Record = (props) => {
  return (
    <>
      <div>
        <ul>
          <li>{props.record.recordName}</li>
          <li>{props.record.artistName}</li>
          <li>{props.record.releaseYear}</li>
        </ul>
      </div>
    </>
  );
};

export default Record;
