import { useState } from "react";

const Edit = (props) => {
  const [record, setRecord] = useState({ ...props.record });
  const [showEdit, setShowEdit] = useState(false);

  const handleChange = (event) => {
    setRecord({ ...record, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleEdit(record);
    setShowEdit(!showEdit);
  };

  const toggleEdit = () => {
    setShowEdit(!showEdit);
    console.log(showEdit);
  };
  const EditForm = () => {
    return (
      <>
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
          <label htmlFor="recordArtwork">Record Artwork</label>
          <input
            type="text"
            name="recordArtwork"
            onChange={handleChange}
            value={record.recordArtwork}
          />
          <input type="submit" />
        </form>
        <button
          onClick={() => {
            props.handleDelete(record);
          }}
        >
          Delete this Record
        </button>
        <button onClick={toggleEdit}>Cancel</button>
      </>
    );
  };
  return (
    <>
      {showEdit ? (
        <EditForm />
      ) : (
        <>
          <button onClick={toggleEdit}>Edit Record</button>
        </>
      )}
    </>
  );
};

export default Edit;
