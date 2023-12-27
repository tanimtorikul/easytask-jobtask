import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdDelete, MdEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Tasks = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        if (user) {
          const response = await axios.get(
            `https://easytask-server.vercel.app/tasks?email=${user.email}`
          );
          setTasks(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, [user]);

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`https://easytask-server.vercel.app/tasks/${taskId}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
      toast.success("Task deleted successfully");
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen overflow-y-scroll">
      <Helmet>
        <title>Dashboard - All Tasks | EasyTask</title>
      </Helmet>

      <div className="flex justify-end p-4">
        <Link to="/dashboard/createtask">
          <button className="bg-[#E94560] rounded-md py-2 px-4 text-white text-sm">
            Create Task
          </button>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-md p-6 overflow-y-scroll">
          <h2 className="text-xl font-semibold mb-4 bg-sky-400 p-2 text-white text-center">
            To Do
          </h2>
          {tasks.map((task) => (
            <div key={task._id} className="mb-4 border-b border-gray-300 pb-4">
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <p className="text-gray-600">Start Date: {task.startDate}</p>
              <p className="text-gray-600">End Date: {task.endDate}</p>
              <p className="text-gray-600">Priority: {task.priority}</p>
              <p className="text-gray-600">Description: {task.description}</p>
              <div className="mt-2 flex justify-evenly space-x-2">
                <Link to={`/dashboard/updatetask/${task._id}`}>
                  <button className="flex items-center text-blue-500">
                    <MdEdit size={24} />
                  </button>
                </Link>
                <button
                  className="flex items-center text-red-500"
                  onClick={() => handleDelete(task._id)}
                >
                  <MdDelete size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4 bg-red-700 p-2 text-white text-center">
            Ongoing
          </h2>
        </div>

        <div className="bg-white rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4 bg-green-500 p-2 text-white text-center">
            Completed
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
