
import { useAuthstore } from "../hooks/useAuthstore";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Profile = () => {
  const { user, logout } = useAuthstore();
  const navigate = useNavigate();

  if (!user) {
    return <p className="text-center mt-20 text-red-500">Not logged in.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
     <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
  <h2 className="text-3xl font-semibold">Welcome, {user.email.substring(0,5)}</h2>
</motion.div>
      <p className="text-gray-600">you are loggedin as {user.email}</p>

      <button
        className="bg-red-600 text-white cursor-pointer px-4 py-2 rounded-md mt-4"
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
