
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Add from "./components/add";

const App = () => {
  const [record, setRecord] =useState({})
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
    axios.delete("http://localhost:3000/record/" + deletedRecord._id)
    .then((response) => {
      let newRecord = record.filter((record) => {
        return record._id !== deletedRecord._id
      })
      setRecord(newRecord)
    })
  }

  useEffect(() => {
    getRecords();
  }, []);


  return (
    <>
      <h1> Record Collection</h1>

      <Add handleCreate={handleCreate} />

      <button onClick={()=>{handleDelete(record)}}>X</button>
      </>
  );
};

export default App;
