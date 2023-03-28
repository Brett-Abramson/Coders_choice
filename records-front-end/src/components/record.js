import react, { useState } from "react";

const Record = (props) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div>
        <img
          src={props.record.recordArtwork}
          alt={props.record.name + "'s " + "album cover"}
          width="250"
        />
      </div>
      <div>
        <ul>
          <li>{props.record.recordName}</li>
          <li>{props.record.artistName}</li>
          <li>{props.record.releaseYear}</li>
          <button type="button" onClick={toggleShow}>
            Tracks:{" "}
          </button>
          {show ? (
            <>
              <li>{props.record.tracks[0].trackName}</li>
              <li>{props.record.tracks[0].trackLength}</li>
            </>
          ) : null}
        </ul>
      </div>
    </>
  );
};

export default Record;
