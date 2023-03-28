import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Add from "./components/add";
import Edit from "./components/edit";
import Record from "./components/record";

const App = () => {
  const [records, setRecords] = useState([]);

  const getRecords = () => {
    axios.get("http://localhost:3000/records").then((response) => {
      setRecords(response.data);
    });
  };
  const handleCreate = (data) => {
    axios.post("http://localhost:3000/records", data).then((response) => {
      console.log(response);
      let newRecords = [...records, response.data];
      setRecords(newRecords);
    });
  };
  const handleDelete = (deletedRecord) => {
    axios
      .delete("http://localhost:3000/records/" + deletedRecord._id)
      .then((response) => {
        let newRecords = records.filter((record) => {
          return record._id !== deletedRecord._id;
        });
        setRecords(newRecords);
      });
  };
  const handleEdit = (data) => {
    axios
      .put("http://localhost:3000/records/" + data._id, data)
      .then((response) => {
        console.log(response);
        let newRecords = records.map((record) => {
          return record._id !== data._id ? record : data;
        });
        setRecords(newRecords);
      });
  };

  useEffect(() => {
    getRecords();
  }, []);

  return (
    <>
      <h1> Record Collection</h1>
      {records.map((record) => {
        return (
          <>
            <Record record={record} />
            <Edit
              record={record}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </>
        );
      })}
      <div>
        <Add handleCreate={handleCreate} />
      </div>
    </>
  );
};

export default App;
