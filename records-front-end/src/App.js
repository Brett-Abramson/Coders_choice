import './App.css';
import {useState} from "react"
import axios from "axios"

const App = () => {
  const [record, setRecord] =useState({})

  const handleDelete = (deletedRecord) => {
    axios.delete("http://localhost:3000/record/" + deletedRecord._id)
    .then((response) => {
      let newRecord = record.filter((record) => {
        return record._id !== deletedRecord._id
      })
      setRecord(newRecord)
    })
  }

  return (
    <>
      <h1> Record Collection</h1>
      <button onClick={()=>{handleDelete(record)}}>X</button>
    </>

  )
}

export default App;
