import React, { useEffect, useState } from "react";
import List from "./components/List";
import axios from "axios";
import { baseUrl } from "./utils/constant";

const App = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [updateUi, setUpdateUi] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    axios.get(`${baseUrl}/get`).then((res) => {
      setTasks(res.data);
    });
  }, [updateUi]);

  const addTask = () => {
    axios.post(`${baseUrl}/post`, { task: input }).then((res) => {
      console.log(res.data);
      setInput("");
      setUpdateUi((prevState) => !prevState);
    });
  };

  const updateMode = (id,text) => {
    console.log(text)
    setInput(text)
    setUpdateId(id)
  }

  const updateTask = () => {
    axios.put(`${baseUrl}/put/${updateId}`, {task:input}).then((res) => {
      console.log(res.data)
      setUpdateUi((prevState) => !prevState);
      setUpdateId(null)
      setInput("")
    }
    )
  }

  return (
    <main>
      <h1 className="title">CRUD Operations</h1>
      <div className="input_holder">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={updateId ? updateTask : addTask}>
          {updateId ? "Update Task" : "Add Task"}
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <List
            key={task._id}
            id={task._id}
            task={task.task}
            setUpdateUi={setUpdateUi}
            updateMode={updateMode}
          />
        ))}
      </ul>
    </main>
  );
};

export default App;
