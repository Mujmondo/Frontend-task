import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";

const Signup = () => {
    const navigate = useNavigate();
    const REGISTER_URL = "/register";
    const [username, setUsername] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');
    const [errMsg, setErrMsg] = useState('');
     const [errCode, setErrCode] = useState('');
    useEffect(() => {
       setErrCode('');
       setErrMsg('');
    }, [username, mobile, email, password, password2]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const reponse = await axios.post(REGISTER_URL,
                JSON.stringify({ username, email, mobile, password, password2 }),
            );
            console.log(JSON.stringify(reponse?.data));
            setUsername('');
            setEmail('');
            setMobile('');
            setPassword('');
            setPassword2('');
            navigate('/login');
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
                <div className="form-wallpaper-2 h-full">
                </div>
                <div className="signup-form text-center">
                    <h1 className=" text-xl font-medium text-blue-500 my-4">Create a new account</h1>
                    <form onSubmit={handleSubmit} className="text-sm">
                        <input className="mb-5 px-2 py-1.5 ring-1 ring-sky-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-72"
                            onChange={(e) => setUsername(e.target.value.toLowerCase())}
                            value={username}
                            type="text" placeholder="Username" required /><br />

                        <input className="mb-5 px-2 py-1.5 ring-1 ring-sky-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-72"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email" placeholder="Email" required /><br />

                        <input className="mb-5 px-2 py-1.5 ring-1 ring-sky-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-72"
                            onChange={(e) => setMobile(e.target.value)}
                            value={mobile}
                            type="tel" placeholder="Mobile: 0123456789" pattern="[0]{1}[1,9]{1}[0-9]{8}" required /><br />

                        <input className="mb-5 px-2 py-1.5 ring-1 ring-sky-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-72"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password" placeholder="Password" minLength="8" required /><br />

                        <input className={password2 === password? 'mb-5 px-2 py-1.5 ring-1 ring-sky-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-72': 
                        'mb-5 px-2 py-1.5 ring-1 ring-sky-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-red-500 w-72'}
                            onChange={(e) => setPassword2(e.target.value)}
                            value={password2}
                            type="password" placeholder="Confirm password" minLength="8" required /><br />
                               <p className="text-xs text-black-500 mb-2 mx-3">
                               <span className="text-sm text-red-500">{errCode}</span><br/>{errMsg}</p>
                        <button 
                        className="mb-2 bg-blue-400 px-4 py-1 rounded-full text-white hover:bg-blue-500 focus:ring-2 focus:ring-blue-300"
                        >Sign up</button>
                    </form>
                    <p className="text-xs"><span className="mr-1">Already a member?</span>
                        <Link to="/login" className="text-blue-400 hover:text-blue-600">Login now</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;