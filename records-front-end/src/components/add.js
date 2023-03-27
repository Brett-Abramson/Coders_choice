import { useState } from "react";
import axios from "axios";

const Add = (props) => {
  const [track, setTrack] = useState({
    trackName: "",
    trackLength: Number,
  });
  const [record, setRecord] = useState({
    recordName: "",
    artistName: "",
    releaseYear: Number,
    recordArtwork: "",
    tracks: [track],
  });

  const handleChange = (event) => {
    setRecord({ ...record, [event.target.name]: event.target.value });
  };
  const handleTrackChange = (event) => {
    setTrack({ ...track, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCreate(record);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="recordName">Record Name:</label>
          <input type="text" name="recordName" onChange={handleChange} />
          <br />
          <label htmlFor="artistName">Artist Name:</label>
          <input type="text" name="artistName" onChange={handleChange} />
          <br />
          <label htmlFor="releaseYear">Release Year:</label>
          <input type="number" name="releaseYear" onChange={handleChange} />
          <br />
          <label htmlFor="recordArtwork">Record Artwork:</label>
          <input type="text" name="recordArtwork" onChange={handleChange} />
          <br />
          <input type="submit" />
        </form>
        <label htmlFor="trackName">Track Name:</label>
        <input type="text" name="trackName" onChange={handleTrackChange} />
        <br />
        <label htmlFor="trackLength">Track Length:</label>
        <input type="number" name="trackLength" onChange={handleTrackChange} />
      </div>
    </>
  );
};
export default Add;
