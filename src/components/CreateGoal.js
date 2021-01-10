import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {produce} from "immer"

export default function CreateDiaryEntry(){

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [mileStones, setMilestones] = useState([])
  const [date, setdate] = useState(new Date())
  const [Goal, testGoal] = useState({
    title: "test1",
    description: "test2",
    date: new Date(),
    milestone: "testMileStone"
  })
 


  function onChangeTitle(e) {
    setTitle(e.target.value)
    setGoal({...goal,  title: e.target.value})
}

  function onChangeDescription(e) {
    setDescription(e.target.value)
    setGoal({...goal,  description: e.target.value})
  }

  function onChangeMilestone(e) {
    setmilestone(parseInt(e.target.value))
    setGoal({...goal,  milestone: parseInt(e.target.value)})
  }

  function onChangeDate(date) {
    setdate(date)
    setGoal({...goal,  date: date})
  }


  function onSubmit(e) {
    e.preventDefault();
    console.log(goal);

    axios.post('http://localhost:5000/goals/add', goal)
      .then(res => console.log(res.data));

    window.location = '/';
  }

    return (
    <div>
      <h3>Create New Goal</h3>
      <form onSubmit={onSubmit}>

        <div className="form-group"> 
          <label>Title: </label>
          <select 
            // ref="userInput"
              required
              className="text"
              value={title}
              onChange={onChangeTitle}>
          </select>
        </div>

        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={description}
              onChange={onChangeDescription}
              />
        </div>

        <div className="form-group">
          <label>Add a milestone </label>
          <input 
              type="text" 
              className="form-control"
              value={milestone}
              onChange={onChangeMilestone}
              />
        </div>

        <div className="form-group">
          <label>Completed by: </label>
          <div>
            <DatePicker
              selected={date}
              onChange={onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create goal Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
}