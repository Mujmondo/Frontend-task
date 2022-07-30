import { Link } from "react-router-dom";

const Signup = () => {
    return ( 
        <div className="container flex h-screen justify-center items-center">
        <div className="form-container bg-white shadow-xl flex items-center">
           <div className="form-wallpaper-2 h-full">
           </div>
           <div className="signup-form text-center">
               <h1 className=" text-xl font-medium text-blue-500 my-4">Create a new account</h1>
               <form className="text-sm" action="">
                   <div className="mb-5">
                   <input className="px-2 py-1.5 ring-1 ring-sky-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-72" 
                   type="text" placeholder="Username" required />
                   </div>
                   <div className="mb-5">
                   <input className="px-2 py-1.5 ring-1 ring-sky-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-72" 
                   type="email" placeholder="Email" required />
                   </div>
                   <div className="mb-5">
                   <input className="px-2 py-1.5 ring-1 ring-sky-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-72" 
                   type="tel" placeholder="Mobile" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                   </div>
                   <div className="mb-5">
                   <input className="px-2 py-1.5 ring-1 ring-sky-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-72" 
                   type="password" placeholder="Password" required />
                   </div>
                   <div className="mb-5">
                   <input className="px-2 py-1.5 ring-1 ring-sky-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 w-72" 
                   type="password" placeholder="Confirm password" required />
                   </div>
                   <button className="mb-2 bg-blue-400 px-4 py-1 rounded-full text-white hover:bg-blue-500 focus:ring-2 focus:ring-blue-300"
                   >Sign up</button>
                   <p className="text-sm"><span className="mr-1">Already a member?</span>
                       <Link to="/" className="text-blue-400 hover:text-blue-600">Login now</Link></p> 
               </form>
           </div>
       </div>
      </div>
     );
}
 
export default Signup;