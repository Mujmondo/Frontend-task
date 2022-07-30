import { Link } from "react-router-dom";
const Login = () => {
    return ( 
       <div className="container flex h-screen justify-center items-center">
         <div className="form-container bg-white shadow-xl flex items-center">
            <div className="form-wallpaper h-full">
            </div>
            <div className="login-form text-center">
                <h1 className=" text-xl font-medium text-blue-500 my-4">Login to your account</h1>
                <form className="text-sm" action="">
                    <div className="mb-5">
                    <input className="px-2 py-1.5 ring-1 ring-sky-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-72" type="text" placeholder="Username" required />
                    </div>
                    <div className="mb-5">
                    <input className="px-2 py-1.5 ring-1 ring-sky-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-72" type="password" placeholder="Password" required />
                    </div>
                    <button className="mb-2 bg-blue-400 px-4 py-1 rounded-full text-white hover:bg-blue-500 focus:ring-2 focus:ring-blue-300">login</button>
                    <p className="text-sm"><span className="mr-1">Not yet member?</span>
                        <Link to="/register" className="text-blue-400 hover:text-blue-600">Signup now</Link></p> 
                </form>
            </div>
        </div>
       </div>
     );
}
 
export default Login;