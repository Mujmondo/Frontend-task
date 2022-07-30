import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";
const Login = () => {
    const navigate = useNavigate();
    const LOGIN_URL = "/login";
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
     const [errCode, setErrCode] = useState('');

     useEffect(() => {
        setErrCode('');
        setErrMsg('');
     }, [username, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const reponse = await axios.post(LOGIN_URL,
                JSON.stringify({ username, password }),
            );
            console.log(JSON.stringify(reponse?.data));
            setUsername('');
            setPassword('');
            navigate('/');
        }
        catch (err) { 
            if (!err?.reponse){
                console.log(err);
                setErrCode(err.response.data.code);
                setErrMsg(err.response.data.message);
            }
        }
    }
    return ( 
       <div className="container flex h-screen justify-center items-center">
         <div className="form-container bg-white shadow-xl flex items-center">
            <div className="form-wallpaper h-full">
            </div>
            <div className="login-form text-center">
                <h1 className=" text-xl font-medium text-blue-500 my-4">Login to your account</h1>
                <form className="text-sm" onSubmit={handleSubmit}>
                    <div className="mb-5">
                    <input className="px-2 py-1.5 ring-1 ring-sky-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-72" 
                    onChange={(e)=> setUsername(e.target.value.toLowerCase())}
                    value={username}
                    type="text" placeholder="Username" required />
                    </div>
                    <div className="mb-5">
                    <input className="px-2 py-1.5 ring-1 ring-sky-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-72" 
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}
                    type="password" placeholder="Password" minLength={8} required />
                    </div>
                    <p className="text-xs text-black-500 mb-2 mx-3">
                               <p className="text-sm text-red-500">{errCode}</p>{errMsg}</p>
                    <button className="mb-2 bg-blue-400 px-4 py-1 rounded-full text-white hover:bg-blue-500 focus:ring-2 focus:ring-blue-300">login</button>
                    <p className="text-xs"><span className="mr-1">Not yet member?</span>
                        <Link to="/register" className="text-blue-400 hover:text-blue-600">Signup now</Link></p> 
                </form>
            </div>
        </div>
       </div>
     );
}
 
export default Login;