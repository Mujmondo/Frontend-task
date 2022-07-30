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

    // reset error messages on input value change
    useEffect(() => {
        setErrCode('');
        setErrMsg('');
    }, [username, mobile, email, password, password2]);

    // form submit function
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
            alert('Signed up successfully!')
            navigate('/login');
        }
        catch (err) {
            if (!err?.reponse) {
                setErrCode(err.response.data.code);
                setErrMsg(err.response.data.message);
            }
        }
    }
    return (
        <div className="container flex justify-center items-center mx-auto min-h-screen">
            <div className="form-container bg-white shadow-xl flex items-center">
                <div className="form-wallpaper-2  hidden lg:block h-full">
                </div>
                <div className="signup-form text-center">
                    <h1 className=" text-xl font-medium text-blue-500 my-4">Create a new account</h1>
                    <form onSubmit={handleSubmit} className="text-sm">
                        <div className="mb-2">
                            <input className="mb-1 px-2 py-1.5 ring-1 ring-sky-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-72"
                                onChange={(e) => setUsername(e.target.value.toLowerCase())}
                                pattern="^[A-Za-z0-9_-]{3,16}$"
                                value={username}
                                type="text" placeholder="Username" required />
                            <span className="text-red-600 text-xs error-check">Enter something between 3-20 characters!</span>
                        </div>
                        <div className="mb-2">
                            <input className="mb-1 px-2 py-1.5 ring-1 ring-sky-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-72"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                                type="email" placeholder="Email" required />
                            <span className="text-red-600 text-xs error-check">Enter a valid email address!</span>
                        </div>

                        <div className="mb-2">
                            <input className="mb-1 px-2 py-1.5 ring-1 ring-sky-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-72"
                                onChange={(e) => setMobile(e.target.value)}
                                value={mobile}
                                type="tel" placeholder="Mobile: 0123456789" pattern="[0]{1}[1,9]{1}[0-9]{8}" required />
                            <span className="text-red-600 text-xs error-check">Enter a valid phone number!</span>
                        </div>

                        <div className="mb-2">
                            <input className="mb-1 px-2 py-1.5 ring-1 ring-sky-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-72"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                                type="password" placeholder="Password" minLength="8" required />
                            <span className="text-red-600 text-xs error-check">Password should be at least 8 characters with a number, uppercase letter and a special character!</span>
                        </div>

                        <div className="mb-2">
                            <input className={password2 === password ? 'mb-1 px-2 py-1.5 ring-1 ring-sky-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-72' :
                                'mb-1 px-2 py-1.5 ring-1 ring-sky-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-red-500 w-72'}
                                onChange={(e) => setPassword2(e.target.value)}
                                value={password2}
                                pattern={password}
                                type="password" placeholder="Confirm password" minLength="8" required />
                            <span className="text-red-600 text-xs error-check">Passwords do not match!</span>
                        </div>

                        <p className="text-xs text-black-500 mb-2 mx-3">
                            <p className="text-sm text-red-500">{errCode}</p>{errMsg}</p>
                        <button
                            className="mb-2 bg-blue-400 px-4 py-1 rounded-full text-white hover:bg-blue-500 focus:ring-2 focus:ring-blue-300"
                        >Sign up</button>
                    </form>

                    <p className="text-xs"><span className="mr-1">Already a member?</span>
                        <Link to="/" className="text-blue-400 hover:text-blue-600">Login</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;