import { useLoaderData, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateTask = () => {
  const tasks = useLoaderData();
  const { _id, title, description, priority, startDate, endDate } = tasks;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const updatedTaskData = {
        title: data.title,
        description: data.description,
        priority: data.priority,
        startDate: data.startDate,
        endDate: data.endDate,
      };

      await axios.put(
        `https://easytask-server.vercel.app/tasks/${_id}`,
        updatedTaskData
      );

      toast.success("Task updated successfully");

      navigate("/dashboard/tasks");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="py-4">
      <Helmet>
        <title>Dashboard - Update Task | EasyTask</title>
      </Helmet>
      <div className="max-w-screen-2xl mx-auto rounded-md py-2 px-10 bg-white shadow-xl text-gray-900">
        <div className="mb-2 text-center">
          <p className="text-xl font-semibold">Update {title}</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-4"
        >
          <div className="space-y-2">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-2">
                <label htmlFor="title" className="block mb-2 text-lg">
                  Task Title
                </label>
                <input
                  type="text"
                  {...register("title", { required: true })}
                  name="title"
                  defaultValue={title}
                  required
                  placeholder="Enter Task Title"
                  className="w-full px-4 py-3 border rounded-md border-gray-300 text-gray-900"
                />
                {errors.title && (
                  <span className="text-red-500">Task Title is required</span>
                )}
              </div>

              <div className="w-full md:w-1/2 px-2 mb-2">
                <label htmlFor="priority" className="block mb-2 text-lg">
                  Priority
                </label>
                <select
                  {...register("priority", { required: true })}
                  name="priority"
                  defaultValue={priority}
                  className="w-full px-4 py-3 border rounded-md border-gray-300 text-gray-900"
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                {errors.priority && (
                  <span className="text-red-500">Priority is required</span>
                )}
              </div>
            </div>

            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-2">
                <label htmlFor="startDate" className="block mb-2 text-lg">
                  Start Date
                </label>
                <input
                  type="date"
                  {...register("startDate", { required: true })}
                  name="startDate"
                  defaultValue={startDate}
                  className="w-full px-4 py-3 border rounded-md border-gray-300 text-gray-900"
                />
                {errors.startDate && (
                  <span className="text-red-500">Start Date is required</span>
                )}
              </div>

              <div className="w-full md:w-1/2 px-2 mb-2">
                <label htmlFor="endDate" className="block mb-2 text-lg">
                  End Date
                </label>
                <input
                  type="date"
                  {...register("endDate", { required: true })}
                  name="endDate"
                  defaultValue={endDate}
                  className="w-full px-4 py-3 border rounded-md border-gray-300 text-gray-900"
                />
                {errors.endDate && (
                  <span className="text-red-500">End Date is required</span>
                )}
              </div>
            </div>

            <div className="flex flex-wrap -mx-2">
              <div className="w-full px-2 mb-2">
                <label htmlFor="description" className="block mb-2 text-lg">
                  Description
                </label>
                <textarea
                  {...register("description")}
                  name="description"
                  defaultValue={description}
                  placeholder="Enter Task Description"
                  className="w-full px-4 py-3 border rounded-md border-gray-300 text-gray-900"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#40ca7a] w-1/4 rounded-md py-2 text-white text-lg"
            >
              Update Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
