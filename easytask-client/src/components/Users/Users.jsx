
const Users = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Who Uses Our Platform?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white overflow-hidden shadow rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Developers</h3>
            <p className="text-gray-600">
              Developers can efficiently organize and track their coding tasks,
              collaborate with team members, and manage project timelines on our
              platform.
            </p>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Corporate Professionals</h3>
            <p className="text-gray-600">
              Corporate professionals can streamline their daily tasks, manage
              projects, and enhance team collaboration using our task management
              tools.
            </p>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Bankers</h3>
            <p className="text-gray-600">
              Bankers can stay organized with financial tasks, track deadlines,
              and collaborate with team members seamlessly on our task
              management website.
            </p>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Doctors</h3>
            <p className="text-gray-600">
              Medical professionals can efficiently manage patient appointments,
              track medical research tasks, and collaborate with healthcare
              teams on our platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
