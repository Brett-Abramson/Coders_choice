import { useState } from "react";

const Edit = (props) => {
  const [record, setRecord] = useState({ ...props.record });

  const handleChange = (event) => {
    setRecord({ ...record, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleEdit(record);
  };

  return (
    <>
    <h2>Edit Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="recordName">Record Name</label>
        <input
          type="text"
          name="recordName"
          onChange={handleChange}
          value={record.recordName}
        />
        <label htmlFor="artistName">Artist Name</label>
        <input
          type="text"
          name="artistName"
          onChange={handleChange}
          value={record.artistName}
        />
        <label htmlFor="releaseYear">Release Year</label>
        <input
          type="number"
          name="releaseYear"
          onChange={handleChange}
          value={record.releaseYear}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default Edit;
