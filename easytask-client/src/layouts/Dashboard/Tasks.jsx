import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/tasks");

        setTasks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Dashboard - All Tasks | EasyTask</title>
      </Helmet>

      <div className="flex justify-end">
        <Link to="/dashboard/createtask">
          <button className="bg-[#E94560] rounded-md my-1 px-4 text-white text-sm">
            Create Task
          </button>
        </Link>
      </div>

      <div>
        <h2>All Tasks</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>{task.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
