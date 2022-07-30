import { Link } from "react-router-dom";

const Welcome = () => {
    return ( 
        <div className="welcome-page">
             <div className="container flex h-screen justify-center items-center">
            <div className="form-container bg-white shadow-xl justify-center">
                <div className="mb-30 w-full m-2 p-2"><Link to="/login">Signout</Link></div>
                <h1 className="text-center text-2xl">Hello, {}</h1>
                </div>
                </div>
        </div>
     );
}
 
export default Welcome;