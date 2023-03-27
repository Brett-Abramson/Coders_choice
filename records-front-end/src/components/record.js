import react from "react";

const Record = (props) => {
  return (
    <>
      <div>
        <img src={props.record.recordArtwork} alt={props.record.name + "'s " + "album cover"} width="250" />
      </div>
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
