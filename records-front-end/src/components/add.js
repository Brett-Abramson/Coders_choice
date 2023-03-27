import { useState } from "react";
import axios from "axios";

const Add = (props) => {
  const [record, setRecord] = useState({
    recordName: "",
    artistName: "",
    releaseYear: Number,
    tracks: [
      {
        trackName: "",
        trackLength: Number,
      },
    ],
  });

  return <></>;
};
export default Add;
