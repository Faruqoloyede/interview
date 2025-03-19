import { useAuthstore } from "../hooks/useAuthstore";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface FormValues {
    email: string;
    password: string;
}

const Login = () => {
    const {register, handleSubmit } = useForm<FormValues>();
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();
    const login = useAuthstore((state)=> state.login);

    const submit = (value: FormValues) =>{
        const loginCredentials = login(value.email, value.password);
        if(!loginCredentials){
            setError("password must be at least 8 characters");
            return;
        }
        navigate('/profile');
    }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-md p-6 rounded-[20px] w-96">
            <h2 className="text-center text-2xl font-bold">Login</h2>
            <form className="mt-4" onSubmit={handleSubmit(submit)}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-[18px] font-medium text-gray-700">Email</label>
                    <input 
                    {...register('email', {required: 'email is required'})}
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-[18px] font-medium text-gray-700">Password</label>
                    <input 
                    {...register('password', {required: 'password is required'})}
                    type="password"
                    id="password" 
                    name="password"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none"/>
                    {/* error */}
                    {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
                </div>
                <button type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 cursor-pointer transition duration-300 text-white p-3 rounded-md font-medium">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login